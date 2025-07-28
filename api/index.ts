import express, { type Request, Response, NextFunction } from "express";
import "dotenv/config"; // Load environment variables from .env file
import { registerRoutes } from "../server/routes";
import "../server/db"; // Initialize MongoDB connection
import { seedDatabase } from "../server/seed";
import { reseedSkills } from "../server/reseed";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      console.log(logLine);
    }
  });

  next();
});

(async () => {
  try {
    // Seed database with sample data
    await seedDatabase();
    // Reseed skills with SVG icons
    await reseedSkills();
  } catch (error) {
    console.error("Database seeding failed:", error);
  }

  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    console.error(err);
  });

  // Export the app for Vercel
  if (process.env.VERCEL || process.env.NODE_ENV === "production") {
    // Don't start server in serverless environment
    module.exports = app;
  } else {
    // For local development
    const { setupVite } = await import("../server/vite");
    await setupVite(app, server);
    
    const port = parseInt(process.env.PORT || '5000', 10);
    server.listen(port, () => {
      console.log(`serving on port ${port}`);
    });
  }
})();

export default app;

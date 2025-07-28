# Portfolio Site

A modern portfolio website built with React, TypeScript, Express.js, and MongoDB.

## Features

- Responsive React frontend with modern UI components
- Express.js backend API
- MongoDB database with Mongoose ODM
- TypeScript throughout the stack
- Tailwind CSS for styling
- Deployment ready for Vercel

## Deployment to Vercel

### Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. A MongoDB database (you can use [MongoDB Atlas](https://www.mongodb.com/atlas) for free)
3. Git repository with your code

### Step-by-step Deployment

1. **Set up your MongoDB database:**
   - Create a MongoDB Atlas account if you don't have one
   - Create a new cluster and database
   - Get your connection string (it should look like: `mongodb+srv://username:password@cluster.mongodb.net/dbname`)

2. **Deploy to Vercel:**
   
   **Option A: Using Vercel CLI**
   ```bash
   # Install Vercel CLI globally
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Deploy the project
   vercel
   ```
   
   **Option B: Using Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your Git repository
   - Vercel will automatically detect the project settings

3. **Configure Environment Variables:**
   
   In your Vercel dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add the following variables:
   
   ```
   MONGODB_URI=your_mongodb_connection_string_here
   NODE_ENV=production
   ```

4. **Redeploy:**
   - After adding environment variables, trigger a new deployment
   - Your site should be live at your Vercel URL

### Environment Variables

Copy `.env.example` to `.env` for local development:

```bash
cp .env.example .env
```

Then fill in your actual values:

- `MONGODB_URI`: Your MongoDB connection string
- `NODE_ENV`: Set to "development" for local dev, "production" for deployment

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the project
npm run build
```

## Project Structure

```
├── api/                 # Vercel serverless functions
├── client/             # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── lib/
├── server/             # Express.js backend
├── shared/             # Shared types and utilities
└── vercel.json         # Vercel configuration
```

## API Routes

The backend API is available at `/api/*` endpoints:

- `/api/users` - User management
- `/api/contacts` - Contact form submissions
- `/api/projects` - Portfolio projects
- `/api/skills` - Skills and technologies
- `/api/experiences` - Work experience
- `/api/testimonials` - Client testimonials

## Troubleshooting

### Common Issues

1. **Database Connection Error:**
   - Make sure your `MONGODB_URI` is correct
   - Check that your IP address is whitelisted in MongoDB Atlas
   - Verify the database user has proper permissions

2. **Build Failures:**
   - Check that all dependencies are installed
   - Verify TypeScript types are correct
   - Ensure environment variables are set

3. **API Routes Not Working:**
   - Check that the `api/index.ts` file is present
   - Verify the `vercel.json` configuration
   - Make sure routes are properly defined in `server/routes.ts`

### Getting Help

If you encounter issues:
1. Check the Vercel deployment logs
2. Verify your environment variables
3. Test the build locally with `npm run build`
4. Check the browser console for frontend errors

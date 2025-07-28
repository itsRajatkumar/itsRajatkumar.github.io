import { z } from "zod";

// MongoDB User Schema
export const insertUserSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// MongoDB Contact Schema
export const insertContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// MongoDB Project Schema
export const insertProjectSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  image: z.string().url("Must be a valid URL"),
  technologies: z.array(z.string()),
  demoUrl: z.string().url("Must be a valid URL").optional(),
  githubUrl: z.string().url("Must be a valid URL").optional(),
  featured: z.boolean().default(false),
});

// MongoDB Skill Schema
export const insertSkillSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  category: z.enum(["technical", "tool"]),
  icon: z.string().optional(),
  svgIcon: z.string().optional(), // SVG content for the icon
  color: z.string().optional(),
});

// MongoDB Experience Schema
export const insertExperienceSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  company: z.string().min(2, "Company must be at least 2 characters"),
  period: z.string().min(2, "Period must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  type: z.enum(["work", "education"]),
});

// MongoDB Testimonial Schema
export const insertTestimonialSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  image: z.string().url("Must be a valid URL"),
  quote: z.string().min(10, "Quote must be at least 10 characters"),
  rating: z.number().min(1).max(5),
});

// MongoDB Blog Schema
export const insertBlogSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
  content: z.string().optional(),
  category: z.string().min(2, "Category must be at least 2 characters"),
  readTime: z.string(),
  image: z.string().url("Must be a valid URL"),
  slug: z.string().min(2, "Slug must be at least 2 characters"),
  published: z.boolean().default(false),
});

// MongoDB Service Schema
export const insertServiceSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  icon: z.string(),
  features: z.array(z.string()),
  technologies: z.array(z.string()),
  price: z.string().optional(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = InsertUser & {
  _id: string;
};

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = InsertContact & {
  _id: string;
  createdAt: Date;
};

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = InsertProject & {
  _id: string;
  createdAt: Date;
};

export type InsertSkill = z.infer<typeof insertSkillSchema>;
export type Skill = InsertSkill & {
  _id: string;
};

export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type Experience = InsertExperience & {
  _id: string;
  createdAt: Date;
};

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = InsertTestimonial & {
  _id: string;
  createdAt: Date;
};

export type InsertBlog = z.infer<typeof insertBlogSchema>;
export type Blog = InsertBlog & {
  _id: string;
  createdAt: Date;
  publishDate: Date;
};

export type InsertService = z.infer<typeof insertServiceSchema>;
export type Service = InsertService & {
  _id: string;
  createdAt: Date;
};

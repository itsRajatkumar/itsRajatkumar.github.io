import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error(
    "MONGODB_URI must be set. Please provide your MongoDB connection string.",
  );
}

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Project Schema
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  technologies: [{ type: String }],
  demoUrl: { type: String },
  githubUrl: { type: String },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// Skill Schema
const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ['technical', 'tool'], required: true },
  icon: { type: String },
  color: { type: String },
});

// Experience Schema
const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  period: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ['work', 'education'], required: true },
  createdAt: { type: Date, default: Date.now },
});

// Testimonial Schema
const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  image: { type: String, required: true },
  quote: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Blog Schema
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String },
  category: { type: String, required: true },
  readTime: { type: String, required: true },
  image: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  published: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  publishDate: { type: Date, default: Date.now },
});

// Service Schema
const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  features: [{ type: String }],
  technologies: [{ type: String }],
  price: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const UserModel = mongoose.model('User', userSchema);
export const ContactModel = mongoose.model('Contact', contactSchema);
export const ProjectModel = mongoose.model('Project', projectSchema);
export const SkillModel = mongoose.model('Skill', skillSchema);
export const ExperienceModel = mongoose.model('Experience', experienceSchema);
export const TestimonialModel = mongoose.model('Testimonial', testimonialSchema);
export const BlogModel = mongoose.model('Blog', blogSchema);
export const ServiceModel = mongoose.model('Service', serviceSchema);
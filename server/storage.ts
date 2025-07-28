import { 
  type User, type InsertUser, 
  type Contact, type InsertContact,
  type Project, type InsertProject,
  type Skill, type InsertSkill,
  type Experience, type InsertExperience,
  type Testimonial, type InsertTestimonial,
  type Blog, type InsertBlog,
  type Service, type InsertService
} from "@shared/schema";
import { 
  UserModel, ContactModel, ProjectModel, SkillModel, 
  ExperienceModel, TestimonialModel, BlogModel, ServiceModel 
} from "./db";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Project methods
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Skill methods
  getSkills(): Promise<Skill[]>;
  getSkillsByCategory(category: string): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  
  // Experience methods
  getExperiences(): Promise<Experience[]>;
  getExperiencesByType(type: string): Promise<Experience[]>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  
  // Testimonial methods
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Blog methods
  getBlogs(): Promise<Blog[]>;
  getPublishedBlogs(): Promise<Blog[]>;
  getBlogBySlug(slug: string): Promise<Blog | undefined>;
  createBlog(blog: InsertBlog): Promise<Blog>;
  
  // Service methods
  getServices(): Promise<Service[]>;
  createService(service: InsertService): Promise<Service>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: string): Promise<User | undefined> {
    const user = await UserModel.findById(id);
    return user ? { ...user.toObject(), _id: user._id.toString() } : undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const user = await UserModel.findOne({ username });
    return user ? { ...user.toObject(), _id: user._id.toString() } : undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user = new UserModel(insertUser);
    const savedUser = await user.save();
    return { ...savedUser.toObject(), _id: savedUser._id.toString() };
  }

  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const contact = new ContactModel(insertContact);
    const savedContact = await contact.save();
    return { ...savedContact.toObject(), _id: savedContact._id.toString() };
  }

  async getContacts(): Promise<Contact[]> {
    const contacts = await ContactModel.find().sort({ createdAt: -1 });
    return contacts.map(contact => ({ ...contact.toObject(), _id: contact._id.toString() }));
  }

  // Project methods
  async getProjects(): Promise<Project[]> {
    const projects = await ProjectModel.find().sort({ createdAt: -1 });
    return projects.map(project => ({ ...project.toObject(), _id: project._id.toString() }));
  }

  async getFeaturedProjects(): Promise<Project[]> {
    const projects = await ProjectModel.find({ featured: true }).sort({ createdAt: -1 });
    return projects.map(project => ({ ...project.toObject(), _id: project._id.toString() }));
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const project = new ProjectModel(insertProject);
    const savedProject = await project.save();
    return { ...savedProject.toObject(), _id: savedProject._id.toString() };
  }

  // Skill methods
  async getSkills(): Promise<Skill[]> {
    const skills = await SkillModel.find();
    return skills.map(skill => ({ ...skill.toObject(), _id: skill._id.toString() }));
  }

  async getSkillsByCategory(category: string): Promise<Skill[]> {
    const skills = await SkillModel.find({ category });
    return skills.map(skill => ({ ...skill.toObject(), _id: skill._id.toString() }));
  }

  async createSkill(insertSkill: InsertSkill): Promise<Skill> {
    const skill = new SkillModel(insertSkill);
    const savedSkill = await skill.save();
    return { ...savedSkill.toObject(), _id: savedSkill._id.toString() };
  }

  // Experience methods
  async getExperiences(): Promise<Experience[]> {
    const experiences = await ExperienceModel.find().sort({ createdAt: -1 });
    return experiences.map(experience => ({ ...experience.toObject(), _id: experience._id.toString() }));
  }

  async getExperiencesByType(type: string): Promise<Experience[]> {
    const experiences = await ExperienceModel.find({ type }).sort({ createdAt: -1 });
    return experiences.map(experience => ({ ...experience.toObject(), _id: experience._id.toString() }));
  }

  async createExperience(insertExperience: InsertExperience): Promise<Experience> {
    const experience = new ExperienceModel(insertExperience);
    const savedExperience = await experience.save();
    return { ...savedExperience.toObject(), _id: savedExperience._id.toString() };
  }

  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    const testimonials = await TestimonialModel.find().sort({ createdAt: -1 });
    return testimonials.map(testimonial => ({ ...testimonial.toObject(), _id: testimonial._id.toString() }));
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const testimonial = new TestimonialModel(insertTestimonial);
    const savedTestimonial = await testimonial.save();
    return { ...savedTestimonial.toObject(), _id: savedTestimonial._id.toString() };
  }

  // Blog methods
  async getBlogs(): Promise<Blog[]> {
    const blogs = await BlogModel.find().sort({ publishDate: -1 });
    return blogs.map(blog => ({ ...blog.toObject(), _id: blog._id.toString() }));
  }

  async getPublishedBlogs(): Promise<Blog[]> {
    const blogs = await BlogModel.find({ published: true }).sort({ publishDate: -1 });
    return blogs.map(blog => ({ ...blog.toObject(), _id: blog._id.toString() }));
  }

  async getBlogBySlug(slug: string): Promise<Blog | undefined> {
    const blog = await BlogModel.findOne({ slug, published: true });
    return blog ? { ...blog.toObject(), _id: blog._id.toString() } : undefined;
  }

  async createBlog(insertBlog: InsertBlog): Promise<Blog> {
    const blog = new BlogModel(insertBlog);
    const savedBlog = await blog.save();
    return { ...savedBlog.toObject(), _id: savedBlog._id.toString() };
  }

  // Service methods
  async getServices(): Promise<Service[]> {
    const services = await ServiceModel.find().sort({ createdAt: -1 });
    return services.map(service => ({ ...service.toObject(), _id: service._id.toString() }));
  }

  async createService(insertService: InsertService): Promise<Service> {
    const service = new ServiceModel(insertService);
    const savedService = await service.save();
    return { ...savedService.toObject(), _id: savedService._id.toString() };
  }
}

export const storage = new DatabaseStorage();

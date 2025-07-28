import { 
  ProjectModel, SkillModel, ExperienceModel, 
  TestimonialModel, BlogModel, ServiceModel 
} from "./db";

export async function seedDatabase() {
  try {
    // Check if data already exists
    const existingProjects = await ProjectModel.countDocuments();
    if (existingProjects > 0) {
      console.log("Database already seeded");
      return;
    }

    // Seed Projects
    const projects = [
      {
        title: "E-commerce Platform",
        description: "Full-stack e-commerce solution with admin dashboard, payment integration, and real-time analytics.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        demoUrl: "https://demo-ecommerce.example.com",
        githubUrl: "https://github.com/alexjohnson/ecommerce",
        featured: true,
      },
      {
        title: "Task Management App",
        description: "Collaborative project management tool with real-time updates and team collaboration features.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
        technologies: ["Vue.js", "Firebase", "Tailwind", "Socket.io"],
        demoUrl: "https://taskmanager-demo.example.com",
        githubUrl: "https://github.com/alexjohnson/taskmanager",
        featured: true,
      },
      {
        title: "Weather Forecast App",
        description: "Beautiful weather application with location-based forecasts and interactive visualizations.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
        technologies: ["React", "OpenWeather API", "Chart.js"],
        demoUrl: "https://weather-app.example.com",
        githubUrl: "https://github.com/alexjohnson/weather-app",
        featured: true,
      },
      {
        title: "Analytics Dashboard",
        description: "Comprehensive analytics platform with real-time data visualization and reporting tools.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
        technologies: ["Next.js", "PostgreSQL", "D3.js", "Redis"],
        demoUrl: "https://analytics-dashboard.example.com",
        githubUrl: "https://github.com/alexjohnson/analytics-dashboard",
        featured: true,
      },
    ];







    // Seed Experience
    const experiences = [
      {
        title: "Senior Full-Stack Developer",
        company: "TechCorp Inc.",
        period: "2021 - Present",
        description: "Lead development of scalable web applications, mentor junior developers, and architect cloud solutions.",
        type: "work",
      },
      {
        title: "Full-Stack Developer",
        company: "StartupXYZ",
        period: "2019 - 2021",
        description: "Built responsive web applications using React and Node.js, implemented CI/CD pipelines.",
        type: "work",
      },
      {
        title: "Junior Web Developer",
        company: "WebStudio",
        period: "2018 - 2019",
        description: "Developed client websites, learned modern web technologies, and collaborated with design team.",
        type: "work",
      },
      {
        title: "Computer Science Degree",
        company: "University of Technology",
        period: "2014 - 2018",
        description: "Bachelor's degree in Computer Science with focus on software engineering and algorithms.",
        type: "education",
      },
    ];

    await ExperienceModel.insertMany(experiences);

    // Seed Testimonials
    const testimonials = [
      {
        name: "Sarah Johnson",
        role: "Product Manager at TechCorp",
        image: "https://images.unsplash.com/photo-1494790108755-2616c1ff0cff?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
        quote: "Alex consistently delivers high-quality code and innovative solutions. His attention to detail and collaborative approach make him invaluable to our team.",
        rating: 5,
      },
      {
        name: "Michael Chen",
        role: "CTO at StartupXYZ",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
        quote: "Working with Alex was fantastic. He brought our vision to life with clean, scalable code and delivered ahead of schedule.",
        rating: 5,
      },
      {
        name: "Emma Wilson",
        role: "Design Lead at WebStudio",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
        quote: "Alex has an exceptional ability to translate designs into pixel-perfect, responsive web applications. Highly recommended!",
        rating: 5,
      },
    ];

    await TestimonialModel.insertMany(testimonials);

    // Seed Blog Posts
    const blogs = [
      {
        title: "Building Scalable React Applications",
        excerpt: "Learn the best practices for building large-scale React applications that are maintainable and performant.",
        content: "Full content would go here...",
        category: "React",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&h=400",
        slug: "building-scalable-react-applications",
        published: true,
      },
      {
        title: "Node.js Performance Optimization",
        excerpt: "Discover techniques to optimize your Node.js applications for better performance and scalability.",
        content: "Full content would go here...",
        category: "Node.js",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&h=400",
        slug: "nodejs-performance-optimization",
        published: true,
      },
      {
        title: "TypeScript Tips and Tricks",
        excerpt: "Advanced TypeScript patterns and techniques that will make your code more robust and maintainable.",
        content: "Full content would go here...",
        category: "TypeScript",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1516259762381-22954d1d3ad2?auto=format&fit=crop&w=800&h=400",
        slug: "typescript-tips-and-tricks",
        published: true,
      },
    ];

    await BlogModel.insertMany(blogs);

    // Seed Services
    const services = [
      {
        title: "Web Development",
        description: "Custom web applications built with modern frameworks and best practices.",
        icon: "globe",
        features: [
          "Responsive design for all devices",
          "SEO-optimized structure",
          "Fast loading performance",
          "Modern UI/UX design",
          "Cross-browser compatibility"
        ],
        technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
        price: "Starting at $2,500",
      },
      {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        icon: "smartphone",
        features: [
          "Cross-platform compatibility",
          "Native performance",
          "App store deployment",
          "Push notifications",
          "Offline functionality"
        ],
        technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
        price: "Starting at $5,000",
      },
      {
        title: "AI Tools & Integration",
        description: "Integrate AI capabilities into your applications with modern AI services.",
        icon: "bot",
        features: [
          "OpenAI GPT integration",
          "Custom AI workflows",
          "Data analysis automation",
          "Natural language processing",
          "Machine learning models"
        ],
        technologies: ["OpenAI API", "Python", "TensorFlow", "Langchain"],
        price: "Starting at $3,500",
      },
      {
        title: "Backend Development",
        description: "Scalable server-side solutions with modern databases and APIs.",
        icon: "database",
        features: [
          "RESTful API development",
          "Database design & optimization",
          "Authentication & security",
          "Cloud deployment",
          "Performance monitoring"
        ],
        technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "AWS"],
        price: "Starting at $2,000",
      },
      {
        title: "E-commerce Solutions",
        description: "Complete e-commerce platforms with payment processing and inventory management.",
        icon: "code",
        features: [
          "Payment gateway integration",
          "Inventory management",
          "Order tracking system",
          "Admin dashboard",
          "Mobile-responsive design"
        ],
        technologies: ["React", "Stripe", "PayPal", "MongoDB", "Node.js"],
        price: "Starting at $4,000",
      },
      {
        title: "Consulting & Code Review",
        description: "Technical consulting and code review services to improve your existing projects.",
        icon: "message",
        features: [
          "Code quality assessment",
          "Performance optimization",
          "Security audit",
          "Architecture review",
          "Best practices guidance"
        ],
        technologies: ["Various", "Code Analysis", "Performance Tools"],
        price: "$150/hour",
      },
    ];

    await ServiceModel.insertMany(services);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}
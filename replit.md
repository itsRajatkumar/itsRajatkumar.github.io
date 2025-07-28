# Portfolio Website Project

## Overview

This is a modern full-stack portfolio website for Alex Johnson, a full-stack developer. The application showcases professional experience, projects, skills, and provides a contact form for potential clients. It's built with a React frontend, Express backend, and PostgreSQL database, utilizing modern web development technologies and best practices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React-based single-page application with TypeScript
- **Backend**: Express.js REST API server with TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tools**: Vite for frontend bundling, esbuild for backend

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database ODM**: Mongoose with MongoDB
- **Validation**: Zod schemas for type-safe data validation
- **Storage**: Abstracted storage interface with MongoDB database implementation

### Component Structure
The frontend is organized into modular sections:
- Navigation with smooth scrolling
- Hero section with call-to-action
- About section with statistics
- Projects showcase with technology badges
- Experience timeline
- Skills with technology badges (simplified design)
- Testimonials carousel
- Blog section with featured posts
- Contact form with validation
- Footer with social links

## Data Flow

1. **Contact Form Submission**:
   - Client validates form data using Zod schema
   - Data sent to `/api/contact` endpoint via POST request
   - Server validates and stores contact information
   - Success/error feedback displayed to user

2. **Content Display**:
   - Static content rendered on client-side
   - Dynamic animations triggered by scroll events
   - Responsive design adapts to different screen sizes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon database connection for PostgreSQL
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Data fetching and caching
- **@radix-ui/***: Headless UI components
- **wouter**: Lightweight routing
- **zod**: Runtime type validation

### Development Tools
- **Vite**: Fast development server and build tool
- **TypeScript**: Type safety across the stack
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with hot module replacement
- Express server with automatic restarts via tsx
- In-memory storage for rapid development iteration

### Production Build
1. Frontend built with Vite to static assets in `dist/public`
2. Backend bundled with esbuild to `dist/index.js`
3. Static assets served by Express in production
4. PostgreSQL database connection via environment variables

### Database Management
- Drizzle Kit for schema migrations
- Schema defined in `shared/schema.ts` for type sharing
- Development uses `db:push` for rapid schema updates
- Production deployments use proper migrations

The architecture prioritizes developer experience with TypeScript throughout, shared validation schemas, and a clean separation of concerns while maintaining simplicity for a portfolio website's requirements.

## SEO Optimization

The portfolio website has been optimized for search engines with:

### Technical SEO
- **Semantic HTML**: Proper heading hierarchy (h1, h2) and semantic elements
- **Meta Tags**: Comprehensive meta descriptions, Open Graph, and Twitter Card tags
- **Structured Data**: JSON-LD schema markup for person and professional information
- **Sitemap & Robots**: XML sitemap and robots.txt for proper crawling
- **Performance**: Image optimization with lazy loading and proper alt text
- **Accessibility**: ARIA labels and semantic navigation

### Content Optimization
- **Keywords**: Strategic placement of relevant developer keywords
- **Alt Text**: Descriptive image alt text for accessibility and SEO
- **Internal Linking**: Smooth scroll navigation between sections
- **Mobile Responsive**: Fully responsive design for mobile-first indexing
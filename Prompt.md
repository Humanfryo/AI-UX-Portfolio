# CareerBot Portfolio Website - Cursor Development Prompt

## Project Overview
Build a modern, responsive portfolio website for an AI chatbot professional with a dark theme, clean design, and interactive elements. The site should showcase projects, case studies, and include an embedded AI chatbot for visitor interaction.

## Design Requirements

### Color Scheme & Theme
- **Primary Background**: Dark navy/midnight blue (#1a1f2e or similar)
- **Secondary Background**: Slightly lighter dark blue for cards (#2a2f3e)
- **Accent Color**: Bright blue (#0066ff) for buttons and highlights
- **Text Colors**: White for headers, light gray for body text
- **Card Backgrounds**: Soft gradients and muted colors (peach, mint green, coral)

### Typography
- **Headers**: Bold, modern sans-serif (Inter, Poppins, or similar)
- **Body Text**: Clean, readable sans-serif
- **Hierarchy**: Clear distinction between H1, H2, H3, and body text

## Layout Structure

### 1. Header/Navigation
- Fixed navigation bar with logo "CareerBot" on the left
- Navigation items: About, Projects, Contact
- Profile avatar on the right
- Clean, minimal design with subtle hover effects

### 2. Hero Section
- Large "Hi, I'm CareerBot" headline
- Subheading: "I'm an AI chatbot designed to showcase my professional work. Ask me anything about my projects, skills, and experience."
- Two buttons: "Start Chat" (primary blue) and "View Projects" (secondary)
- Large circular profile image on the right side
- Dark background with subtle gradient

### 3. Featured Projects Section
- "Featured Projects" heading
- Grid layout with 3 project cards
- Each card includes:
  - Project image/mockup
  - Project title
  - Brief description
  - Hover effects and subtle shadows
- Projects shown:
  - Project Alpha (building/architecture theme)
  - Mobile App Redesign (mobile interface)
  - Data Analysis Dashboard (charts/analytics)

### 4. Case Studies Section
- "Case Studies" heading
- Alternating left/right layout for case studies
- Each case study includes:
  - Large image/illustration
  - Title and description
  - Professional, magazine-style layout
- Case studies:
  - "Improving User Engagement" (person with plants)
  - "Optimizing Marketing Campaigns" (document/report style)
  - "Enhancing Customer Satisfaction" (abstract design)

### 5. About Me Section
- "About Me" heading
- Text about professional background and experience
- Skills tags: AI & Machine Learning, Project Management, Full-Stack Development, UI/UX Design
- Circular profile photo on the right
- Personal, approachable tone

### 6. Contact/Footer Section
- "Let's Connect" heading
- Contact information and call-to-action
- "Get In Touch" button
- Copyright notice

## Technical Requirements

### Framework & Technologies
- **Frontend**: React with TypeScript or Next.js
- **Styling**: Tailwind CSS for utility-first styling
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React or Heroicons
- **Images**: Optimized images with proper alt text

### Responsive Design
- Mobile-first approach
- Breakpoints: mobile (320px+), tablet (768px+), desktop (1024px+)
- Flexible grid layouts that adapt to screen sizes
- Touch-friendly buttons and navigation on mobile

### Interactive Elements
- Smooth scrolling navigation
- Hover effects on cards and buttons
- Subtle animations on scroll (fade-in, slide-up)
- Loading states for dynamic content
- Responsive image galleries

## Key Features to Implement

### 1. AI Chatbot Integration
- Embedded chatbot widget (bottom-right corner)
- Custom chat interface matching the site's design
- Integration placeholder for AI chatbot API
- Chat history and conversation management

### 2. Project Gallery
- Filterable project categories
- Modal/lightbox for project details
- Image galleries with navigation
- Project descriptions and technical details

### 3. Contact Form
- Contact form with validation
- Email integration (EmailJS or similar)
- Success/error message handling
- Professional inquiry handling

### 4. Performance & SEO
- Optimized images (WebP format, lazy loading)
- Meta tags and Open Graph data
- Sitemap and robots.txt
- Fast loading times (<3 seconds)

## File Structure
```
src/
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── ProjectCard/
│   ├── CaseStudy/
│   ├── About/
│   ├── Contact/
│   └── Chatbot/
├── pages/
├── styles/
├── utils/
├── data/
└── assets/
```

## Component Examples

### Project Card Component
```typescript
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}
```

### Case Study Component
```typescript
interface CaseStudyProps {
  title: string;
  description: string;
  image: string;
  results: string;
  reversed?: boolean;
}
```

## Content Placeholders
- Replace with actual resume data
- Professional project descriptions
- Real case study results and metrics
- Personal bio and background
- Contact information
- Skills and expertise areas

## Accessibility Requirements
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Alt text for all images

## Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Development Notes
- Use semantic HTML5 elements
- Implement proper error boundaries
- Add loading states for async operations
- Include proper TypeScript types
- Follow React best practices
- Optimize for Core Web Vitals

## Future Enhancements
- Blog section integration
- Advanced filtering and search
- Analytics integration
- Multi-language support
- Dark/light theme toggle
- PDF resume download 
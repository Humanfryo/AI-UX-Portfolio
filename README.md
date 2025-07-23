# CareerBot Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a dark theme, smooth animations, and an AI chatbot integration.

## 🚀 Features

- **Modern Design**: Dark theme with gradient backgrounds and glass morphism effects
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth animations and micro-interactions using Framer Motion
- **Performance**: Optimized images, lazy loading, and Core Web Vitals optimization
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

## 🛠 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4+
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/careerbot-portfolio.git
   cd careerbot-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Add placeholder images**
   Create the following image files in the `public/images/` directory:
   - `hero-profile.jpg` - Main hero section profile image
   - `profile-avatar.jpg` - Header navigation avatar
   - `about-profile.jpg` - About section profile image
   - `project-alpha.jpg` - Project Alpha thumbnail
   - `mobile-redesign.jpg` - Mobile redesign project thumbnail
   - `data-dashboard.jpg` - Data dashboard project thumbnail
   - `case-study-engagement.jpg` - User engagement case study image
   - `case-study-marketing.jpg` - Marketing optimization case study image
   - `case-study-satisfaction.jpg` - Customer satisfaction case study image

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page component
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with CTA
│   ├── ProjectCard.tsx  # Individual project card
│   ├── FeaturedProjects.tsx # Projects grid section
│   ├── CaseStudies.tsx  # Case studies section
│   ├── About.tsx        # About me section
│   └── Contact.tsx      # Contact form and footer
├── data/                # Static data and types
│   └── projects.ts      # Project and case study data
└── utils/               # Utility functions
    └── cn.ts           # Class name utility
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```js
colors: {
  primary: {
    dark: '#1a1f2e',    // Main background
    light: '#2a2f3e',   // Secondary background
  },
  accent: {
    blue: '#0066ff',    // Primary accent color
  },
  // ... other colors
}
```

### Content
Update your personal information in:
- `src/data/projects.ts` - Projects, case studies, and skills
- `src/app/layout.tsx` - SEO metadata
- `src/components/About.tsx` - Personal bio and experience
- `src/components/Contact.tsx` - Contact information

### Images
Replace placeholder images with your own:
1. Add images to `public/images/`
2. Update image paths in `src/data/projects.ts`
3. Ensure images are optimized for web (WebP format recommended)

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Mobile Support

The website is fully responsive with breakpoints:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+

Touch interactions are optimized for mobile devices.

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast color ratios
- Focus indicators

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific settings:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
```

### Analytics
Add analytics by updating `src/app/layout.tsx` with your tracking code.

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**
   - Ensure images exist in `public/images/`
   - Check file paths in `src/data/projects.ts`

2. **Build errors**
   - Run `npm run lint` to check for TypeScript errors
   - Ensure all required dependencies are installed

3. **Styles not applying**
   - Verify Tailwind CSS is properly configured
   - Check for CSS conflicts in `globals.css`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or support, please [open an issue](https://github.com/your-username/careerbot-portfolio/issues) on GitHub.

---

**Made with ❤️ by CareerBot** 
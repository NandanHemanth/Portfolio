# Nandan Hemanth - ML Engineer Portfolio

A modern, interactive ReactJS portfolio website with a Rube Goldberg machine theme, showcasing expertise in Machine Learning, Deep Learning, and AI agents.

## 🚀 Features

- **Interactive 3D Rube Goldberg Machine**: Animated header with Three.js showcasing ML pipeline components
- **Scroll-triggered Animations**: Smooth animations using Framer Motion and Intersection Observer
- **Responsive Design**: Mobile-first approach with beautiful gradients and modern UI
- **ML/AI Theme**: Professional presentation of ML projects, experience, and skills
- **Performance Optimized**: Efficient rendering and smooth interactions

## 🛠️ Technologies Used

- **Frontend**: React 18 with TypeScript
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Custom CSS with responsive design
- **Build Tool**: Create React App

## 📋 Portfolio Sections

1. **Animated Header**: Interactive Rube Goldberg machine with ML components
2. **About**: Professional summary, education, and technical skills
3. **Experience**: Timeline of professional roles with achievements
4. **Projects**: Featured projects including MacroMind, Flexa, Blabber, and WANI
5. **Publications**: Research papers and thesis work
6. **Contact**: Contact information, certifications, and awards

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
# Create production build
npm run build

# The build folder will contain optimized files ready for deployment
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- Mobile: < 600px
- Tablet: 600px - 1200px
- Desktop: > 1200px

## 🎨 Customization

### Colors & Themes
Main color scheme defined in CSS:
- Primary: `#4f46e5` (Indigo)
- Secondary: `#06b6d4` (Cyan)
- Success: `#10b981` (Emerald)
- Warning: `#f59e0b` (Amber)

### Content Updates
Update personal information in:
- `src/sections/About.tsx` - Skills and summary
- `src/sections/Experience.tsx` - Work experience
- `src/sections/Projects.tsx` - Projects and publications
- `src/sections/Contact.tsx` - Contact details and achievements

## 🌐 Deployment Options

### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `build`

### Vercel
1. Import project from GitHub
2. Framework preset: Create React App
3. Auto-deploy on push

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 📊 Performance Features

- Lazy loading of components
- Intersection Observer for scroll animations
- Optimized 3D rendering with Three.js
- Efficient re-renders with React hooks
- Responsive images and assets

## 🔧 Troubleshooting

### Common Issues

**Warning about MediaPipe source map**: This is a harmless warning from the MediaPipe dependency and doesn't affect functionality.

**3D scene not loading**: Ensure WebGL is enabled in your browser and your device supports hardware acceleration.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Nandan Hemanth**
- Email: nhemanth@stevens.edu
- Location: Jersey City, NJ 07306, USA
- LinkedIn: [Connect on LinkedIn]
- GitHub: [View Projects]

---

*Portfolio crafted with React, Three.js & Framer Motion* ⚡

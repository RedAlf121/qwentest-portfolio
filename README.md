# Fullstack Developer Portfolio

A modern, responsive portfolio website for a fullstack developer specializing in **Spring Boot**, **Angular**, and **Data Science** with Python.

## Features

- 🎨 **Modern Design** - Clean, professional UI with dark theme
- 📱 **Fully Responsive** - Optimized for all devices (6 breakpoints)
- ⚡ **Fast Performance** - Vanilla HTML, CSS, JavaScript (no frameworks)
- 🎯 **Data-Driven** - Easy content customization via `data/portfolio-data.js`
- ♿ **Accessible** - WCAG compliant with ARIA labels
- 🚀 **Touch-Friendly** - Optimized for mobile interactions
- 🌐 **SEO Ready** - Meta tags and semantic HTML

## Project Structure

```
qwentest/
├── data/
│   └── portfolio-data.js    # All content configuration (EDIT THIS!)
├── scripts/
│   ├── content-renderer.js  # Dynamic content loader
│   └── main.js              # Interactions & animations
├── styles/
│   ├── main.css             # Core styles & responsive design
│   └── components.css       # Component-specific styles
├── index.html               # Main HTML file
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## Quick Start

1. **Clone or download** this repository
2. **Open** `index.html` in your browser
3. **Edit** `data/portfolio-data.js` with your information

## Customization

### Update Personal Information

Edit `data/portfolio-data.js`:

```javascript
const portfolioData = {
    personal: {
        name: "Your Name",
        title: "Your Title",
        email: "your.email@example.com",
        phone: "+1 234 567 890",
        location: "Your City, Country",
        // ... more fields
    },
    // ... more sections
};
```

### Update Skills

```javascript
skills: {
    fullstack: {
        title: "Fullstack Development",
        items: [
            {
                name: "Spring Boot",
                description: "Your description",
                icon: "fa-leaf",
                percentage: 95
            }
            // ... more skills
        ]
    }
    // ... more categories
}
```

### Add Projects

```javascript
projects: [
    {
        title: "Your Project",
        description: "Project description",
        category: "fullstack", // fullstack, datascience, backend
        icon: "fa-project-diagram",
        tags: ["Tag1", "Tag2"],
        demoUrl: "https://...",
        codeUrl: "https://github.com/..."
    }
]
```

## Icons

This portfolio uses [Font Awesome](https://fontawesome.com/) icons. Browse available icons and update the `icon` fields in the data file.

## Deployment

### GitHub Pages (Automatic with GitHub Actions)

1. **Create a GitHub repository:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   git push -u origin gh-pages
   ```

2. **Enable GitHub Actions:**
   - Go to your repository on GitHub
   - Navigate to Settings > Actions > General
   - Enable Actions (if not already enabled)

3. **Configure GitHub Pages:**
   - Go to Settings > Pages
   - Under "Build and deployment":
     - Source: Deploy from a branch
     - Branch: Select `gh-pages`
   - Click Save

4. **Automatic deployments:**
   - Every push to `main` will trigger automatic deployment
   - View deployment status in Actions tab

### Manual Deployment Script

```bash
# Add your GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Run the deploy script
./deploy.sh
```

### Netlify

1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repo for automatic deployments

### Vercel

```bash
npm i -g vercel
vercel
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this template for your own portfolio!

## Author

Created with ❤️ for showcasing your amazing work!

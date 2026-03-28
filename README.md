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

### GitHub Pages

1. Push to GitHub repository
2. Go to Settings > Pages
3. Select branch: `main`, folder: `/ (root)`
4. Your site will be live at `https://username.github.io/repo-name`

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

# Fullstack Developer Portfolio

A modern, responsive portfolio website for a fullstack developer building applications in **Python**, **JavaScript/TypeScript** and **Dart**, with **AI/LLM integration**.

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
                name: "Python",
                description: "FastAPI, Django, REST APIs",
                image: "https://cdn.simpleicons.org/python/3776AB"
            }
            // ... one entry per technology, each with its own logo URL
        ]
    }
    // ... more categories; a matching [data-skill-items="..."] container is needed
}
```

Skills have no score or percentage. Use `image` for a logo URL (Simple Icons CDN is
used here), or `iconClass` for a full Font Awesome class as a fallback
(e.g. `"fas fa-robot"`), or `icon` for the default brand style.

The Hero code window is driven by `codeWindow.filename` and `codeWindow.code`;
set `codeWindow` to remove it. The Hero avatar and the large About photo both use
`public/icon.jpeg`.

Deployed projects use pre-rendered screenshots stored in `public/images/*.webp` and
referenced through each project's `image` field. Projects without a deploy keep the
Font Awesome placeholder until a visual is added.

### Add Projects

Add an object to `projects` in `data/portfolio-data.js`. That is all: the card and its
filter button are generated automatically. No HTML or JS changes needed.

```javascript
projects: [
    {
        title: "Your Project",
        description: "What it does and what problem it solves",
        category: "backend",              // simple category
        // categories: ["backend", "fullstack"], // or several categories
        icon: "fa-project-diagram",       // fallback when there is no image
        tags: ["Python", "FastAPI"],
        demoUrl: "https://...",           // optional; empty/"#" hides the link
        codeUrl: "https://github.com/..." // optional
    }
]
```

Optional fields:

| Field | Purpose |
|---|---|
| `categories` | Array of categories; takes precedence over `category` |
| `image` | Path relative to `index.html`, e.g. `assets/projects/my-project.png` |
| `imageAlt` | Alt text for the image (defaults to `title`) |
| `year` / `status` | Small meta row on the card |
| `demoUrl` / `codeUrl` | Buttons on the card overlay; omitted when empty |
| `demoLabel` | Override the demo button label (e.g. `View Release`) |

Filter buttons are derived from the categories used in `projects`. Use `categoryLabels`
to control their display text:

```javascript
categoryLabels: {
    fullstack: "Fullstack",
    datascience: "Data Science",
    backend: "Backend"
}
```

Social links with an empty URL are hidden, so you can fill them in later.

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

/**
 * Portfolio Data Configuration
 * Edit this file to customize your portfolio content
 */

const portfolioData = {
    // Personal Information
    personal: {
        name: "Alfredo Hernandez Rodriguez",
        title: "Fullstack Developer",
        greeting: "Hello, I'm",
        location: "Santo Domingo, Dominican Republic",
        email: "andezmgk@gmail.com",
        phone: "+1 (809) 488-2703",
        availability: "Available for hire",
        bio: `I'm a fullstack developer focused on building web and mobile applications end to end,
        with <strong>Python</strong> on the backend, <strong>JavaScript/TypeScript</strong> on the frontend
        and <strong>Dart</strong> for cross-platform mobile apps.`,
        bioExtended: `I design REST APIs, work with SQL and NoSQL databases, and integrate
        <strong>LLMs and AI agents</strong> into real products using tools like LangChain and MCP.
        On the client side I build responsive interfaces with React and Vue, and ship mobile
        experiences with Flutter.`,
        bioConclusion: `I enjoy taking an idea all the way to a deployed application, combining solid
        fullstack foundations with practical AI integration.`
    },

    // Social Media Links
    social: {
        github: "https://github.com/RedAlf121",
        // Fill these in when you have real profiles; empty ones are hidden
        linkedin: "",
        twitter: "",
        kaggle: ""
    },

    // Hero Section - Rotating Roles
    roles: [
        "Fullstack Developer",
        "Computer Engineer",
        "AI Engineer"
    ],

    // Hero Description
    heroDescription: "Building fullstack applications with Python, JavaScript/TypeScript and Dart, and integrating AI into real products.",

    // Skills Configuration (no scores or percentages, one logo per technology)
    skills: {
        fullstack: {
            title: "Fullstack Development",
            icon: "fa-layer-group",
            items: [
                {
                    name: "Python",
                    description: "FastAPI, Django, REST APIs",
                    image: "https://cdn.simpleicons.org/python/3776AB"
                },
                {
                    name: "JavaScript",
                    description: "React, Vue, Node.js, Vite",
                    image: "https://cdn.simpleicons.org/javascript/F7DF1E"
                },
                {
                    name: "TypeScript",
                    description: "Typed frontend and backend code",
                    image: "https://cdn.simpleicons.org/typescript/3178C6"
                },
                {
                    name: "Dart & Flutter",
                    description: "Cross-platform mobile apps",
                    image: "https://cdn.simpleicons.org/flutter/02569B"
                },
                {
                    name: "PostgreSQL",
                    description: "Relational data modeling",
                    image: "https://cdn.simpleicons.org/postgresql/4169E1"
                },
                {
                    name: "MongoDB",
                    description: "Document-based storage",
                    image: "https://cdn.simpleicons.org/mongodb/47A248"
                }
            ]
        },
        ai: {
            title: "AI & LLM Integration",
            icon: "fa-brain",
            items: [
                {
                    name: "LLM Agents",
                    description: "Tool calling, agent loops, prompt design",
                    iconClass: "fas fa-robot"
                },
                {
                    name: "LangChain",
                    description: "Chains, agents, structured output",
                    image: "https://cdn.simpleicons.org/langchain/A5B4FC"
                },
                {
                    name: "MCP",
                    description: "Model Context Protocol servers and tools",
                    image: "https://cdn.simpleicons.org/modelcontextprotocol/A5B4FC"
                },
                {
                    name: "Pandas",
                    description: "Data analysis and manipulation",
                    image: "https://cdn.simpleicons.org/pandas/A5B4FC"
                },
                {
                    name: "NumPy",
                    description: "Numerical computing",
                    image: "https://cdn.simpleicons.org/numpy/A5B4FC"
                },
                {
                    name: "Scikit-learn",
                    description: "Machine learning pipelines",
                    image: "https://cdn.simpleicons.org/scikitlearn/F8991C"
                }
            ]
        }
    },

    // Projects Configuration
    projects: [
        {
            title: "Graco Construction Group",
            description: "Corporate website for a Miami-based construction and design firm, built with Nuxt 4, Vue 3 and TypeScript. Multi-page content-driven site with a service hierarchy, a project portfolio with detail pages and galleries, team, about and contact sections, backed by static JSON data and a responsive dark design.",
            categories: ["fullstack", "frontend"],
            icon: "fa-building",
            tags: ["Nuxt", "Vue 3", "TypeScript", "Tailwind CSS", "SSR/SSG"],
            year: 2026,
            status: "Live",
            demoUrl: "https://graco-construction.vercel.app",
            codeUrl: "https://github.com/RedAlf121/graco-construction",
            image: "public/images/graco-construction.webp",
            imageAlt: "Screenshot of the Graco Construction Group website"
        },
        {
            title: "Minecraft Clone",
            description: "Playable Minecraft-inspired world in the browser built with React, Three.js and React Three Fiber: block placement and destruction, gravity and collision physics with Cannon, Zustand state management and a prebuilt village map.",
            categories: ["fullstack", "gamedev"],
            icon: "fa-cube",
            tags: ["React", "Three.js", "React Three Fiber", "Cannon", "Zustand"],
            year: 2026,
            status: "Live",
            demoUrl: "https://minecraft-clone-jet.vercel.app/",
            codeUrl: "https://github.com/RedAlf121/minecraft-clone",
            image: "public/images/minecraft-clone.webp",
            imageAlt: "Screenshot of the Minecraft Clone running in the browser"
        },
        {
            title: "Web Playground",
            description: "Learn HTML, CSS and JavaScript in a live coding environment with instant preview. Built with HTML, CSS, JS and CodeMirror, it features a split view for code and output, syntax highlighting, and a responsive design.",
            categories: ["frontend", "html", "css", "javascript"],
            icon: "fa-book-open",
            tags: ["HTML", "CSS", "JavaScript", "CodeMirror"],
            year: 2025,
            status: "Completed",
            demoUrl: "https://playground-kappa-ebon.vercel.app/",
            codeUrl: "https://github.com/RedAlf121/JSPlayground",
            image: "public/images/web-playground.png",
            imageAlt: "Screenshot of the Web Playground in action"
        },
        {
            title: "Tic-Tac-Toe AI",
            description: "React implementation of tic-tac-toe with local two-player mode and an AI opponent powered by the Minimax algorithm, built as a first step into React and game AI.",
            categories: ["frontend"],
            icon: "fa-gamepad",
            tags: ["React", "Vite", "Minimax", "Game AI"],
            year: 2025,
            status: "Live",
            demoUrl: "https://redalf121.github.io/tic-tac-toe/",
            codeUrl: "https://github.com/RedAlf121/tic-tac-toe",
            image: "public/images/tic-tac-toe.webp",
            imageAlt: "Screenshot of the Tic-Tac-Toe AI game"
        },
        {
            title: "Smart Library Loan Monitoring",
            description: "FastAPI platform for library loan monitoring where LLM agents query MongoDB through MCP tools, send automated email reminders and apply custom business rules, with validated JSON post-processing.",
            categories: ["backend", "ai", "datascience"],
            icon: "fa-book-open",
            tags: ["Python", "FastAPI", "MongoDB", "MCP", "LLM Agents"],
            year: 2025,
            status: "Completed",
            demoUrl: "",
            codeUrl: "https://github.com/RedAlf121/monitoreo-inteligente"
        },
        {
            title: "LangChain MCP Builder",
            description: "Builder-pattern framework for creating LangChain tool-calling agents connected to MCP servers, with pluggable model factories, cached tool loading and configurable prompts.",
            categories: ["ai", "backend"],
            icon: "fa-robot",
            tags: ["Python", "LangChain", "MCP", "Groq", "Builder Pattern"],
            year: 2025,
            status: "Completed",
            demoUrl: "",
            codeUrl: "https://github.com/RedAlf121/langchain-mcp-builder"
        },
        {
            title: "Parallel C4.5 Decision Tree",
            description: "Parallel implementation of the C4.5 decision tree algorithm using Python multiprocessing. Nodes are expanded breadth-first and queued so training bypasses the GIL and runs faster.",
            categories: ["datascience"],
            icon: "fa-project-diagram",
            tags: ["Python", "C4.5", "Multiprocessing", "Machine Learning"],
            year: 2024,
            status: "Completed",
            demoUrl: "",
            codeUrl: "https://github.com/RedAlf121/python_parallel_decision_tree"
        },
        {
            title: "Cutetris",
            description: "Godot puzzle game inspired by Tetris: instead of clearing lines, the player fits pieces together to rebuild university logos. Built with GDScript, with custom gameplay scenes and menus.",
            categories: ["gamedev"],
            icon: "fa-cubes",
            tags: ["Godot", "GDScript", "Game Design", "Puzzles"],
            year: 2025,
            status: "Released",
            demoUrl: "https://github.com/RedAlf121/Cutetris/releases/tag/alpha",
            demoLabel: "View Release",
            codeUrl: "https://github.com/RedAlf121/cutetris-godot",
            image: "public/images/cutetris.png",
            imageAlt: "Screenshot of the Cutetris game"
        },
        {
            title: "Parcel Sampling App",
            description: "Flutter mobile app for agricultural parcel sampling, with interactive maps, polygonal parcel management, sampling forms, reports and role-based access.",
            categories: ["mobile", "fullstack"],
            icon: "fa-map-marked-alt",
            tags: ["Flutter", "Dart", "Maps", "CRUD", "Reports"],
            year: 2023,
            status: "Completed",
            demoUrl: "",
            codeUrl: "https://github.com/RedAlf121/muestreo-parcelas-lib"
        },
        {
            title: "Dirb Clone",
            description: "Node.js CLI tool inspired by Dirb that discovers hidden web paths by fuzzing a target URL with a wordlist, firing parallel HTTP requests and reporting valid 2xx responses.",
            categories: ["security"],
            icon: "fa-shield-alt",
            tags: ["Node.js", "Fuzzing", "Web Security", "CLI"],
            year: 2025,
            status: "Completed",
            demoUrl: "",
            codeUrl: "https://github.com/RedAlf121/dirb-clone"
        },
        {
            title: "Where Are My Sheep?",
            description: "Godot puzzle game inspired by Human Resource Machine: program sheep movements to solve increasingly complex levels built around data structures and logic.",
            categories: ["gamedev"],
            icon: "fa-paw",
            tags: ["Godot", "GDScript", "Game Design", "Puzzles"],
            year: 2023,
            status: "Release pending",
            demoUrl: "",
            codeUrl: "https://github.com/RedAlf121/ProyectoED-Ovejas"
        },
    ],

    // Optional labels for the auto-generated project filters.
    // Any category used in `projects` gets a button even if it is not listed here.
    categoryLabels: {
        fullstack: "Fullstack",
        backend: "Backend",
        ai: "AI & LLMs",
        datascience: "Data Science",
        mobile: "Mobile",
        frontend: "Frontend",
        security: "Security",
        gamedev: "Game Dev"
    },

    // Contact Section
    contact: {
        heading: "Let's build something amazing together!",
        description: "Whether you have a project in mind, want to discuss opportunities, or just want to connect, I'd love to hear from you.",
        email: "andezmgk@gmail.com",
        phone: "+1 (809) 488-2703",
        location: "Santo Domingo, Dominican Republic",
        formFields: [
            { name: "name", label: "Name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", label: "Email", type: "email", placeholder: "your.email@example.com", required: true },
            { name: "subject", label: "Subject", type: "text", placeholder: "Project Inquiry", required: true },
            { name: "message", label: "Message", type: "textarea", placeholder: "Tell me about your project...", rows: 5, required: true }
        ],
        submitButtonText: "Send Message"
    },

    // Footer
    footer: {
        copyright: "Alfredo Hernandez Rodriguez",
        tagline: "Building digital experiences with code & data"
    },

    // Skills shown in the Hero code window
    codeWindow: {
        filename: "developer.json",
        code: `{
  "name": "Alfredo Hernandez",
  "role": "Fullstack Developer",
  "languages": ["Python", "JavaScript", "TypeScript", "Dart"],
  "backend": ["FastAPI", "Django", "MongoDB", "PostgreSQL"],
  "frontend": ["React", "Vue", "Vite"],
  "mobile": ["Flutter"],
  "ai": ["LangChain", "MCP", "LLM Agents"],
  "focus": "Fullstack apps + AI integration"
}`
    }
};

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
        location: "Barcelona, Spain",
        email: "andezmgk@gmail.com",
        phone: "+53 51948102",
        availability: "Available for hire",
        bio: `I'm a passionate fullstack developer with extensive expertise in building 
        robust, scalable enterprise applications using <strong>Spring Boot</strong> for 
        backend services and <strong>Angular</strong> for dynamic, responsive frontends.`,
        bioExtended: `Beyond traditional web development, I bring strong <strong>Data Science</strong> 
        capabilities to the table, leveraging Python's powerful ecosystem including 
        <strong>Pandas, NumPy, Scikit-learn, and TensorFlow</strong> to build 
        intelligent, data-driven applications.`,
        bioConclusion: `My unique combination of fullstack development and data science skills allows 
        me to create comprehensive solutions that not only function flawlessly but also 
        incorporate machine learning and analytics capabilities.`
    },

    // Social Media Links
    social: {
        github: "https://github.com/carlosmendoza",
        linkedin: "https://linkedin.com/in/carlosmendoza",
        twitter: "https://twitter.com/carlosdev",
        kaggle: "https://kaggle.com/carlosmendoza"
    },

    // Hero Section - Rotating Roles
    roles: [
        "Fullstack Developer",
        "Spring Boot Expert",
        "Angular Specialist",
        "Data Scientist"
    ],

    // Hero Description
    heroDescription: "Building scalable enterprise applications with modern Java & TypeScript, while leveraging data science to drive intelligent solutions.",

    // Statistics
    stats: [
        { number: 50, label: "Projects Completed" },
        { number: 30, label: "Happy Clients" },
        { number: 15, label: "Data Models" }
    ],

    // Skills Configuration
    skills: {
        fullstack: {
            title: "Fullstack Development",
            icon: "fa-layer-group",
            items: [
                {
                    name: "Spring Boot",
                    description: "REST APIs, Microservices, Security, Data JPA",
                    icon: "fa-leaf",
                    percentage: 95
                },
                {
                    name: "Angular",
                    description: "Components, RxJS, NgRx, Material",
                    icon: "fa-angular",
                    percentage: 90
                },
                {
                    name: "Java",
                    description: "Core Java, Streams, Concurrency",
                    icon: "fa-java",
                    percentage: 92
                },
                {
                    name: "TypeScript",
                    description: "Advanced Types, Generics, Decorators",
                    icon: "fa-js",
                    percentage: 88
                }
            ]
        },
        datascience: {
            title: "Data Science & ML",
            icon: "fa-brain",
            items: [
                {
                    name: "Python",
                    description: "Advanced Python, Async, Decorators",
                    icon: "fa-python",
                    percentage: 90
                },
                {
                    name: "Pandas & NumPy",
                    description: "Data Analysis, Manipulation",
                    icon: "fa-table",
                    percentage: 88
                },
                {
                    name: "Scikit-learn",
                    description: "ML Algorithms, Pipelines",
                    icon: "fa-project-diagram",
                    percentage: 85
                },
                {
                    name: "TensorFlow/Keras",
                    description: "Deep Learning, Neural Networks",
                    icon: "fa-network-wired",
                    percentage: 80
                },
                {
                    name: "Data Visualization",
                    description: "Matplotlib, Seaborn, Plotly",
                    icon: "fa-chart-line",
                    percentage: 87
                },
                {
                    name: "SQL & NoSQL",
                    description: "PostgreSQL, MongoDB, Redis",
                    icon: "fa-database",
                    percentage: 85
                }
            ]
        },
        tools: {
            title: "Tools & DevOps",
            icon: "fa-tools",
            items: [
                { name: "Docker", icon: "fa-docker" },
                { name: "AWS", icon: "fa-aws" },
                { name: "Git", icon: "fa-git-alt" },
                { name: "Jenkins", icon: "fa-jenkins" },
                { name: "Linux", icon: "fa-linux" },
                { name: "Bash", icon: "fa-terminal" },
                { name: "Maven", icon: "fa-maven" },
                { name: "NPM", icon: "fa-npm" }
            ]
        }
    },

    // Projects Configuration
    projects: [
        {
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with microservices architecture, featuring real-time inventory, payment processing, and analytics dashboard.",
            category: "fullstack",
            icon: "fa-shopping-cart",
            tags: ["Spring Boot", "Angular", "PostgreSQL", "Docker"],
            demoUrl: "#",
            codeUrl: "https://github.com/carlosmendoza/ecommerce-platform"
        },
        {
            title: "Customer Churn Prediction",
            description: "ML-powered analytics platform predicting customer churn with 94% accuracy using ensemble methods and providing actionable insights.",
            category: "datascience",
            icon: "fa-chart-pie",
            tags: ["Python", "Scikit-learn", "Pandas", "Plotly"],
            demoUrl: "#",
            codeUrl: "https://github.com/carlosmendoza/churn-prediction"
        },
        {
            title: "Enterprise Resource Planner",
            description: "Scalable ERP system handling 10K+ daily transactions with role-based access, audit logging, and real-time reporting.",
            category: "backend",
            icon: "fa-building",
            tags: ["Spring Boot", "Microservices", "Redis", "Kafka"],
            demoUrl: "#",
            codeUrl: "https://github.com/carlosmendoza/erp-system"
        },
        {
            title: "Sentiment Analysis API",
            description: "NLP service analyzing customer feedback using BERT models, processing 1M+ reviews with real-time sentiment scoring.",
            category: "datascience",
            icon: "fa-comments",
            tags: ["Python", "TensorFlow", "FastAPI", "NLP"],
            demoUrl: "#",
            codeUrl: "https://github.com/carlosmendoza/sentiment-api"
        },
        {
            title: "Healthcare Management System",
            description: "HIPAA-compliant platform for patient management, appointments, and medical records with end-to-end encryption.",
            category: "fullstack",
            icon: "fa-hospital",
            tags: ["Spring Boot", "Angular", "Security", "MongoDB"],
            demoUrl: "#",
            codeUrl: "https://github.com/carlosmendoza/healthcare-system"
        },
        {
            title: "Recommendation Engine",
            description: "Hybrid recommendation system combining collaborative filtering and content-based approaches, increasing engagement by 45%.",
            category: "datascience",
            icon: "fa-robot",
            tags: ["Python", "PyTorch", "Spark", "Redis"],
            demoUrl: "#",
            codeUrl: "https://github.com/carlosmendoza/recommendation-engine"
        }
    ],

    // Project Filter Buttons
    projectFilters: [
        { label: "All", value: "all" },
        { label: "Fullstack", value: "fullstack" },
        { label: "Data Science", value: "datascience" },
        { label: "Backend", value: "backend" }
    ],

    // Contact Section
    contact: {
        heading: "Let's build something amazing together!",
        description: "Whether you have a project in mind, want to discuss opportunities, or just want to connect, I'd love to hear from you.",
        email: "carlos.mendoza@email.com",
        phone: "+34 612 345 678",
        location: "Madrid, Spain",
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
        copyright: "Carlos Mendoza",
        tagline: "Building digital experiences with code & data"
    },

    // Code Window Content (Hero Section)
    codeWindow: {
        filename: "DeveloperProfile.java",
        code: `public class Developer {
    private String name = "Carlos Mendoza";
    private String[] skills = {
        "Spring Boot",
        "Angular",
        "Python/ML"
    };
    private int experience = 5;

    public void buildSolutions() {
        // Creating innovative solutions
        this.passion = Passion.HIGH;
    }
}`
    }
};

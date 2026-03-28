/**
 * Content Renderer
 * Dynamically populates the portfolio with data from portfolio-data.js
 */

(function() {
    'use strict';

    const ContentRenderer = {
        init() {
            this.renderPersonalInfo();
            this.renderSocialLinks();
            this.renderRoles();
            this.renderStats();
            this.renderSkills();
            this.renderProjects();
            this.renderProjectFilters();
            this.renderContactForm();
            this.renderFooter();
            this.renderCodeWindow();
        },

        /**
         * Get nested property from object using dot notation
         */
        getNestedValue(obj, path) {
            return path.split('.').reduce((current, key) => current?.[key], obj);
        },

        /**
         * Render personal information
         */
        renderPersonalInfo() {
            // Update all elements with data-field attributes
            document.querySelectorAll('[data-field]').forEach(element => {
                const field = element.getAttribute('data-field');
                
                // Skip social links and special fields
                if (element.hasAttribute('data-social') || 
                    field === 'stats' || 
                    field === 'social') {
                    return;
                }

                const value = this.getNestedValue(portfolioData, field);
                
                if (value !== undefined) {
                    if (field === 'personal.name') {
                        element.textContent = value;
                    } else if (field.includes('bio')) {
                        element.innerHTML = value.trim().replace(/\n\s*/g, ' ');
                    } else if (field === 'contact.email') {
                        element.textContent = value;
                        element.href = `mailto:${value}`;
                    } else if (field === 'contact.phone') {
                        element.textContent = value;
                        element.href = `tel:${value.replace(/\s/g, '')}`;
                    } else {
                        element.textContent = value;
                    }
                }
            });

            // Update page title
            if (portfolioData.personal.name) {
                document.title = `${portfolioData.personal.title} Portfolio | ${portfolioData.personal.name}`;
            }
        },

        /**
         * Render social media links
         */
        renderSocialLinks() {
            document.querySelectorAll('[data-social]').forEach(element => {
                const platform = element.getAttribute('data-social');
                const url = portfolioData.social[platform];
                
                if (url) {
                    element.href = url;
                }
            });
        },

        /**
         * Render rotating roles in hero section
         */
        renderRoles() {
            const rolesContainer = document.querySelector('[data-field="roles"]');
            if (!rolesContainer || !portfolioData.roles.length) return;

            rolesContainer.innerHTML = portfolioData.roles
                .map((role, index) => 
                    `<span class="role-item ${index === 0 ? 'active' : ''}">${role}</span>`
                )
                .join('');
        },

        /**
         * Render statistics
         */
        renderStats() {
            const statsContainer = document.querySelector('[data-field="stats"]');
            if (!statsContainer || !portfolioData.stats.length) return;

            statsContainer.innerHTML = portfolioData.stats
                .map(stat => `
                    <div class="stat-item">
                        <span class="stat-number" data-count="${stat.number}">0</span>
                        <span class="stat-label">${stat.label}</span>
                    </div>
                `)
                .join('');
        },

        /**
         * Render skills sections
         */
        renderSkills() {
            // Render Fullstack Skills
            const fullstackContainer = document.querySelector('[data-skill-items="fullstack"]');
            if (fullstackContainer && portfolioData.skills.fullstack) {
                document.querySelector('[data-skill-category="fullstack"] .category-title-text').textContent = 
                    portfolioData.skills.fullstack.title;
                fullstackContainer.innerHTML = portfolioData.skills.fullstack.items
                    .map(skill => this.createSkillCard(skill))
                    .join('');
            }

            // Render Data Science Skills
            const datascienceContainer = document.querySelector('[data-skill-items="datascience"]');
            if (datascienceContainer && portfolioData.skills.datascience) {
                document.querySelector('[data-skill-category="datascience"] .category-title-text').textContent = 
                    portfolioData.skills.datascience.title;
                datascienceContainer.innerHTML = portfolioData.skills.datascience.items
                    .map(skill => this.createSkillCard(skill))
                    .join('');
            }

            // Render Tools
            const toolsContainer = document.querySelector('[data-skill-items="tools"]');
            if (toolsContainer && portfolioData.skills.tools) {
                document.querySelector('[data-skill-category="tools"] .category-title-text').textContent = 
                    portfolioData.skills.tools.title;
                toolsContainer.innerHTML = portfolioData.skills.tools.items
                    .map(tool => `
                        <div class="tool-item">
                            <i class="fab ${tool.icon}"></i>
                            <span>${tool.name}</span>
                        </div>
                    `)
                    .join('');
            }
        },

        /**
         * Create skill card HTML
         */
        createSkillCard(skill) {
            return `
                <div class="skill-card" data-skill="${skill.name.toLowerCase().replace(/\s+/g, '-')}">
                    <div class="skill-icon">
                        <i class="fab ${skill.icon}"></i>
                    </div>
                    <h4 class="skill-name">${skill.name}</h4>
                    <p class="skill-description">${skill.description}</p>
                    <div class="skill-progress">
                        <div class="progress-bar" data-progress="${skill.percentage}"></div>
                    </div>
                    <span class="skill-percentage">${skill.percentage}%</span>
                </div>
            `;
        },

        /**
         * Render project filter buttons
         */
        renderProjectFilters() {
            const filterContainer = document.querySelector('[data-project-filters]');
            if (!filterContainer || !portfolioData.projectFilters.length) return;

            filterContainer.innerHTML = portfolioData.projectFilters
                .map((filter, index) => `
                    <button class="filter-btn ${index === 0 ? 'active' : ''}" data-filter="${filter.value}">
                        ${filter.label}
                    </button>
                `)
                .join('');
        },

        /**
         * Render projects grid
         */
        renderProjects() {
            const projectsContainer = document.querySelector('[data-projects]');
            if (!projectsContainer || !portfolioData.projects.length) return;

            projectsContainer.innerHTML = portfolioData.projects
                .map(project => `
                    <article class="project-card" data-category="${project.category}">
                        <div class="project-image">
                            <div class="project-placeholder">
                                <i class="fas ${project.icon}"></i>
                            </div>
                            <div class="project-overlay">
                                <div class="project-links">
                                    ${project.demoUrl ? `
                                        <a href="${project.demoUrl}" class="project-link" title="View Demo">
                                            <i class="fas fa-external-link-alt"></i>
                                        </a>
                                    ` : ''}
                                    ${project.codeUrl ? `
                                        <a href="${project.codeUrl}" class="project-link" title="View Code" target="_blank" rel="noopener">
                                            <i class="fab fa-github"></i>
                                        </a>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">${project.title}</h3>
                            <p class="project-description">${project.description}</p>
                            <div class="project-tags">
                                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    </article>
                `)
                .join('');
        },

        /**
         * Render contact form
         */
        renderContactForm() {
            const formContainer = document.querySelector('[data-contact-form]');
            if (!formContainer || !portfolioData.contact.formFields) return;

            formContainer.innerHTML = `
                ${portfolioData.contact.formFields.map(field => `
                    <div class="form-group">
                        <label for="${field.name}">${field.label}</label>
                        ${field.type === 'textarea' ? `
                            <textarea 
                                id="${field.name}" 
                                name="${field.name}" 
                                rows="${field.rows || 5}"
                                placeholder="${field.placeholder}"
                                ${field.required ? 'required' : ''}
                            ></textarea>
                        ` : `
                            <input 
                                type="${field.type}" 
                                id="${field.name}" 
                                name="${field.name}"
                                placeholder="${field.placeholder}"
                                ${field.required ? 'required' : ''}
                            >
                        `}
                    </div>
                `).join('')}
                <button type="submit" class="btn btn-primary btn-full">
                    <span>${portfolioData.contact.submitButtonText}</span>
                    <i class="fas fa-paper-plane"></i>
                </button>
            `;
        },

        /**
         * Render footer
         */
        renderFooter() {
            // Update current year
            const yearElement = document.getElementById('currentYear');
            if (yearElement) {
                yearElement.textContent = new Date().getFullYear();
            }

            // Update copyright name
            const copyrightElement = document.querySelector('[data-field="footer.copyright"]');
            if (copyrightElement) {
                copyrightElement.textContent = portfolioData.footer.copyright;
            }

            // Update tagline
            const taglineElement = document.querySelector('[data-field="footer.tagline"]');
            if (taglineElement) {
                taglineElement.textContent = portfolioData.footer.tagline;
            }
        },

        /**
         * Render code window in hero section
         */
        renderCodeWindow() {
            const codeElement = document.querySelector('[data-field="codeWindow.code"]');
            const filenameElement = document.querySelector('[data-field="codeWindow.filename"]');
            
            if (filenameElement) {
                filenameElement.textContent = portfolioData.codeWindow.filename;
            }

            if (codeElement && portfolioData.codeWindow.code) {
                // Simple syntax highlighting
                const code = portfolioData.codeWindow.code
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/(public|private|protected|class|interface|void|int|String|this|new|return)/g, '<span class="code-keyword">$1</span>')
                    .replace(/(Developer|Passion)/g, '<span class="code-class">$1</span>')
                    .replace(/("[^"]*")/g, '<span class="code-string">$1</span>')
                    .replace(/(\/\/.*)/g, '<span class="code-comment">$1</span>')
                    .replace(/(\d+)/g, '<span class="code-number">$1</span>');
                
                codeElement.innerHTML = code;
            }
        }
    };

    // Initialize renderer when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => ContentRenderer.init());
    } else {
        ContentRenderer.init();
    }

})();

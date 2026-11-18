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
         * Escape text before injecting it into HTML templates
         */
        escapeHtml(value) {
            return String(value ?? '')
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        },

        /**
         * Placeholder values must not produce clickable links
         */
        isValidUrl(url) {
            return typeof url === 'string' && url.trim() !== '' && url.trim() !== '#';
        },

        /**
         * Accept both the simple `category` field and the multi-category one
         */
        projectCategories(project) {
            const categories = Array.isArray(project.categories)
                ? project.categories
                : [project.category];

            return categories.filter(Boolean).map(category => String(category));
        },

        /**
         * Human readable label for categories that have no configured label
         */
        prettify(value) {
            return String(value)
                .replace(/[-_]/g, ' ')
                .replace(/\b\w/g, character => character.toUpperCase());
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
                const url = portfolioData.social?.[platform];

                if (this.isValidUrl(url)) {
                    element.href = url;
                } else {
                    // No invent dead links for platforms that are not configured
                    element.remove();
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
                    `<span class="role-item ${index === 0 ? 'active' : ''}">${this.escapeHtml(role)}</span>`
                )
                .join('');
        },

        /**
         * Render skills sections
         */
        renderSkills() {
            // Any skill category in the data is rendered into its matching container
            Object.entries(portfolioData.skills || {}).forEach(([key, category]) => {
                const container = document.querySelector(`[data-skill-items="${key}"]`);
                if (!container || !Array.isArray(category.items)) return;

                const title = document.querySelector(`[data-skill-category="${key}"] .category-title-text`);
                if (title) title.textContent = category.title;

                container.innerHTML = category.items
                    .map(skill => this.createSkillCard(skill))
                    .join('');
            });
        },

        /**
         * Create skill card HTML
         */
        createSkillCard(skill) {
            const iconClass = skill.iconClass || `fab ${skill.icon || 'fa-project-diagram'}`;
            const image = this.isValidUrl(skill.image) ? skill.image : null;

            return `
                <div class="skill-card" data-skill="${this.escapeHtml(skill.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''))}">
                    <div class="skill-icon">
                        ${image
                            ? `<img class="skill-image" src="${this.escapeHtml(image)}" alt="" loading="lazy">`
                            : `<i class="${this.escapeHtml(iconClass)}"></i>`
                        }
                    </div>
                    <h4 class="skill-name">${this.escapeHtml(skill.name)}</h4>
                    <p class="skill-description">${this.escapeHtml(skill.description)}</p>
                </div>
            `;
        },

        /**
         * Render project filter buttons
         */
        renderProjectFilters() {
            const filterContainer = document.querySelector('[data-project-filters]');
            if (!filterContainer) return;

            const configured = Array.isArray(portfolioData.projectFilters)
                ? [...portfolioData.projectFilters]
                : [];

            // Any category present in the data gets a filter, even if the
            // optional configuration above was not updated.
            const categories = new Set();
            (portfolioData.projects || []).forEach(project => {
                this.projectCategories(project).forEach(category => categories.add(category));
            });

            categories.forEach(value => {
                if (!configured.some(filter => filter.value === value)) {
                    configured.push({
                        value,
                        label: portfolioData.categoryLabels?.[value] || this.prettify(value)
                    });
                }
            });

            if (!configured.some(filter => filter.value === 'all')) {
                configured.unshift({ value: 'all', label: 'All' });
            }

            filterContainer.innerHTML = configured
                .map((filter, index) => `
                    <button class="filter-btn ${index === 0 ? 'active' : ''}" data-filter="${this.escapeHtml(filter.value)}">
                        ${this.escapeHtml(filter.label)}
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
                .map(project => {
                    const demoUrl = this.isValidUrl(project.demoUrl) ? project.demoUrl : null;
                    const codeUrl = this.isValidUrl(project.codeUrl) ? project.codeUrl : null;
                    const imageUrl = this.isValidUrl(project.image) ? project.image : null;
                    const categories = this.projectCategories(project);
                    const meta = [project.year, project.status].filter(Boolean);

                    return `
                    <article class="project-card"
                             data-category="${this.escapeHtml(categories[0] || '')}"
                             data-categories="${this.escapeHtml(categories.join(' '))}">
                        <div class="project-image">
                            ${imageUrl ? `
                                <img class="project-image-element"
                                     src="${this.escapeHtml(imageUrl)}"
                                     alt="${this.escapeHtml(project.imageAlt || project.title)}"
                                     loading="lazy">
                            ` : `
                                <div class="project-placeholder">
                                    <i class="fas ${this.escapeHtml(project.icon || 'fa-project-diagram')}"></i>
                                </div>
                            `}
                            <div class="project-overlay">
                                <div class="project-links">
                                    ${demoUrl ? `
                                        <a href="${this.escapeHtml(demoUrl)}" class="project-link" title="View Demo" aria-label="View demo of ${this.escapeHtml(project.title)}" target="_blank" rel="noopener">
                                            <i class="fas fa-external-link-alt"></i>
                                        </a>
                                    ` : ''}
                                    ${codeUrl ? `
                                        <a href="${this.escapeHtml(codeUrl)}" class="project-link" title="View Code" aria-label="View code of ${this.escapeHtml(project.title)}" target="_blank" rel="noopener">
                                            <i class="fab fa-github"></i>
                                        </a>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">${this.escapeHtml(project.title)}</h3>
                            <p class="project-description">${this.escapeHtml(project.description)}</p>
                            <div class="project-tags">
                                ${(project.tags || []).map(tag => `<span class="tag">${this.escapeHtml(tag)}</span>`).join('')}
                            </div>
                            ${meta.length ? `
                                <div class="project-meta">
                                    ${project.year ? `<span class="project-year">${this.escapeHtml(project.year)}</span>` : ''}
                                    ${project.status ? `<span class="project-status">${this.escapeHtml(project.status)}</span>` : ''}
                                </div>
                            ` : ''}
                        </div>
                    </article>
                `;
                })
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
         * Render the skills JSON in the Hero code window
         */
        renderCodeWindow() {
            const codeElement = document.querySelector('[data-field="codeWindow.code"]');
            const filenameElement = document.querySelector('[data-field="codeWindow.filename"]');
            const config = portfolioData.codeWindow;

            if (!config) return;

            if (filenameElement) {
                filenameElement.textContent = config.filename;
            }

            if (codeElement && config.code) {
                // Escape markup first, then apply the simple highlighter.
                // Quotes stay literal so the JSON string regex can match them.
                const code = config.code
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/("(?:[^"\\]|\\.)*")/g, '<span class="code-string">$1</span>')
                    .replace(/(\b\d+\b)/g, '<span class="code-number">$1</span>');

                codeElement.innerHTML = code;
            }
        }
    };

    // Render first, then let the interaction layer know that the DOM is ready
    const render = () => {
        ContentRenderer.init();
        document.documentElement.dataset.portfolioRendered = 'true';
        document.dispatchEvent(new CustomEvent('portfolio:rendered'));
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', render);
    } else {
        render();
    }

})();

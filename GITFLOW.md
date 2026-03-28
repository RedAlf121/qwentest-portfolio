# GitFlow Workflow Guide

This project follows the **GitFlow** branching model for version control.

## Branch Structure

```
main (production)
├── develop (integration)
│   ├── feature/contact-form-enhancement
│   ├── feature/animations
│   ├── release/v1.0.0
│   └── hotfix/responsive-fix
```

## Branch Types

### 1. `main` (Production)
- **Purpose**: Production-ready code only
- **Deployed from**: Always live in production
- **Commits**: Only merges from `release/*` and `hotfix/*` branches
- **Tagging**: Every commit on main should be tagged (v1.0.0, v1.0.1, etc.)

### 2. `develop` (Integration)
- **Purpose**: Integration branch for all features
- **Source**: Created from `main`
- **Merges**: Feature branches merge here
- **Deploy**: Staging/development environment

### 3. `feature/*` (New Features)
- **Purpose**: Developing new features
- **Branch from**: `develop`
- **Merge to**: `develop`
- **Naming**: `feature/<feature-name>`
- **Examples**:
  - `feature/contact-form-enhancement`
  - `feature/animations`
  - `feature/dark-mode-toggle`
  - `feature/project-filter`

### 4. `release/*` (Release Preparation)
- **Purpose**: Preparing for production release
- **Branch from**: `develop` (when feature-complete)
- **Merge to**: `main` and back to `develop`
- **Naming**: `release/v<major>.<minor>.<patch>`
- **Examples**:
  - `release/v1.0.0`
  - `release/v1.1.0`
  - `release/v2.0.0`

### 5. `hotfix/*` (Urgent Fixes)
- **Purpose**: Quick fixes for production issues
- **Branch from**: `main`
- **Merge to**: `main` and `develop`
- **Naming**: `hotfix/<fix-description>`
- **Examples**:
  - `hotfix/responsive-fix`
  - `hotfix/form-validation`
  - `hotfix/typo-correction`

## Workflow Examples

### Starting a New Feature

```bash
# Switch to develop
git checkout develop

# Create and switch to new feature branch
git checkout -b feature/new-skill-section

# Make changes and commit
git add .
git commit -m "feat: add new skill section with progress animations"

# Push feature branch
git push origin feature/new-skill-section

# After review/PR, merge to develop
git checkout develop
git merge --no-ff feature/new-skill-section
git push origin develop

# Delete feature branch
git branch -d feature/new-skill-section
```

### Preparing a Release

```bash
# Create release branch from develop
git checkout -b release/v1.0.0 develop

# Make final adjustments (version bump, bug fixes)
git commit -m "chore: bump version to 1.0.0"

# Merge to main
git checkout main
git merge --no-ff release/v1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin main --tags

# Merge back to develop
git checkout develop
git merge --no-ff release/v1.0.0
git push origin develop

# Delete release branch
git branch -d release/v1.0.0
```

### Creating a Hotfix

```bash
# Create hotfix from main
git checkout -b hotfix/critical-bug main

# Fix the bug
git commit -m "fix: resolve critical form submission bug"

# Merge to main
git checkout main
git merge --no-ff hotfix/critical-bug
git tag -a v1.0.1 -m "Hotfix version 1.0.1"
git push origin main --tags

# Merge to develop
git checkout develop
git merge --no-ff hotfix/critical-bug
git push origin develop

# Delete hotfix branch
git branch -d hotfix/critical-bug
```

## Commit Message Convention

This project uses conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Build process or auxiliary tool changes

### Examples

```bash
git commit -m "feat: add project filter functionality"
git commit -m "fix: resolve mobile navigation bug on iOS"
git commit -m "docs: update README with deployment instructions"
git commit -m "refactor: simplify content renderer logic"
git commit -m "chore: update gitignore rules"
```

## Current Branches

| Branch | Purpose | Status |
|--------|---------|--------|
| `main` | Production | ✅ Active |
| `develop` | Development | ✅ Created |
| `feature/contact-form-enhancement` | Contact form improvements | 📋 Ready |
| `feature/animations` | New animations | 📋 Ready |
| `release/v1.0.0` | First release prep | 📋 Ready |
| `hotfix/responsive-fix` | Responsive fixes | 📋 Ready |

## Quick Reference

```bash
# List all branches
git branch -a

# Create new feature branch
git checkout -b feature/my-feature develop

# Switch branches
git checkout <branch-name>

# Merge branch
git merge <branch-name>

# Delete branch
git branch -d <branch-name>

# Push branch to remote
git push -u origin <branch-name>
```

## GitHub/GitLab Integration

For pull requests:

1. Push feature branch to remote
2. Create PR/MR to `develop`
3. Code review
4. Merge when approved
5. Delete feature branch

## Version Tagging

```bash
# Create annotated tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# Push tags
git push origin --tags

# List tags
git tag -l
```

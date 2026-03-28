#!/bin/bash

# Deploy to GitHub Pages
# This script pushes the current branch to GitHub Pages

set -e

echo "🚀 Deploying to GitHub Pages..."

# Check if remote exists
if ! git remote get-url origin &> /dev/null; then
    echo "❌ No remote 'origin' found!"
    echo "Please add your GitHub repository:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
    exit 1
fi

# Get remote URL
REMOTE=$(git remote get-url origin)
echo "📦 Remote: $REMOTE"

# Push to gh-pages branch
echo "📤 Pushing to gh-pages branch..."
git push -u origin gh-pages

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Your site will be available at:"
echo "   https://YOUR_USERNAME.github.io/YOUR_REPO/"
echo ""
echo "📝 To enable GitHub Pages:"
echo "   1. Go to your repository on GitHub"
echo "   2. Navigate to Settings > Pages"
echo "   3. Select 'gh-pages' branch as source"
echo "   4. Click Save"
echo ""

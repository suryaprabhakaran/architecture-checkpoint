#!/bin/bash
# deploy.sh — build and push to GitHub Pages in one step
set -e

echo "▶ Building..."
GITHUB_ACTIONS=true npm run build

echo "▶ Deploying to gh-pages..."
cd out
git init -b gh-pages
touch .nojekyll
git add -A
git commit -m "Deploy $(date '+%Y-%m-%d %H:%M')"
git remote add origin git@github.com:suryaprabhakaran/architecture-checkpoint.git
git push origin gh-pages --force
cd ..
rm -rf out/.git

echo "✓ Live at https://suryaprabhakaran.github.io/architecture-checkpoint"

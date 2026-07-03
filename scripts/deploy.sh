#!/bin/bash

# Quick Deploy Script for Refund Tracker
# Supports: GitHub Pages, Vercel, Netlify

set -e

echo "🚀 Refund Tracker - Quick Deploy"
echo "================================"
echo ""
echo "Select your deployment platform:"
echo "1) GitHub Pages (FREE - Recommended)"
echo "2) Vercel (FAST - Recommended)"
echo "3) Netlify (EASY)"
echo "4) Local Development"
echo ""
read -p "Enter choice (1-4): " choice

case $choice in
  1)
    echo ""
    echo "📄 GitHub Pages Setup:"
    echo "====================="
    echo "1. Ensure all changes are committed:"
    echo "   git add ."
    echo "   git commit -m 'Deploy to GitHub Pages'"
    echo "   git push origin main"
    echo ""
    echo "2. Go to: https://github.com/Rebirth3105/Refund-Tracker/settings/pages"
    echo "3. Select 'GitHub Actions' as source"
    echo "4. ✅ Done! Your site will be live at:"
    echo "   https://rebirth3105.github.io/Refund-Tracker"
    echo ""
    ;;
  2)
    echo ""
    echo "⚡ Vercel Setup:"
    echo "==============="
    echo "1. Visit: https://vercel.com/new?source=github"
    echo "2. Click 'Add GitHub App'"
    echo "3. Select 'Rebirth3105/Refund-Tracker'"
    echo "4. Click 'Import' then 'Deploy'"
    echo "5. ✅ Your site will be live at: https://refund-tracker-rebirth3105.vercel.app"
    echo ""
    ;;
  3)
    echo ""
    echo "🎨 Netlify Setup:"
    echo "================"
    echo "1. Visit: https://app.netlify.com/start"
    echo "2. Click 'Connect GitHub'"
    echo "3. Select 'Rebirth3105/Refund-Tracker'"
    echo "4. Click 'Deploy'"
    echo "5. ✅ Your site will be live at: https://refund-tracker-rebirth3105.netlify.app"
    echo ""
    ;;
  4)
    echo ""
    echo "💻 Starting Local Development..."
    echo "==============================="
    npm install
    echo ""
    echo "Starting dev server on http://localhost:3000"
    npm run dev
    ;;
  *)
    echo "Invalid choice. Exiting."
    exit 1
    ;;
esac

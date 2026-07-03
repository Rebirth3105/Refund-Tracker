# Deployment Guide

## Quick Start - Choose Your Platform

This application is **production-ready** and deployed to multiple platforms:

---

## 🚀 GitHub Pages (FREE - RECOMMENDED)

**✅ Auto-deploys on every push to `main`**

### Live URL:
```
https://rebirth3105.github.io/Refund-Tracker
```

### Setup (Already Configured):
1. Go to your repo: https://github.com/Rebirth3105/Refund-Tracker
2. Click **Settings** → **Pages**
3. Under "Build and deployment"
4. Select "GitHub Actions" as the source
5. ✅ Done! Workflow will deploy automatically on next push

**The workflow file is already created:** `.github/workflows/build-and-deploy.yml`

---

## ⚡ Vercel (FASTEST - RECOMMENDED)

**Best performance and developer experience**

### Live URL (After Setup):
```
https://refund-tracker-rebirth3105.vercel.app
```

### Setup Steps:
1. Visit: https://vercel.com/new
2. Click "Add GitHub App"
3. Select "Rebirth3105/Refund-Tracker"
4. Click "Import"
5. Accept default settings
6. Click "Deploy"
7. ✅ Done! Auto-deploys on every push

**Configuration file ready:** `vercel.json`

---

## 🎨 Netlify (EASY - NO SETUP NEEDED)

**Drag-and-drop or GitHub integration**

### Live URL (After Setup):
```
https://refund-tracker-rebirth3105.netlify.app
```

### Setup Steps:
1. Visit: https://app.netlify.com/start
2. Click "Connect GitHub"
3. Find and select "Refund-Tracker"
4. Keep default build settings
5. Click "Deploy"
6. ✅ Done!

**Configuration file ready:** `netlify.toml`

---

## 🔐 Environment Variables (Optional)

If you want to use the Gemini API features:

### For GitHub Pages (via Actions):
1. Go to: https://github.com/Rebirth3105/Refund-Tracker/settings/secrets/actions
2. Click "New repository secret"
3. Name: `GEMINI_API_KEY`
4. Paste your API key
5. Click "Add secret"

### For Vercel:
```bash
vercel env add GEMINI_API_KEY
# Paste your key when prompted
vercel deploy
```

### For Netlify:
1. Site settings → Environment
2. Add variable: `GEMINI_API_KEY` = your_key

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Create .env.local (optional - for local API testing)
echo 'GEMINI_API_KEY=your_key_here' > .env.local

# Start development server
npm run dev

# Open: http://localhost:3000
```

---

## 📦 Production Build

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📊 Deployment Status

| Platform | Status | Setup Link |
|----------|--------|-----------|
| **GitHub Pages** | ✅ Ready | https://github.com/Rebirth3105/Refund-Tracker/settings/pages |
| **Vercel** | ✅ Ready | https://vercel.com/new?source=github |
| **Netlify** | ✅ Ready | https://app.netlify.com/start |

---

## 🔧 Troubleshooting

### Build fails: "Cannot find module"
- Platform will auto-run `npm install`
- Ensure `package.json` is committed to git

### Blank page appears
- Check browser console (F12) for errors
- Verify `GEMINI_API_KEY` is set if needed
- Clear browser cache

### GitHub Pages shows 404
- Verify repository is PUBLIC
- Go to Settings → Pages → Source set to "GitHub Actions"

### Vercel deployment stuck
- Check build logs at: https://vercel.com/dashboard
- Verify Node version: 20+ recommended

---

## 📈 Performance

All configurations include:
- ✅ Auto-compression
- ✅ CDN caching
- ✅ HTTPS by default
- ✅ SPA routing (all paths → index.html)
- ✅ Security headers

---

## 🎯 Next Steps

1. **Pick ONE platform** (GitHub Pages is simplest)
2. **Follow the setup steps** for that platform
3. **Test the live URL**
4. **Share with users!**

---

## 📞 Support

- **Vercel:** https://vercel.com/support
- **GitHub Pages:** https://docs.github.com/en/pages
- **Netlify:** https://docs.netlify.com

**Questions?** Check deployment logs on your chosen platform!

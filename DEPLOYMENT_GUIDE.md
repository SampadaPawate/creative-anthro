# Deployment Guide - GitHub Pages & More

This guide will help you deploy your portfolio to GitHub Pages, Vercel, or Netlify.

## Option 1: GitHub Pages (Free)

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name your repository (e.g., `portfolio` or `sampada-portfolio`)
4. Choose **Public** (required for free GitHub Pages)
5. **Don't** initialize with README, .gitignore, or license (since you already have files)
6. Click **"Create repository"**

### Step 2: Initialize Git and Push to GitHub

Open your terminal in the project directory and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote (replace with your username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace:**
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with your repository name

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab (at the top)
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select:
   - **Deploy from a branch**
   - Branch: `main` (or `gh-pages` if you prefer)
   - Folder: `/ (root)`
5. Click **Save**

### Step 4: Enable GitHub Actions

1. Still in **Settings** tab
2. Go to **Actions** → **General**
3. Under **Workflow permissions**, select:
   - **Read and write permissions**
   - ✅ Allow GitHub Actions to create and approve pull requests
4. Click **Save**

### Step 5: Deploy

1. The GitHub Actions workflow will automatically run when you push to `main`
2. Go to **Actions** tab in your repository to see the deployment progress
3. Once complete, your site will be live at:
   - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### Troubleshooting GitHub Pages

- **Site not updating?** Wait a few minutes and check the Actions tab for errors
- **404 errors?** Make sure your `base` in `vite.config.ts` matches your repo name if using subdirectory
- **Build failing?** Check the Actions tab for error logs

---

## Option 2: Vercel (Recommended - Easiest & Best)

Vercel is the easiest and fastest way to deploy, with automatic HTTPS and custom domains.

### Step 1: Push to GitHub

First, follow **Step 1 and Step 2** from GitHub Pages above.

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with your GitHub account
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click **"Deploy"**

That's it! Your site will be live in ~30 seconds at `https://YOUR_PROJECT_NAME.vercel.app`

### Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

---

## Option 3: Netlify (Free & Easy)

### Step 1: Push to GitHub

Follow **Step 1 and Step 2** from GitHub Pages above.

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your GitHub repository
5. Build settings (auto-detected):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**

Your site will be live at `https://RANDOM_NAME.netlify.app`

---

## After Deployment

### Update Your Links

1. **Resume PDF:** Make sure `public/resume.pdf` exists and will be accessible
2. **GitHub Links:** Update any GitHub profile links if needed
3. **Social Links:** Verify all social media links work

### Test Your Deployment

1. Visit your deployed site
2. Test the contact form (should open email client)
3. Check all navigation links
4. Test on mobile devices
5. Verify all external links work

---

## Quick Commands Reference

```bash
# Build locally to test
npm run build

# Preview the build
npm run preview

# Check git status
git status

# Push updates
git add .
git commit -m "Update portfolio"
git push
```

---

## Which Platform to Choose?

- **Vercel:** Best for React/Vite apps, automatic HTTPS, fast deployments
- **Netlify:** Great free tier, easy setup, good for static sites
- **GitHub Pages:** Free, integrated with GitHub, but slightly more setup

**Recommendation:** Use **Vercel** - it's the easiest and best for React/Vite projects!

---

## Need Help?

If you encounter any issues:
1. Check the deployment platform's documentation
2. Look at the build logs in the Actions/Deployments tab
3. Make sure all environment variables are set (if using any)
4. Verify your build works locally with `npm run build`



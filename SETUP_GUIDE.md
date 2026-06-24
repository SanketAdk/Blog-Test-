# Your Essay Blog 📝

A minimal, clean blog for sharing essays and thoughts. Built with Next.js, Tailwind CSS, and designed for easy content management.

## Features

✨ **Minimal & Clean Design** - Based on inspiration from Sam Altman, Emergent Thoughts, and Inverted Passion

📝 **Easy Content Management** - Just edit `data/posts.json` to add/edit posts

🚀 **Fast & Optimized** - Built with Next.js for blazing-fast performance

📱 **Responsive** - Works perfectly on mobile, tablet, and desktop

🏷️ **Categories** - Organize posts by category

📋 **Archive** - Browse all posts organized by date

🔄 **Navigation** - Easy navigation between posts

## Quick Start

### 1. How to Add a New Post

Posts are stored in `data/posts.json`. To add a new post:

```json
{
  "id": "unique-id",
  "title": "Your Post Title",
  "slug": "your-post-title",
  "excerpt": "Brief description of the post",
  "content": "Full content of your post. Separate paragraphs with double line breaks.\n\nLike this.",
  "date": "2025-06-24",
  "category": "Writing",
  "featured": false
}
```

**Important:**
- `id`: Unique identifier (use kebab-case)
- `slug`: URL-friendly version of the title (no spaces, lowercase)
- `date`: Format as YYYY-MM-DD
- `featured`: Set to `true` to show on homepage
- `content`: Paragraphs are split by `\n\n` (double newline)

### 2. Deploy to Vercel (FREE!)

This is the easiest way to deploy:

#### Step 1: Push to GitHub
```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Create a new repo on GitHub and push
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"
6. Your site is live! 🎉

**That's it!** Every time you push to GitHub, Vercel automatically rebuilds and deploys.

### 3. Update Posts After Deployment

After deployment, to add new posts:

1. Edit `data/posts.json` in your GitHub repository
2. Commit and push: `git add . && git commit -m "Add new post" && git push`
3. Vercel automatically rebuilds and deploys (takes ~1-2 minutes)
4. Visit your site and see the new post!

## Customization

### Change Site Title & Metadata
Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Site Name",
  description: "Your site description",
};
```

### Update Header Text
Edit `components/Header.tsx`:
```typescript
<h1>Your Site Name</h1>
<p>Your tagline here</p>
```

### Customize Colors
Edit `components/Header.tsx`, `components/PostCard.tsx`, etc. to change:
- Gray tones: `text-gray-600`, `bg-gray-100`, etc.
- Adjust hover effects, borders, spacing

## Project Structure

```
essay-blog/
├── data/
│   └── posts.json          # Your blog posts (EDIT THIS!)
├── app/
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles
│   ├── archive/
│   │   └── page.tsx        # All posts view
│   ├── posts/
│   │   └── [slug]/
│   │       └── page.tsx    # Individual post page
│   └── category/
│       └── [category]/
│           └── page.tsx    # Posts by category
├── components/
│   ├── Header.tsx          # Site header
│   └── PostCard.tsx        # Post preview card
├── lib/
│   └── posts.ts            # Post utilities
└── public/                 # Static files
```

## Local Development

To run locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Tips for Great Essays

1. **Be Clear** - Edit multiple times to make your ideas crystal clear
2. **Add Excerpts** - Write compelling excerpts that make people want to read more
3. **Use Categories** - Group related posts with categories
4. **Feature Best Work** - Set `featured: true` for your best posts
5. **Regular Updates** - Consistency matters more than frequency

## Troubleshooting

**Posts not showing up?**
- Check that `date` is in YYYY-MM-DD format
- Make sure `slug` matches the URL you're visiting (should be lowercase, no spaces)
- Verify the JSON syntax is valid (no trailing commas, proper quotes)

**Site not deploying?**
- Check GitHub Actions tab to see build logs
- Make sure `data/posts.json` is valid JSON
- Ensure all TypeScript types are correct

**Style issues?**
- Clear browser cache (Ctrl+Shift+Del)
- Hard refresh (Ctrl+Shift+R)

## Analytics & Growth

Consider adding:
- [Vercel Analytics](https://vercel.com/docs/analytics) (free)
- [Plausible Analytics](https://plausible.io) (privacy-friendly)
- Google Search Console (SEO)

## What's Next?

Future enhancements you could add:
- Newsletter signup
- Comments system
- Social sharing buttons
- Dark mode toggle
- Search functionality
- Reading time estimates
- Tags in addition to categories

## License

Use this however you want! It's yours.

---

Happy writing! 🚀

# Time 2 Play Games — static website

A responsive, static HTML/CSS/JavaScript website designed for GitHub Pages.

## Pages
- `/` — Home
- `/about` — About Us
- `/privacypolicy` — Privacy Policy
- `/contact` — Contact Us

## Important: clean URLs on GitHub Pages
GitHub Pages does not provide server-side rewrite rules. This package includes a `404.html` fallback and JavaScript routing so clean paths can load the corresponding static page. Keep `404.html` at the repository root. Test every route after publishing and custom-domain setup.

## Before publishing
1. Search the project for `hello@time2playgames.site` and replace it with your real support email if needed.
2. Review `privacypolicy.html` carefully. It is a starter template, not legal advice. Update it to match the actual data collected by each game and all ad/analytics SDKs you use.
3. Upload all files and folders to the root of your GitHub Pages repository.
4. In GitHub, open **Settings → Pages**, select your deployment source, and publish from the branch/folder containing `index.html`.
5. In **Settings → Pages → Custom domain**, enter `time2playgames.site` and follow GitHub's DNS instructions at your domain registrar. Enable HTTPS once available.

## Contact form
The form opens the visitor's default email app using a `mailto:` link. It does not submit information to a server. If you need a form that works without an email app, connect a form provider or backend.

## Fonts
The design loads DM Sans and Space Grotesk from Google Fonts. If external fonts are blocked, system sans-serif fonts will be used as fallback.

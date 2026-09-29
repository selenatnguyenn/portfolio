# Portfolio

A fast, dependency-free personal portfolio site for software engineering job applications.

**Features:** responsive layout, light pink theme (with an optional dark rose mode via the toggle), experience timeline,
projects grid with technology filters, accessible markup, and print-friendly styles.

## Editing content

All content lives in [`data.js`](data.js) — name, links, about, skills, experience, projects, and
education. Replace every line marked `TODO`. You shouldn't need to touch the HTML/CSS/JS.

To show a résumé button, add your résumé as `resume.pdf` in the repo root (or change `links.resume`).

## Running locally

No build step. Open `index.html` directly, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying (GitHub Pages)

1. Merge into `main`.
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` publishes the site on every push to `main`.

Your site will be at `https://<username>.github.io/portfolio/`. To serve it at
`https://<username>.github.io/`, rename the repository to `<username>.github.io`.

## Files

| File         | Purpose                         |
| ------------ | ------------------------------- |
| `data.js`    | All portfolio content (edit me) |
| `index.html` | Page structure                  |
| `styles.css` | Styles and light/dark themes    |
| `main.js`    | Renders content, interactions   |

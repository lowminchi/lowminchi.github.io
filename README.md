# Low Min Chi CV site

Static CV page for GitHub Pages. Upload everything in this folder to the root of your `<username>.github.io` repository (or any repo with Pages enabled).

## What protects the page

- **Content Security Policy** (the `<meta http-equiv="Content-Security-Policy">` tag in `index.html`). The browser only runs scripts and styles that come from this site's own files. Injected inline scripts, inline styles, outside scripts, outside images, forms and network calls are all blocked.
- **No third-party resources.** Fonts are in `fonts/`, so nothing loads from another server that could be changed or go down.
- **No inline code.** All CSS is in `style.css` and the only script is `guard.js`; this is what lets the policy be strict.
- **Frame guard** (`guard.js`). The page refuses to display inside another website's frame.
- **External links** use `rel="noopener noreferrer"`.

## Settings to switch on in GitHub (these protect the source itself)

1. Repository > Settings > Pages > tick **Enforce HTTPS**.
2. Account > Settings > Password and authentication > turn on **two-factor authentication**.
3. Repository > Settings > Branches > add a **branch protection rule** for `main` (block force pushes and deletions).
4. Do not add collaborators unless they need write access.

## Limits

A visitor can still edit the copy in their own browser (developer tools) or take an edited screenshot. No website can prevent that; it never changes what other people see. The real copy is whatever is in this repository.

## Editing later

Keep styles in `style.css` and scripts in `.js` files. An inline `<style>`, `style="..."` attribute or inline `<script>` will be blocked by the policy.

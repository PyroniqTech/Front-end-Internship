# Lumeo Project - Project Overview

Lumeo is a static frontend website project built using HTML, JS, Tailwind CSS & custom CSS in a hybrid approach.

It contains 1 base template (`base.html`) and 12 child pages.

The base template contains the header and footer.

Child pages only include `<meta>` tags, `<script>` links, and a `loadpage()` call that injects their unique content.

No `<html>`, `<head>`, `<body>` tags in child pages.

Pure frontend: no backend, no build tools, no additional frameworks.

## Folder & File Structure
```
lumeo/
│
├── base.html
├── index.html
├── about.html
├── services.html
├── pricing.html
├── testimonials.html
├── portfolio.html
├── faq.html
├── blog.html
├── newsletter.html
├── events.html
├── contact.html
├── resources.html
│
├── assets/
│   ├── css/
│   │   └── main.css
│   └── js/
│   │   └── main.js
│   └── images/
│       └── icons
└── README.md

```
## Rules

- Exactly 13 HTML files.
- Header and footer only exist in `base.html`.
- All child pages inject content via `loadpage(base.html, contentHTML)`.

---

## 1. base.html Instructions

Acts as the parent template.  

Child page content is injected into `#page-content`.

Requirements:

- Header includes: logo, navigation links, mobile to 4k fully responsive.
- Footer includes: logo, company name, copyright, (social links: FB, IG, YT).
- `<main>` must have an `id="page-content"` for injection.

---

## 2. main.js

Load `base.html` dynamically.  

Inject the child page content into the `<main>` area.

Requirements:

- Use `async/await` for fetching `base.html`.
- Extract the `<main>` with `id="page-content"` from the fetched template.
- Insert child page HTML content inside the extracted `<main>`.
- Ensure any interactive UI elements (like nav toggles) are initialized after injection.

---

## 3. main.css

Add custom styles.

Include fonts, hover effects, transitions, and any additional overrides.

Guidelines:

- Define body font and headings font.
- Smooth transitions for buttons and links.
- Hover effects on cards, buttons, and images.
- Responsive tweaks that complement Tailwind utilities.
- Keep Tailwind for layout, spacing, grids, and typography.

---

## 4. Child Page (12 Pages)

Each child page should follow this structure:

1. Meta, Script, link tags only  
2. `loadpage` call  

### Content Guidelines for Each Page

| Page            | Content Instructions |
|-----------------|-------------------|
| index.html      | Hero section with heading, subheading, CTA button, main image. |
| about.html      | Company mission, vision, team member cards with photos and descriptions. |
| services.html   | 3–6 service cards with icons, title, description; hover effect on cards. |
| pricing.html    | Pricing tables/cards; highlight recommended plan; buttons for CTA. |
| testimonials.html | Grid or carousel of customer testimonials; include name, photo, quote. |
| portfolio.html  | Project gallery/grid; hover overlay shows project info; responsive layout. |
| faq.html        | Accordion-style FAQ; questions toggle answers using JS. |
| blog.html       | Blog cards with title, excerpt, date, and "read more" link. |
| newsletter.html | Signup form; inputs for name and email; submit button; JS validation optional. |
| events.html     | Upcoming events list; date, title, location; cards or table format. |
| contact.html    | Contact form with name, email, message; optional Google Maps iframe. |
| resources.html  | List of downloadable files or guides; include image/icon and description for each. |

### CSS & Layout Guidelines for Child Pages

- Use Tailwind utility classes for spacing, grids, typography, and responsive layouts.
- Use custom CSS for fonts, hover effects, transitions, shadows, and color adjustments.
- Images should have proper alt text.
- Ensure mobile-first design and responsiveness across breakpoints.

### JS Guidelines

- Avoid inline JS in child HTML beyond the `loadpage()` call.
- Optional interactivity: navigation toggle, accordion FAQ, testimonial carousel.

---

## 5. Project Development Rules

- Only 13 HTML files.
- Child pages must not include `<html>`, `<head>`, `<body>`, or `<!DOCTYPE>`.
- All content must render through `base.html` injection.
- Test all pages in mobile and desktop view to ensure responsiveness.
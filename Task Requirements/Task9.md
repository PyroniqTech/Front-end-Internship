# TaskGrid  
**Smart Team Management Web App**

## Overview
TaskGrid is a frontend-based web application designed to help small teams organize, track, and visualize their tasks efficiently. It focuses purely on the frontend using **HTML**, **CSS (custom + Tailwind CSS)**, and **JavaScript (ES6)** — with no backend or database integration required. The app simulates how a real task management dashboard works (like Trello or Asana) through forms, grids, and interactive UI behaviors handled entirely on the client side.

## Technology Stack
| Component | Technology |
|------------|-------------|
| Structure | HTML5 (Semantic Tags) |
| Styling | CSS3 + Tailwind CSS |
| Interactivity | JavaScript (Vanilla ES6) |
| Assets | Optimized images, icons (SVG/PNG), fonts |
| No Backend | All data simulated via frontend logic only |

## 📁 Project Structure
```
TaskGrid/
├── base.html
├── index.html
├── teams.html
├── tasks.html
├── analytics.html
├── contact.html
├── README.md
└── static
    ├── js/
    │   └── script.js
    ├── css/
    │   └── style.css
    └── images/
        ├── logo.png
        ├── icons/
        └── backgrounds/
```
## Page-by-Page Breakdown

### 1️⃣ base.html
**Purpose:** Reusable layout for Navbar and Footer.  
**Components:**
- **Navbar:** Logo (TaskGrid), Links (Dashboard | Teams | Tasks | Analytics | Contact), Mobile Hamburger Menu (JS Toggle)
- **Footer:** Tagline, Address, Copyright
- **Social Icons:** Facebook, LinkedIn, GitHub, Instagram, YouTube  
**Key Requirements:** Responsive for mobile and desktop.

### 2️⃣ index.html — Dashboard / Home Page
**Purpose:** Overview of app and metrics.  
**Sections:**
1. **Hero Section:** Title, subtitle, CTA → “Start Managing” (links to Tasks page)
2. **Overview Cards:** Icons, numbers, and labels (e.g., Total Teams, Tasks Completed, Pending Tasks, Active Members)
3. **Features Summary:** Three key benefits — Visual Task Board, Smart Progress Analytics, Responsive Design

### 3️⃣ teams.html — Teams Management Page
**Purpose:** Manage teams and members.  
**Layout:**
- **Team Grid:** Team Name, Member Count, “View Members” button  
- **Modal Popup (JS):** Shows team member details dynamically  
- **Add Team Form:** Inputs (Team Name, Department, Members). JS validation and success message on submit.

### 4️⃣ tasks.html — Task Board Page
**Purpose:** Simulate a task management board.  
**Sections:**
- **Filter Bar:** Team/Priority dropdown, Search bar  
- **Task Grid:** Cards with Title, Description, Status  
- **Add Task Form:** Task Title, Description, Deadline, Assigned To (JS validation + success message)  
**JS Logic:** Add new tasks dynamically, filter/search, optional drag-and-drop simulation.

### 5️⃣ analytics.html — Progress & Overview Page
**Purpose:** Visualize team and task performance.  
**Components:**
- **Progress Bars:** Example: “Team Alpha — 80% Complete”  
- **Charts:** CSS/JS-based pie/bar chart simulation  
- **Summary Stats:** Total Tasks, Completed, Pending, Avg Progress

### 6️⃣ contact.html — Contact / Support Page
**Purpose:** Provide communication & feedback form.  
**Sections:**
- **Contact Form:** Name, Email, Subject, Message with JS validation and inline confirmation  
- **Contact Info:** Email, phone, address  
- **Social Links:** Clickable icons with aria-labels

## JavaScript (script.js) — Logic Breakdown
| Functionality | Description |
|----------------|-------------|
| Navbar Toggle | Show/hide hamburger menu for mobile view |
| Form Validation | Contact form + Add Task + Add Team forms |
| Dynamic Content | Add new tasks/cards dynamically |
| Filter/Search | Filter tasks by keyword or team |
| Modal Popup | Display member details dynamically |
| Smooth Scroll | Smooth scroll for navigation |
| Progress Update | Simulate progress for analytics page |

## Responsive Design (Tailwind Focus)
| Device | Layout Behavior |
|--------|------------------|
| Mobile (≤640px) | Single column, collapsible menu, stacked footer |
| Tablet (641–1024px) | 2-column grids, larger buttons |
| Desktop (≥1025px) | Full grid layout, hover animations, sidebar optional |

## Best Practices & Accessibility
- Semantic HTML structure  
- `alt` and `loading` attributes for all images  
- `aria-label` for all icons and buttons  
- External links: `target="_blank"` + `rel="noopener noreferrer"`  
- Proper heading hierarchy (`<h1>` → `<h2>` → `<h3>`)

## Performance & Code Quality
- Reuse Navbar & Footer via base.html  
- Clean, consistent indentation  
- Modular JS functions  
- Compressed images under static/images/  
- Tested responsiveness across devices

## SEO Guideline for TaskGrid Project

Make sure to include these basic **SEO meta tags** in every page:

- `<title>` — unique for each page.  
- `<meta name="viewport">` — for mobile responsiveness.  
- `<meta name="description">` — short summary of the page purpose.  
- `<meta name="keywords">` — add 4–6 relevant keywords.  

Keep them **clean**, **relevant**, and **properly formatted** like in the example shared above.

## Key Learning Goals
- Build real-world frontend logic without backend  
- Strengthen UI component and validation handling  
- Implement reusable patterns (base.html + modular JS)  
- Apply Tailwind CSS effectively  
- Practice responsive, utility-first design


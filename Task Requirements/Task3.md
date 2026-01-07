# 🛠️ Event Website (3 Pages + 3 Forms + Social Icons)

## Step 1: Project Setup

1. Create project folder: `event-website/`
2. Inside, create:
   - `index.html` → Home Page  
   - `speakers.html` → Speakers + Booking Form  
   - `contact.html` → Contact Form  
   - `js/` → folder for JavaScript file  
   - `images/` → hero, speakers, icons
3. Link Tailwind CSS CDN in each HTML page `<head>`:

## Step 2: Navbar Setup

Create a consistent navbar on all pages with links: **Home | Speakers | Contact**  
Use **Tailwind CSS** classes for styling, spacing, and responsiveness.

## Step 3: Home Page (`index.html`)

1. **Hero Section:** Event title, date, tagline, CTA button → links to Registration or Booking form.  
2. **About Section:** Short description.  
3. **Speakers Preview:** 2–3 featured speakers with image, name, short bio.  
4. **Footer:** Social media icons (Facebook, Twitter, Instagram, LinkedIn) and copyright info.

## Step 4: Speakers / Booking Page (`speakers.html`)

1. **Speakers Section:** All speakers in cards (image + name + bio).  
2. **Booking Form:**  
- Fields: Name, Email, Phone, Event Date, Number of Seats  
- JS validation: required fields, numeric validation for seats  
- Confirmation alert on submit  
3. **Footer:** Same as Home page.

## Step 5: Contact Page (`contact.html`)

1. **Contact Form:**  
- Fields: Name, Email, Message  
- JS validation: required fields, email format check  
- Confirmation alert on submit  
2. **Contact Info Section:** Address, phone, email  
3. **Footer:** Social icons repeated.

## Step 6: JavaScript (`js/script.js`)

- Handle form validations for all 3 forms.  
- Add alerts or messages on successful submission.  
- Optional: scroll animations or collapsible sections.

## Step 7: Images & Assets

- Place hero images, speaker photos, and icons in `images/` folder.  
- Use SVGs or Font Awesome for social media icons.

## Step 8: Final Check

- Navbar links and navigation working properly.  
- Form validations and success messages functional.  
- Responsive design confirmed for mobile, tablet, and desktop.  
- Footer consistent on all pages.

## Step 9: Optional Enhancements

- Smooth scrolling for navbar links.  
- Tailwind-based hover effects for buttons, cards, and icons.  
- Dark/light mode toggle.  
- Simple animations for hero section or speaker cards.

## 📁 Minimal Project Tree
```
event-website/ 
├── index.html 
├── speakers.html 
├── contact.html 
├── js/ 
│   └── script.js 
└── images/
```

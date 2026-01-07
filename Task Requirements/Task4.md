# 🌍 Exploria — Travel Web App

## 📂 Project Tree
```
Exploria/
├── base.html         → Welcome page  
├── index.html        → Home Page  
├── destinations.html → Destinations / Packages Page  
├── contact.html      → Contact Page  
├── js/
│   └── script.js     → For interactivity & form validation  
└── images/           → logo, hero, destinations, icons
```

## 📄 Pages Breakdown

### 1️⃣ base.html (Welcome Page)
**Hero Section**
- Agency logo (`logo.jpg` from images/)
- Big tagline: **“Explore the World with Us”**
- CTA buttons → Links to Home Page, Destinations Page, Contact Page
- Fullscreen hero background with travel theme  

**Footer**
- Social media icons: Facebook, YouTube, Instagram  
- Address + Copyright

### 2️⃣ index.html (Home Page)
**Hero Section**
- Big tagline: “Explore the World with Us”  
- CTA button → Links to Destinations Page  
- Fullscreen hero background with travel theme  

**About Section**
- Short description of agency’s services  
- Text kept concise, responsive font sizes  

**Featured Destinations Preview**
- 2–3 cards (image, title, short bio, “Book Now” button)
- Responsive grid layout:  
  - Mobile → 1 column  
  - Tablet → 2 columns  
  - Desktop → 3 columns  

### 3️⃣ destinations.html (Destinations / Packages Page)
**Destinations Grid**
- 6–8 destination cards  
- Each card: image, name, short info, price, “Book Now” button  
- Tailwind grid responsive:
  - Mobile: 1 column  
  - Tablet: 2 columns  
  - Desktop: 3–4 columns  

**Booking Form**
- Fields:  
  - Name (text)  
  - Email (text)  
  - Phone (numeric only)  
  - Destination (dropdown or text)  
  - Date (date picker)  
  - Number of Travelers (numeric)  
- **Validation in script.js:**  
  - All fields required  
  - Email format check  
  - Numeric validation for phone & travelers  
  - On success → Alert: “Booking Confirmed!”

### 4️⃣ contact.html (Contact Page)
**Contact Form**
- Fields: Name, Email, Message  
- JS validation:  
  - All fields required  
  - Email format check  
  - Success alert: “Message Sent Successfully!”

**Contact Info Section**
- Address, phone, email of agency  

**Footer**
- Same layout as other pages  

## 🛠 Responsive Design Guidelines

**1️⃣ Navbar (set only in base.html)**  
- Mobile → Hamburger menu dropdown  
- Tablet/Desktop → Horizontal navbar  
- Sticky at top  

**2️⃣ Hero Section**  
- Mobile → Vertical stack (logo top, text below)  
- Desktop → Center-aligned large text + background image  

**3️⃣ Grids (Destinations & Featured Cards)**  
- Mobile: 1 column  
- Tablet: 2 columns  
- Desktop: 3–4 columns  

**4️⃣ Forms**  
- Mobile: Full width single-column inputs  
- Desktop: Centered form, max width (e.g., max-w-lg)  

**5️⃣ Footer (set only in base.html)**  
- Mobile: Stacked (icons above text)  
- Desktop: Horizontal layout  

**6️⃣ Typography**  
- Use Tailwind responsive font utilities (e.g., `text-xl md:text-2xl lg:text-4xl`)  
- Buttons & headings scale with screen size  

## ✅ Best Practices & Recommendations

### 🔹 Image Optimization
- Use `loading="lazy"` for all images except hero  
- Compress all images before saving  
- Include `alt=""` for accessibility  

### 🔹 Links Optimization
- External links → `target="_blank" rel="noopener noreferrer"`  
- Use `aria-label` for social icons (e.g., `<a aria-label="Visit our Facebook">`)  

### 🔹 Accessibility
- Use semantic tags: `<header>`, `<main>`, `<section>`, `<footer>`  
- Maintain high contrast for readability  
- Buttons must include clear text labels  

### 🔹 SEO Basics
- Unique `<title>` for each page  
- `<meta name="description">` for every page  
- Follow heading hierarchy (h1 once, h2/h3 for subsections)  

### 🔹 Performance
- Reuse navbar & footer components for consistency  
- Use Tailwind utility classes for styling efficiency  

### 🔹 UX Enhancements
- Add hover effects: `hover:scale-105`, `hover:bg-blue-600`  
- Implement smooth scroll for navbar links  
- Provide feedback messages for form actions (alerts / inline messages)

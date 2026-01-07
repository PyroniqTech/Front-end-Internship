# EventHub Project Plan & Folder Structure

## Folder Structure
```
/EventHub 
├─ /public 
│   └─ index.html, favicon, static images 
├─ /src 
│   ├─ /assets       ← images, icons 
│   ├─ /components   ← reusable UI components 
│   │    ├─ Header.jsx 
│   │    ├─ Footer.jsx 
│   │    ├─ Sidebar.jsx 
│   │    ├─ Modal.jsx 
│   │    ├─ EventCard.jsx 
│   │    ├─ EventForm.jsx 
│   │    ├─ Calendar.jsx 
│   │    ├─ DashboardStats.jsx 
│   │    └─ ThemeToggle.jsx 
│   ├─ /pages        ← page components 
│   │    ├─ Dashboard.jsx 
│   │    ├─ EventList.jsx 
│   │    ├─ CalendarView.jsx
│   │    ├─ Profile.jsx 
│   │    └─ NotFound.jsx 
│   ├─ /context      ← React context for global state 
│   │    ├─ EventContext.jsx 
│   │    └─ ThemeContext.jsx 
│   ├─ /utils        ← helpers, localStorage functions
│   │    └─ localStorageHelpers.jsx 
│   ├─ App.jsx 
│   ├─ index.jsx
│   └─ routes.jsx
```
## Styling Options

- Tailwind CSS, Bootstrap, or custom CSS (your choice).  
- Ensure responsiveness and visual coherence across devices.

---

## Routing

- Implement React Router.  
- Fallback for 404 (`NotFound.jsx`).  
- Consistent navigation via Header and/or Sidebar.

---

## Reusable Components

1. **Header.jsx / Footer.jsx / Sidebar.jsx** – consistent navigation layout.  
2. **EventCard.jsx** – display individual event details.  
3. **EventForm.jsx** – create/edit events with input validation.  
4. **Modal.jsx** – confirmations, alerts, or additional info.  
5. **Calendar.jsx** – view events in a calendar format.  
6. **DashboardStats.jsx** – show event stats, metrics.  
7. **ThemeToggle.jsx** – switch between light/dark mode with persistence in `localStorage`.

---

## State Management

- Use React Context for global state:  
  - `EventContext.jsx` – manage events.  
  - `ThemeContext.jsx` – manage theme preferences.  
- Persist events and theme using `localStorage` via `localStorageHelpers.jsx`.

---

## Forms & Modals

- Validate input fields in `EventForm.jsx`.  
- `Modal.jsx` handles confirmation before destructive actions (delete, logout, etc.).

---

## Responsiveness & UI

- Make UI fully responsive.  
- Handle empty states gracefully (no events, no profile info).  
- Ensure consistency across all components.

---

## Testing

- Navigation between pages.  
- CRUD operations on events.  
- Theme toggle and persistence.  
- Responsiveness on different devices.  
- Edge cases (empty forms, invalid input, duplicate events, etc.).

---

## Responsibilities

1. **Project Setup**  
   - Initialize React project.  
   - Choose styling approach (Tailwind/Bootstrap/Custom CSS).  
   - Configure folder structure as above.

2. **Component Development**  
   - Build all reusable components.  
   - Ensure validation, modals, and theme toggle functionality.

3. **Pages**  
   - Implement `Dashboard`, `EventList`, `CalendarView`, `Profile`, `NotFound`.  
   - Connect components to context and state.

4. **State Management**  
   - Implement `EventContext` and `ThemeContext`.  
   - Handle `localStorage` persistence for events and theme.

5. **Routing & Navigation**  
   - Set up React Router with fallback route.  
   - Implement Header/Sidebar for consistent navigation.

6. **Styling & Responsiveness**  
   - Ensure clean, modern, and responsive UI.  
   - Test across devices.

7. **Testing & Edge Cases**  
   - Thoroughly test all functionality: forms, modals, CRUD, theme, responsiveness.  
   - Handle empty or edge cases.

8. **Final Delivery**  
   - Clean code, production-ready.  
   - Push to GitHub and share link.  
   - Deadline: Thursday, 2 PM.

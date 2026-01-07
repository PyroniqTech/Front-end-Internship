# EventHub

EventHub is a **React.js based Event Management application** that allows users to **create, manage, and view events**. The app uses **localStorage** to store event data and provides a clean, responsive UI using **Tailwind CSS** and **Heroicons**.


## **Features**

- Dashboard with **event statistics**:
  - Total Events
  - Upcoming Events
  - Past Events
- Add new events via **modal form**.
- Manage events (Add/Edit/Delete) stored in **localStorage**.
- Responsive UI for mobile, tablet, and desktop.
- 404 Page for unmatched routes.


## **Folder Structure**

```text
/EventHub
├─ /public
│  ├─ index.html
│  ├─ favicon
│  └─ static images
├─ /src
│  ├─ /assets       ← images, icons
│  ├─ /components   ← reusable UI components
│  │   ├─ Header.jsx
│  │   ├─ Footer.jsx
│  │   ├─ Sidebar.jsx
│  │   ├─ Modal.jsx
│  │   ├─ EventCard.jsx
│  │   ├─ EventForm.jsx
│  │   ├─ DashboardStats.jsx
│  │   └─ ThemeToggle.jsx
│  ├─ /pages        ← main page components
│  │   ├─ Dashboard.jsx
│  │   ├─ EventList.jsx
│  │   ├─ CalendarView.jsx
│  │   ├─ Profile.jsx
│  │   └─ NotFound.jsx
│  ├─ /context      ← global state
│  │   ├─ EventContext.jsx
│  │   └─ ThemeContext.jsx
│  ├─ /utils        ← helper functions
│  │   └─ localStorageHelpers.jsx
│  ├─ App.jsx
│  ├─ index.jsx
│  └─ routes.jsx
```

## **Technologies Used**

- **React.js** - Frontend library
- **Tailwind CSS** - Styling
- **HeroUI** - Styling
- **Heroicons** - Icons
- **React Router DOM** - Routing
- **localStorage** - Event data persistence


## **Installation & Setup**

1. Clone the repository:

```bash
git clone https://github.com/Muhammd-yasir/EventHub-App
````

2. Navigate to the project folder:

```bash
cd EventHub
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open in browser: [http://localhost:5173]


## **Usage**

1. Go to the **Dashboard** to see event statistics.
2. Click **Create New Event** to add a new event using the modal form.
3. Event data will be saved in **localStorage** and persist across browser reloads.
4. Navigate to other pages using the sidebar or navigation (Dashboard, Event List, Calendar, Profile).
5. Any unmatched routes will show the **404 Not Found Page**.

---

## **Notes**

* This project uses **localStorage**, so data is stored locally in the browser. No backend server is used.
* All UI is built with **Tailwind CSS** and **HeroUI**, making it responsive on all devices.
* The project is structured for scalability with separate folders for components, pages, context, assets, and utilities.

---

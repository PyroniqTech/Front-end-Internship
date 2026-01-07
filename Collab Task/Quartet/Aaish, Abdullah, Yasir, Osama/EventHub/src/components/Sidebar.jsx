import { Link, useLocation } from "react-router-dom";
import { 
  HomeIcon, 
  CalendarDaysIcon, 
  ListBulletIcon, 
  UserIcon 
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Dashboard", icon: <HomeIcon className="w-5 h-5" /> },
    { path: "/events", label: "Events", icon: <ListBulletIcon className="w-5 h-5" /> },
    { path: "/calendar", label: "Calendar", icon: <CalendarDaysIcon className="w-5 h-5" /> },
    { path: "/profile", label: "Profile", icon: <UserIcon className="w-5 h-5" /> },
  ];

  return (
    <aside className="w-64 bg-white border-r shadow-sm hidden md:block h-screen">
      <div className="h-full p-6 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-700 mb-6">Navigation</h2>
        <nav className="flex flex-col gap-2 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg transition ${
                location.pathname === item.path
                  ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
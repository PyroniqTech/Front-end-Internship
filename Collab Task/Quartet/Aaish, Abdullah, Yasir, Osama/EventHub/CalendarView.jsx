
import { useState } from "react";
import { useEventContext } from "../context/EventContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarView() {
  const { events } = useEventContext();

  
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  
  const prevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  
  const nextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const firstDay = new Date(currentYear, currentMonth, 1).getDay(); 
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  
  const cells = [];

  
  for (let i = 0; i < firstDay; i++) {
    cells.push(<div key={`empty-${i}`} className="p-4 bg-transparent"></div>);
  }


  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    
    const dayEvents = events.filter((e) => e.date === dateStr);

    const isToday =
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear();

    cells.push(
      <div
        key={day}
        className={`p-3 rounded-lg border bg-white dark:bg-gray-800 
        shadow-sm transition-all cursor-pointer min-h-[80px]
        ${isToday ? "border-blue-500 ring-2 ring-blue-400" : "border-gray-200 dark:border-gray-700"}
        `}
      >
        <div className="font-semibold">{day}</div>

    
        <div className="mt-2 space-y-1">
          {dayEvents.map((ev) => (
            <div
              key={ev.id}
              className="text-xs bg-blue-500 text-white px-2 py-1 rounded-md truncate"
            >
              {ev.title}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
    
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={prevMonth}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          <ChevronLeft />
        </button>

        <h2 className="text-2xl font-bold">
          {monthNames[currentMonth]} {currentYear}
        </h2>

        <button
          onClick={nextMonth}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          <ChevronRight />
        </button>
      </div>

      
      <div className="grid grid-cols-7 text-center font-semibold mb-3">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="py-2 text-gray-600 dark:text-gray-400">
            {d}
          </div>
        ))}
      </div>

    
      <div className="grid grid-cols-7 gap-3">
        {cells}
      </div>
    </div>
  );
}

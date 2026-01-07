import { useContext } from "react";
import { EventContext } from "../context/EventContext";
import EventCard from "../components/EventCard";

export default function EventList() {
  const { events } = useContext(EventContext);

  return (
    <div className="md:p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="md:text-3xl text-xl font-bold text-gray-800">All Events</h1>
        <div className="text-gray-600">
          {events.length} event{events.length !== 1 ? 's' : ''} total
        </div>
      </div>

      {events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard 
              key={event.id} 
              event={event}
              onEdit={() => {}} // You can add edit functionality 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-xl">
          <div className="text-6xl mb-4">📅</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No Events Found
          </h3>
          <p className="text-gray-500 animate-pulse mb-6">
            You haven't created any events yet.
          </p>
          <a 
            href="/" 
            className="inline-block bg-blue-600 text-white px-3 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Create Your First Event
          </a>
        </div>
      )}
    </div>
  );
}
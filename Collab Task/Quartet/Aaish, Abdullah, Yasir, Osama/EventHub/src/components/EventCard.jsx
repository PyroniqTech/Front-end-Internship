import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import DashboardStats from "../components/DashboardStats";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";
import Modal from "../components/Modal";

export default function Dashboard() {
  const { events, getStats } = useContext(EventContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const stats = getStats();

  const handleEdit = (event) => {
    setEditingEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingEvent(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create Event
        </button>
      </div>

      <DashboardStats {...stats} />

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recent Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.length > 0 ? (
            events.slice(-6).reverse().map((event) => (
              <EventCard 
                key={event.id} 
                event={event} 
                onEdit={handleEdit}
              />
            ))
          ) : (
            <div className="col-span-3 text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600 mb-4">No events yet. Create your first event!</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Create Event
              </button>
            </div>
          )}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <EventForm 
          onClose={handleCloseModal} 
          editingEvent={editingEvent}
        />
      </Modal>
    </div>
  );
}
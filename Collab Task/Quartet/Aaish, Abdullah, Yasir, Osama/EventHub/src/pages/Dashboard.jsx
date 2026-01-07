import { useState, useContext } from "react";
import { EventContext } from "../context/EventContext";
import Modal from "../components/Modal";
import DashboardStats from "../components/DashboardStats";
import EventForm from "../components/EventForm";
import { PlusIcon } from "@heroicons/react/24/solid";

const Dashboard = () => {
  const { events } = useContext(EventContext);
  const [openModal, setOpenModal] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const totalEvents = events.length;
  const upcomingEventsList = events.filter((event) => event.date >= today);
  const upcomingEvents = upcomingEventsList.length;
  const pastEventsList = events.filter((event) => event.date < today);
  const pastEvents = pastEventsList.length;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
    
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
          Dashboard
        </h1>
        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center px-4 py-2 bg-orange-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          Create New Event
        </button>
      </div>

    <DashboardStats total={totalEvents} past={pastEvents} upcoming={upcomingEvents} />
      
      {/* Modal */}
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <EventForm onClose={() => setOpenModal(false)} />
      </Modal>
    </div>
  );
};

export default Dashboard;

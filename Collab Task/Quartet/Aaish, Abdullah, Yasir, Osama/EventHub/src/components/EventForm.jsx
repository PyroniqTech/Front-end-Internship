import { useState, useContext } from "react";
import { EventContext } from "../context/EventContext";
import { XMarkIcon } from "@heroicons/react/24/solid";

const EventForm = ({ onClose }) => {
  const { addEvent } = useContext(EventContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return alert("Title is required!");
    if (!date) return alert("Date is required!");
    if (!description) return alert("Description is required!");

    const newEvent = { id: Date.now(), title, date, description };
    addEvent(newEvent);

    setTitle(""); setDate(""); setDescription("");
    alert("Event Added");
    if (onClose) onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-8 md:p-10 rounded shadow-lg w-full max-w-md mx-auto relative"
    >
     
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
      >
        <XMarkIcon className="w-6 h-6" />
      </button>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 text-center">
        Create New Event
      </h2>

      
      <div className="mb-5">
        <label className="block text-gray-700 mb-2 font-medium">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

 
      <div className="mb-5">
        <label className="block text-gray-700 mb-2 font-medium">Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      
      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-medium">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      
      <div className="flex flex-col sm:flex-row justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-orange-500 text-black font-semibold rounded hover:bg-orange-600 transition"
        >
          Create Event
        </button>
      </div>
    </form>
  );
};

export default EventForm;

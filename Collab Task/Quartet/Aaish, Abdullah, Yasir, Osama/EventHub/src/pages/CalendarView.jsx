export default function CalendarView() {
    return (
      <div className="md:p-6 p-2">
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-1 justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Calendar View</h1>
          <button className="bg-blue-600 text-white md:p-3 p-2 rounded-lg hover:bg-blue-700 transition">
            Add to Calendar
          </button>
        </div>
        
        <div className="bg-white rounded-xl shadow p-6">
          <div className="text-center py-12">
            <div className="text-6xl mb-6">📅</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Calendar View
            </h3>
            <p className="text-gray-600">
              Your events will be displayed in a calendar format here.
            </p>
          </div>
        </div>
      </div>
    );
  }
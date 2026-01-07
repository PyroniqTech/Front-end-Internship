const DashboardStats = ({ total, upcoming, past }) => {

    return (
        <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow text-center">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Total Events</h2>
                    <p className="text-3xl font-bold text-gray-900">{total}</p>
                  </div>
          
                  <div className="bg-white p-6 rounded-lg shadow text-center">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Upcoming Events</h2>
                    <p className="text-3xl font-bold text-gray-900">{upcoming}</p>
                  </div>
          
                  <div className="bg-white p-6 rounded-lg shadow text-center">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Past Events</h2>
                    <p className="text-3xl font-bold text-gray-900">{past}</p>
                  </div>
                </div>   
        </>
    )
}

export default DashboardStats
export default function Profile() {
    return (
      <div className="md:p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Profile</h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow p-6 mb-6 border border-blue-600 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Account Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded-lg"
                  placeholder="John doe"
                />
              </div>
              
              <div>
                <label className="block text-gray-600 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full p-2 border rounded-lg"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-600 mb-1">Phone</label>
                <input 
                  type="tel" 
                  className="w-full p-2 border rounded-lg"
                  placeholder="+44 "
                />
              </div>
            </div>
            
            <button className="mt-6 bg-blue-600 text-sm text-white px-3 md:px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  }
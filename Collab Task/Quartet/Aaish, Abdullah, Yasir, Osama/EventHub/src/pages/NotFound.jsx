
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
      <ExclamationTriangleIcon className="w-24 h-24 text-orange-500 mb-6" />

      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        404 - Page Not Found
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

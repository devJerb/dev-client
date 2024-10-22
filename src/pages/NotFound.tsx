import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative z-10 text-center px-8 py-12 bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-6 flex justify-center">
          <AlertCircle className="h-10 w-10 text-gray-900" />
        </div>
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          I apologize, but the page you're looking for doesn't exist in my
          portfolio. Please check the URL or navigate back to the home page.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 ease-in-out transform hover:scale-105"
        >
          <Home className="mr-2 h-5 w-5" />
          Return to Home
        </a>
      </div>
    </div>
  );
}

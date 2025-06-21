import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            NextJS + .NET Core Web Portal
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            A modern web portal demonstrating the Backend-for-Frontend (BFF) pattern
          </p>
          
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Architecture Overview
              </h2>
              <ul className="text-left space-y-2 text-gray-600 dark:text-gray-300">
                <li>• NextJS frontend with Server-Side Rendering (SSR)</li>
                <li>• .NET Core Web API backend</li>
                <li>• NextJS API routes as Backend-for-Frontend (BFF)</li>
                <li>• Clean separation between frontend and backend</li>
                <li>• Type-safe communication layer</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              href="/users"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              View Users (Demo)
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This demonstrates server-side data fetching with the BFF pattern
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

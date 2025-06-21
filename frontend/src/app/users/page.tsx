import type { User } from '@/lib/api/types';
import { AddUserDialog } from '@/components/add-user-dialog';

async function getUsers(): Promise<User[]> {
  // This runs on the server side
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  // Using no-store to ensure fresh data is fetched on every request
  const res = await fetch(`${baseUrl}/api/users`, { cache: 'no-store' });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch users. Status: ${res.status}. Body: ${errorText}`);
  }
  
  return res.json();
}

export default async function UsersPage() {
  let users: User[] = [];
  let error: string | null = null;

  try {
    users = await getUsers();
  } catch (e) {
    error = e instanceof Error ? e.message : 'An unknown error occurred';
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-red-500">Error Fetching Users</h1>
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
          <p className="font-bold">An error occurred while fetching data from the backend.</p>
          <p>Please ensure the backend service is running and accessible.</p>
          <p className="text-sm mt-2 font-mono bg-red-50 p-2 rounded">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <AddUserDialog />
      </div>
      {users && users.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user: User) => (
            <div key={user.id} className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
          <p className="font-bold">No Users Found</p>
          <p>There are no users to display at the moment.</p>
        </div>
      )}
    </div>
  );
} 
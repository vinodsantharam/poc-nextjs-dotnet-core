import { NextResponse } from 'next/server';
import { fetchFromApi } from '@/lib/api/server';
import { API_ENDPOINTS } from '@/lib/api/config';
import type { User, NewUser } from '@/lib/api/types';

// GET all users
export async function GET() {
  const result = await fetchFromApi<User[]>(API_ENDPOINTS.users);
  
  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }

  return NextResponse.json(result.data);
}

// POST a new user
export async function POST(request: Request) {
  try {
    const body: NewUser = await request.json();
    const result = await fetchFromApi<User>(API_ENDPOINTS.users, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json(result.data, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
} 
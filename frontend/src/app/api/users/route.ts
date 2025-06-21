import { NextResponse } from 'next/server';
import { fetchFromApi } from '@/lib/api/server';
import { API_ENDPOINTS } from '@/lib/api/config';
import type { User } from '@/lib/api/types';

export async function GET() {
  const result = await fetchFromApi<User[]>(API_ENDPOINTS.users);
  
  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }

  return NextResponse.json(result.data);
} 
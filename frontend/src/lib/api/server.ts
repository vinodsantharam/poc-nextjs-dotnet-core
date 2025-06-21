import { API_CONFIG } from './config';
import { ApiResponse, ApiError } from './types';

// Server-side API utility functions
export async function fetchFromApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_CONFIG.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        ...API_CONFIG.headers,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json() as ApiError;
      throw new Error(error.message || 'API request failed');
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    return {
      data: null as unknown as T,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
} 
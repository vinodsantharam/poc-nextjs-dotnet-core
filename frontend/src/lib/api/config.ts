// API Configuration
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
} as const;

// API Endpoints (internal use only - not exposed to frontend)
export const API_ENDPOINTS = {
  users: '/api/users',
  posts: '/api/posts',
} as const; 
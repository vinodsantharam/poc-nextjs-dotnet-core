// API Response Types
export interface ApiResponse<T> {
  data: T;
  error?: string;
}

// Base API Error
export interface ApiError {
  message: string;
  statusCode: number;
}

// Example Data Types (extend as needed)
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
} 
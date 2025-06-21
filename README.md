# NextJS + .NET Core Web Portal

This project demonstrates a web portal built with NextJS frontend and .NET Core backend, implementing a Backend-for-Frontend (BFF) pattern.

## Project Structure

```
├── frontend/           # NextJS application
│   ├── src/
│   │   ├── app/       # Next.js 13+ app directory
│   │   ├── lib/       # Shared utilities and types
│   │   └── services/  # API service layer
├── backend/           # .NET Core Web API
│   ├── src/
│   │   ├── WebApi/   # Main API project
│   │   └── Core/     # Core business logic
```

## Architecture

- Frontend uses Next.js API routes as a Backend-for-Frontend (BFF)
- Backend API is completely decoupled from the frontend
- All API calls are made server-side, maintaining SSR benefits
- Type safety between frontend and backend using shared types

## Development Setup

### Prerequisites
- Node.js 18+ 
- .NET Core 9 SDK

### Quick Start
Run both frontend and backend with one command:
```bash
./start-dev.sh
```

### Manual Setup

1. **Start the backend:**
   ```bash
   cd backend/src/WebApi/WebApi
   export PATH="/usr/local/share/dotnet:$PATH"  # On macOS if needed
   dotnet run --urls="http://localhost:5000"
   ```

2. **Start the frontend:**
   ```bash
   cd frontend
   npm install  # First time only
   npm run dev
   ```

### Access Points
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Documentation**: http://localhost:5000/swagger

## How It Works

### BFF Pattern Implementation

1. **Frontend Components** make calls to NextJS API routes (`/api/*`)
2. **NextJS API Routes** act as a Backend-for-Frontend (BFF) layer
3. **BFF Layer** communicates with the .NET Core backend
4. **Backend** returns data to the BFF
5. **BFF** processes and returns data to the frontend

### Benefits

- ✅ **Server-Side Rendering**: Data is fetched on the server
- ✅ **Clean Separation**: Frontend doesn't know about backend endpoints
- ✅ **Type Safety**: Shared TypeScript interfaces
- ✅ **Scalability**: Easy to modify backend without touching frontend
- ✅ **Security**: API keys and sensitive logic stay on the server 
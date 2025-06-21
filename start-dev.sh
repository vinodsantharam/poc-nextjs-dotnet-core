#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting NextJS + .NET Core Web Portal${NC}"
echo -e "${YELLOW}======================================${NC}"

# Function to cleanup background processes
cleanup() {
    echo -e "\n${YELLOW}Stopping services...${NC}"
    # Use pkill to stop all child processes of this script.
    # This is more robust for stopping services like 'dotnet run' and 'npm run dev'.
    pkill -P $$
    exit
}

# Set trap to cleanup on exit
trap cleanup SIGINT SIGTERM

# Start .NET Core API
echo -e "${GREEN}Starting .NET Core API on port 5000...${NC}"
(cd backend/src/WebApi/WebApi && export PATH="/usr/local/share/dotnet:$PATH" && dotnet run --urls="http://localhost:5000") &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 5

# Start NextJS frontend
echo -e "${GREEN}Starting NextJS frontend on port 3000...${NC}"
(cd frontend && npm run dev) &
FRONTEND_PID=$!

# Wait for both processes
echo -e "${GREEN}Both services are starting...${NC}"
echo -e "${YELLOW}Frontend: http://localhost:3000${NC}"
echo -e "${YELLOW}Backend API: http://localhost:5000${NC}"
echo -e "${YELLOW}API Documentation: http://localhost:5000/swagger${NC}"
echo -e "\n${GREEN}Press Ctrl+C to stop both services${NC}"

# Wait for any of the background processes to exit.
# This is a portable replacement for 'wait -n' which is not available on all systems.
while kill -0 $BACKEND_PID > /dev/null 2>&1 && kill -0 $FRONTEND_PID > /dev/null 2>&1; do
    sleep 1
done

cleanup 
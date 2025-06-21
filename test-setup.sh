#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Testing NextJS + .NET Core Setup${NC}"
echo -e "${YELLOW}================================${NC}"

# Test .NET Core build
echo -e "${YELLOW}Testing .NET Core build...${NC}"
cd backend/src/WebApi/WebApi
export PATH="/usr/local/share/dotnet:$PATH"
if dotnet build --verbosity quiet; then
    echo -e "${GREEN}✓ .NET Core build successful${NC}"
else
    echo -e "${RED}✗ .NET Core build failed${NC}"
    exit 1
fi

# Test NextJS build
echo -e "${YELLOW}Testing NextJS setup...${NC}"
cd ../../../../frontend
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✓ NextJS build successful${NC}"
else
    echo -e "${RED}✗ NextJS build failed${NC}"
    exit 1
fi

echo -e "\n${GREEN}All tests passed! Your setup is ready.${NC}"
echo -e "${YELLOW}Run './start-dev.sh' to start both services.${NC}" 
# TradeGuard

A modern trading platform with React frontend and Node.js backend, connected to AWS DynamoDB.

## Architecture

```
                   TRADEGUARD
                       │
          ┌────────────┴────────────┐
          │                         │
      React TS                 Node TS
          │                         │
      Axios ───────────────────────►│
                                    │
                                 Express
                                    │
                              ┌─────┴─────┐
                              │           │
                           Services   Repositories
                                          │
                                          ▼
                                     DynamoDB
```

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** build tool
- **Axios** for HTTP client
- **ESLint** for code quality

### Backend
- **Node.js** with TypeScript
- **Express.js** web framework
- **AWS SDK** for DynamoDB integration
- **DynamoDB** for data persistence

## Project Structure

```
tradegaurd/
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components (Dashboard, Portfolio, etc.)
│   │   ├── services/        # API client (axios)
│   │   ├── store/           # State management
│   │   ├── hooks/           # Custom React hooks
│   │   ├── types/           # TypeScript type definitions
│   │   ├── layouts/         # Layout components
│   │   ├── routes/          # Routing configuration
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
│
└── backend/
    ├── src/
    │   ├── config/
    │   │   └── dynamodb.ts  # DynamoDB client configuration
    │   ├── controllers/     # Route handlers
    │   ├── services/        # Business logic
    │   ├── repositories/    # Data access layer (DynamoDB)
    │   ├── routes/          # API routes
    │   ├── middleware/      # Express middleware
    │   ├── types/           # TypeScript type definitions
    │   ├── utils/           # Utility functions
    │   └── app.ts           # Express app setup
    ├── .env                 # Environment variables
    ├── tsconfig.json
    └── package.json
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- AWS Account (with DynamoDB credentials configured)

### Installation

**Frontend:**
```bash
cd frontend
npm install
npm install axios
```

**Backend:**
```bash
cd backend
npm install
npm install @aws-sdk/client-dynamodb @aws-sdk/lib-dynamodb
```

### Environment Setup

**Backend (.env):**
```
PORT=5000
AWS_REGION=ap-south-1
NODE_ENV=development
```

**Frontend (Vite):**
```
VITE_API_URL=http://localhost:5000/api
```

### Running the Project

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

The frontend will connect to the backend at `http://localhost:5000/api` via Axios.

## API Communication Flow

1. React components call API methods using Axios client
2. Axios sends HTTP requests to Express server (Port 5000)
3. Express routes requests to appropriate services/controllers
4. Services/Repositories handle business logic and database operations
5. DynamoDB stores and retrieves data via AWS SDK

Example:
```typescript
import api from '../services/api';

const response = await api.get('/health');
console.log(response.data);
```

## License

MIT

# AI representative

A full-stack application with a React frontend and Node.js backend for an AI representative.

## Project Structure

The repository is organized into two main folders:

```
ai-representative/
├── frontend/    # React.js application
└── backend/     # Node.js API server
```

## Backend

The backend is built with Node.js and provides API endpoints for the AI representative functionality.

### Technologies Used

- Node.js
- Express
- MongoDB
- OpenAI API

### Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on the provided example:
   ```
   OPENAI_API_KEY=your_openai_api_key
   MONGODB_URI=your_mongodb_connection_string
   PORT=8000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### API Endpoints

- **Lead Management**: `/api/leads`
- **Chat Functionality**: `/api/chat`

## Frontend

The frontend is built with React.js and provides a user interface for interacting with the AI chatbot.

### Technologies Used

- React.js
- Vite

### Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on the provided example:
   ```
   VITE_API_BASE_URL=http://localhost:8000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Running the Full Application

1. Start the backend server first:
   ```bash
   cd backend
   npm run dev
   ```

2. In a separate terminal, start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

3. Access the application in your browser at the URL provided by Vite (typically http://localhost:5173)

## Environment Variables

### Backend

| Variable | Description |
|----------|-------------|
| `OPENAI_API_KEY` | Your OpenAI API key for AI functionality |
| `MONGODB_URI` | MongoDB connection string |
| `PORT` | Port for the backend server (default: 8000) |

### Frontend

| Variable | Description |
|----------|-------------|
| `VITE_API_BASE_URL` | URL of the backend API (default: http://localhost:8000) |


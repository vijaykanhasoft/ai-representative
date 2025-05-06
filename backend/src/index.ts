import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import leadRoutes from './routes/leadRoutes';
import chatRoutes from './routes/chatRoutes';
import { API_ROUTES } from './utils/constants';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app: Express = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(API_ROUTES.LEADS, leadRoutes);
app.use(API_ROUTES.CHAT, chatRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
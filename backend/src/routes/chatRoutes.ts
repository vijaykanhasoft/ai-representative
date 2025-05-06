// Import express and Router from express
import express, { Router } from 'express';
// Import sendMessage controller to handle chat messaging
import { sendMessage } from '../controllers/chatController';

// Initialize router instance
const router: Router = express.Router();

// Define POST endpoint for chat messages
router.route('/').post(sendMessage);

// Export the router for application use
export default router; 
import express, { Router } from 'express'; // Import express essentials
import { getLeads } from '../controllers/leadController'; // Import lead controller

const router: Router = express.Router(); // Create router instance

router.route('/').get(getLeads); // Define GET route for leads

export default router; // Export the configured router
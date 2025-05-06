import { Request, Response } from "express";
import Lead from "../models/Lead";
import { ERROR_MESSAGES } from "../utils/constants";

// Controller: getLeads - Retrieves all lead records from the database.
export const getLeads = async (req: Request, res: Response): Promise<void> => {
  try {
    const leads = await Lead.find({}); // Retrieve all lead entries from DB
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};

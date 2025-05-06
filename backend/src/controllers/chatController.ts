import { Request, Response } from 'express';
import Lead from '../models/Lead';
import { ERROR_MESSAGES, LEAD_CATEGORIES } from '../utils/constants';
import { analyzeLead, generateResponse } from '../services/openaiService';

/**
 * Handle chat interactions and lead qualification
 */
export const sendMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, companyName, conversation } = req.body;

    // Analyze conversation to determine lead relevance
    const relevance = await analyzeLead(conversation);

    // Generate AI response
    const aiResponse = await generateResponse(conversation);

    // Save or update lead in database
    let responseWithLink = aiResponse;
    if (relevance === LEAD_CATEGORIES.HOT_LEAD || relevance === LEAD_CATEGORIES.BIG_POTENTIAL) {
      responseWithLink += '\n\nIt sounds like we might be able to help you! Would you like to schedule a meeting with our team? [Schedule a call](https://calendly.com/kanhasoft/intro-call)';
    }

    await Lead.findOneAndUpdate(
      { email },
      {
        email,
        companyName,
        relevance,
        conversation: [...conversation, { role: 'assistant', content: aiResponse }]
      },
      { upsert: true, new: true }
    );

    res.json({ response: responseWithLink, relevance });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};
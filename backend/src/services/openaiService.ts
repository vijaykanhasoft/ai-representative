import OpenAI from 'openai';
import { CHAT_ROLES, LEAD_CATEGORIES, OPENAI_MODELS } from '../utils/constants';

// Custom interface for conversation messages
export interface Conversation {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Initialize OpenAI client using the API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

/**
 * Analyze the conversation to determine the lead's relevance.
 * Filters out user messages, builds a tailored prompt, and extracts the lead category.
 * @param conversation - Array of conversation messages.
 * @returns The determined lead category.
 */


export const analyzeLead = async (conversation: Conversation[]): Promise<string> => {
  try {
    // Extract and combine user messages for analysis
    const userMessages = conversation
      .filter(msg => msg.role === CHAT_ROLES.USER)
      .map(msg => msg.content)
      .join('\n');

    // Build prompt with defined lead categories and conversation details
    const prompt = `
    Analyze this conversation between a sales rep and potential lead about software development services.
    Categorize the lead as:
      - ${LEAD_CATEGORIES.HOT_LEAD}: Established business, clear need, budget available, budget morethan 4k month or 40k project
      - ${LEAD_CATEGORIES.BIG_POTENTIAL}: Enterprise company (500+ employees), budget morethan 6k month or 60k project
      - ${LEAD_CATEGORIES.MEDIUM_POTENTIAL}: Side project, low budget, undecided, early stage, budget morethan 2k month or 20k project
      - ${LEAD_CATEGORIES.LOW_POTENTIAL}: Student, no budget, wants free help, or not serious
      
      Conversation:
      ${userMessages}
      
      Category:
    `;

    // Call OpenAI to classify the lead based on the prompt
    const completion = await openai.chat.completions.create({
      model: OPENAI_MODELS.GPT_3_5_TURBO,
      messages: [{ role: CHAT_ROLES.USER, content: prompt }]
    });

    // Trim response and default to medium potential if empty
    const category = completion.choices[0].message.content?.trim() || LEAD_CATEGORIES.MEDIUM_POTENTIAL;

    // Manually match and return the correct lead category
    if (category.includes(LEAD_CATEGORIES.HOT_LEAD)) return LEAD_CATEGORIES.HOT_LEAD;
    if (category.includes(LEAD_CATEGORIES.BIG_POTENTIAL)) return LEAD_CATEGORIES.BIG_POTENTIAL;
    if (category.includes(LEAD_CATEGORIES.LOW_POTENTIAL)) return LEAD_CATEGORIES.LOW_POTENTIAL;
    return LEAD_CATEGORIES.MEDIUM_POTENTIAL;
  } catch (error) {
    console.error('Error analyzing lead:', error);
    // Fall back to medium potential in case of errors
    return LEAD_CATEGORIES.MEDIUM_POTENTIAL;
  }
};

/**
 * Generate an AI response based on the conversation history.
 * Merges a system directive with the conversation to ensure a helpful and professional reply.
 * @param conversation - Array of conversation messages.
 * @returns The AI-generated response.
 */
export const generateResponse = async (conversation: Conversation[]): Promise<string> => {
  try {
    // Prepend system message for guidance, then spread the conversation history
    const completion = await openai.chat.completions.create({
      model: OPENAI_MODELS.GPT_3_5_TURBO,
      messages: [
        {
          role: CHAT_ROLES.SYSTEM,
          content: 'You are a helpful assistant for Kanhasoft, a software development company. Be friendly and professional.'
        },
        ...conversation
      ]
    });
    
    // Return the response or a fallback message if empty
    return completion.choices[0].message.content || "I apologize, but I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error('Error generating response:', error);
    return "I apologize, but I'm having trouble connecting to my knowledge base. Please try again later.";
  }
};
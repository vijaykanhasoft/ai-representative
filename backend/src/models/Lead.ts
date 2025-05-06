import mongoose, { Schema, Document } from 'mongoose';
import { DB_COLLECTIONS, CHAT_ROLES, LEAD_CATEGORIES } from '../utils/constants';

// Define the conversation message interface
export interface IConversationMessage {
  role: typeof CHAT_ROLES.USER | typeof CHAT_ROLES.ASSISTANT;
  content: string;
}

// Define the Lead document interface
export interface ILead extends Document {
  email: string;
  companyName: string;
  relevance: string;
  conversation: IConversationMessage[];
  createdAt: Date;
  updatedAt: Date;
}

// Create the Lead schema
const LeadSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    companyName: { type: String, required: true },
    relevance: { 
      type: String, 
      required: true,
      enum: Object.values(LEAD_CATEGORIES),
      default: LEAD_CATEGORIES.MEDIUM_POTENTIAL
    },
    conversation: { 
      type: [{
        role: { 
          type: String, 
          enum: [CHAT_ROLES.USER, CHAT_ROLES.ASSISTANT], 
          required: true 
        },
        content: { type: String, required: true }
      }], 
      required: true,
      default: []
    }
  },
  { timestamps: true }
);

export default mongoose.model<ILead>(DB_COLLECTIONS.LEADS, LeadSchema); 
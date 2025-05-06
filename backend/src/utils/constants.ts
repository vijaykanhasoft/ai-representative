export const API_ROUTES = {
  CHAT: '/api/chat',
  LEADS: '/api/leads'
};

export const DB_COLLECTIONS = {
  LEADS: 'leads',
  CHATS: 'chats'
};

export enum LEAD_CATEGORIES {
  HOT_LEAD = 'hot_lead',
  BIG_POTENTIAL = 'big_potential',
  MEDIUM_POTENTIAL = 'medium_potential',
  LOW_POTENTIAL = 'low_potential'
}

export enum CHAT_ROLES {
  USER = 'user',
  ASSISTANT = 'assistant',
  SYSTEM = 'system'
}

export enum OPENAI_MODELS {
  GPT_3_5_TURBO = 'gpt-3.5-turbo',
  GPT_4 = 'gpt-4'
}

export const ERROR_MESSAGES = {
  INTERNAL_SERVER_ERROR: 'Internal server error',
  NOT_FOUND: 'Resource not found',
  INVALID_REQUEST: 'Invalid request'
}; 
export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface LeadInfo {
  email: string;
  companyName: string;
  relevance?: string;
}

export interface Lead {
    _id: string;
    email: string;
    companyName: string;
    relevance: string;
    createdAt: string;
    conversation?: Message[];
  }

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}
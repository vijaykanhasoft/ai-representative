import axios from "axios";

// Base configuration for axios
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Types for our API endpoints
interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatResponse {
  response: string;
  relevance: string;
}

interface Lead {
  _id: string;
  email: string;
  companyName: string;
  relevance: string;
  createdAt: string;
}
// API client with typed methods
const apiClient = {
  // Get all leads
  getLeads: async (): Promise<Lead[]> => {
    try {
      const response = await axiosInstance.get("/api/leads");
      return response.data;
    } catch (error) {
      console.error("Error fetching leads:", error);
      throw error;
    }
  },

  // Send chat message and get response
  sendChatMessage: async (
    email: string,
    companyName: string,
    conversation: Message[]
  ): Promise<ChatResponse> => {
    try {
      const response = await axiosInstance.post("/api/chat", {
        email,
        companyName,
        conversation,
      });
      return response.data;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  },
};

export default apiClient;

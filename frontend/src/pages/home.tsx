import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import apiClient from '../services/apiClient';
import MainLayout from '../components/layout/MainLayout';
import LeadForm from '../components/client/chat/LeadForm';
import MessageInput from '../components/client/chat/MessageInput';
import MessageList from '../components/client/chat/MessageList';
import { Message, LeadInfo } from '../utils/types';

const Home: React.FC = () => {
  // State management
  const [messages, setMessages] = useState<Message[]>([]);
  const [leadInfo, setLeadInfo] = useState<LeadInfo>({ email: '', companyName: '' });
  const [relevance, setRelevance] = useState<string>('');
  const [showLeadForm, setShowLeadForm] = useState(true);

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: 'Hello! Welcome to KanhaSoft. I\'m here to help you with your software development needs. Could you tell me a bit about your company and what you\'re looking for?'
      }]);
    }
  }, [messages]);

  // Handle sending messages to API
  const handleSendMessage = async (message: string) => {
    const userMessage = { role: 'user' as const, content: message };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    try {
      const response = await apiClient.sendChatMessage(
        leadInfo.email,
        leadInfo.companyName,
        newMessages
      );

      setMessages([...newMessages, { role: 'assistant', content: response.response }]);
      setRelevance(response.relevance);
      setShowLeadForm(false);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages([...newMessages, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
    }
  };

  // Handle lead form submission
  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (leadInfo.email && leadInfo.companyName) {
      setShowLeadForm(false);
    }
  };

  return (
    <MainLayout userEmail={leadInfo.email} companyName={leadInfo.companyName}>
      <Box sx={{ height: 'calc(100vh - 140px)', display: 'flex', flexDirection: 'column' }}>
        {/* Chat messages */}
        <MessageList messages={messages} userEmail={leadInfo.email} />

        {/* Lead form or message input based on state */}
        {showLeadForm ? (
          <LeadForm
            leadInfo={leadInfo}
            setLeadInfo={setLeadInfo}
            onSubmit={handleLeadSubmit}
          />
        ) : (
          <MessageInput onSendMessage={handleSendMessage} />
        )}
      </Box>
    </MainLayout>
  );
};

export default Home;
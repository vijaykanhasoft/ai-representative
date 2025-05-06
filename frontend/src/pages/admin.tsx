import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Container,
  IconButton,
  Avatar,
} from "@mui/material";
import apiClient from "../services/apiClient";
import LeadsTable from "../components/admin/LeadsTable";
import FilterForm from "../components/admin/FilterForm";
import { Lead } from "../utils/types";
import MainLayout from "../components/layout/MainLayout";

const Admin: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const data = await apiClient.getLeads();
        setLeads(data as Lead[]);
      } catch (error) {
        console.error("Error fetching leads:", error);
      }
    };

    fetchLeads();
  }, []);

  const filteredLeads =
    filter === "all"
      ? leads
      : leads.filter((lead) => lead.relevance === filter);

  return (
    <MainLayout
      userEmail="admin@kanhasoft.com"
      companyName="Admin"
      menuItems={[{ label: "Leads", path: "/admin" }]}
      rightContent={
        <IconButton sx={{ ml: 2 }}>
          <Avatar
            sx={{
              bgcolor: "#00182e",
              width: 32,
              height: 32,
              fontSize: "0.875rem",
            }}
          >
            A
          </Avatar>
        </IconButton>
      }
    >
      <Box
        sx={{
          height: "calc(100vh - 140px)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg" sx={{ height: '100%' }}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(10px)",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              mb: 1
            }}>
              <Typography
                variant="h5"
                sx={{
                  color: "#00182e",
                  fontWeight: 500,
                  fontSize: "1.5rem",
                }}
              >
                Leads Dashboard
              </Typography>

              <FilterForm filter={filter} setFilter={setFilter} />
            </Box>
            
            <Box sx={{ 
              flex: 1, 
              minHeight: 0,
              overflow: 'hidden'
            }}>
              <LeadsTable leads={filteredLeads} />
            </Box>
          </Paper>
        </Container>
      </Box>
    </MainLayout>
  );
};

export default Admin;

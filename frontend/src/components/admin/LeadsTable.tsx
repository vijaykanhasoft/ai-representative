import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    Box,
    Typography
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Lead } from '../../utils/types';
import { LEAD_CATEGORIES } from '../../utils/constants';
interface LeadsTableProps {
    leads: Lead[];
}

const LeadsTable: React.FC<LeadsTableProps> = ({ leads }) => {
    const getChipColor = (relevance: string) => {
        switch (relevance) {
            case LEAD_CATEGORIES.BIG_POTENTIAL: return 'success';
            case LEAD_CATEGORIES.HOT_LEAD: return 'warning';
            case LEAD_CATEGORIES.MEDIUM_POTENTIAL: return 'info';
            case LEAD_CATEGORIES.LOW_POTENTIAL: return 'error';
            default: return 'default';
        }
    };

    return (
        <TableContainer 
            component={Paper} 
            elevation={0}
            sx={{
                backgroundColor: 'transparent',
                maxHeight: 'calc(100vh - 240px)',
                overflow: 'auto',
                '& .MuiTableCell-root': {
                    borderColor: 'rgba(0, 24, 46, 0.1)',
                    py: 1,
                    fontSize: '0.875rem'
                }
            }}
        >
            <Table stickyHeader sx={{ minWidth: 650 }} aria-label="leads table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ 
                            fontWeight: 600,
                            color: '#00182e',
                            fontSize: '0.875rem',
                            py: 1.5,
                            backgroundColor: 'rgba(255, 255, 255, 0.85)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            Email
                        </TableCell>
                        <TableCell sx={{ 
                            fontWeight: 600,
                            color: '#00182e',
                            fontSize: '0.875rem',
                            py: 1.5,
                            backgroundColor: 'rgba(255, 255, 255, 0.85)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            Company
                        </TableCell>
                        <TableCell sx={{ 
                            fontWeight: 600,
                            color: '#00182e',
                            fontSize: '0.875rem',
                            py: 1.5,
                            backgroundColor: 'rgba(255, 255, 255, 0.85)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            Relevance
                        </TableCell>
                        <TableCell sx={{ 
                            fontWeight: 600,
                            color: '#00182e',
                            fontSize: '0.875rem',
                            py: 1.5,
                            backgroundColor: 'rgba(255, 255, 255, 0.85)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            Created At
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {leads.length > 0 ? (
                        leads.map((lead) => (
                            <TableRow
                                key={lead._id}
                                sx={{ 
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 24, 46, 0.02)'
                                    }
                                }}
                            >
                                <TableCell>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <PersonIcon sx={{ mr: 1, color: '#00182e', fontSize: '1rem' }} />
                                        <Typography variant="body2" sx={{ color: '#00182e' }}>
                                            {lead.email}
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <BusinessIcon sx={{ mr: 1, color: '#00182e', fontSize: '1rem' }} />
                                        <Typography variant="body2" sx={{ color: '#00182e' }}>
                                            {lead.companyName}
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        label={lead.relevance}
                                        color={getChipColor(lead.relevance)}
                                        size="small"
                                        sx={{ 
                                            height: 24,
                                            '& .MuiChip-label': {
                                                px: 1,
                                                fontSize: '0.75rem',
                                                fontWeight: 500
                                            }
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <CalendarTodayIcon sx={{ mr: 1, color: '#00182e', fontSize: '0.875rem' }} />
                                        <Typography variant="body2" sx={{ color: '#00182e' }}>
                                            {new Date(lead.createdAt).toLocaleString()}
                                        </Typography>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={4} align="center">
                                <Typography variant="body2" sx={{ py: 3, color: '#00182e' }}>
                                    No leads found
                                </Typography>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default LeadsTable; 
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

interface FilterFormProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ filter, setFilter }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <FormControl 
        size="small" 
        sx={{ 
          minWidth: 200,
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'transparent',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: 'rgba(0, 24, 46, 0.05)',
            },
            '&.Mui-focused': {
              backgroundColor: 'rgba(0, 24, 46, 0.08)',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(0, 24, 46, 0.2)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(0, 24, 46, 0.3)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#00182e',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#00182e',
            fontSize: '0.875rem',
            fontWeight: 500,
            '&.Mui-focused': {
              color: '#00182e',
            },
          },
          '& .MuiSelect-select': {
            fontSize: '0.875rem',
            color: '#00182e',
            py: 0.5,
          },
          '& .MuiPaper-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 24, 46, 0.1)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            '& .MuiList-root': {
              py: 0.5,
            },
          },
          '& .MuiMenuItem-root': {
            fontSize: '0.875rem',
            color: '#00182e',
            py: 0.5,
            '&:hover': {
              backgroundColor: 'rgba(0, 24, 46, 0.05)',
            },
            '&.Mui-selected': {
              backgroundColor: 'rgba(0, 24, 46, 0.08)',
              '&:hover': {
                backgroundColor: 'rgba(0, 24, 46, 0.12)',
              },
            },
          },
        }}
      >
        <InputLabel>Filter by Relevance</InputLabel>
        <Select
          value={filter}
          label="Filter by Relevance"
          onChange={(e) => setFilter(e.target.value as string)}
        >
          <MenuItem value="all">All Leads</MenuItem>
          <MenuItem value="very big potential customer">Very Big Potential</MenuItem>
          <MenuItem value="hot lead">Hot Leads</MenuItem>
          <MenuItem value="weak lead">Weak Leads</MenuItem>
          <MenuItem value="not relevant">Not Relevant</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterForm; 
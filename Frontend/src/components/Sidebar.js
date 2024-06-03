// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#1e1e2f',
          color: '#fff',
        },
      }}
    >
      <Typography variant="h6" sx={{ m: 2 }}>
        Dashboard
      </Typography>
      <Divider />
      <List>
        {['Dashboard', 'Tables', 'Billing', 'Profile'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon sx={{ color: '#fff' }}>
              {index === 0 && <DashboardIcon />}
              {index === 1 && <TableChartIcon />}
              {index === 2 && <ReceiptIcon />}
              {index === 3 && <PersonIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

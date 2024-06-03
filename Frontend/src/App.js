// src/App.js
import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, backgroundColor: '#f5f5f5', p: 3 }}>
        <Header />
        <Dashboard />
      </Box>
    </Box>
  );
};

export default App;

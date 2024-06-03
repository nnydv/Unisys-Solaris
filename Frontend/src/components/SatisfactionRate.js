// src/components/SatisfactionRate.js
import React from 'react';
import { Paper, Typography, CircularProgress } from '@mui/material';

const SatisfactionRate = () => {
  return (
    <Paper>
      <Typography variant="h6">Satisfaction Rate</Typography>
      <CircularProgress variant="determinate" value={95} />
      <Typography variant="h4">95%</Typography>
    </Paper>
  );
};

export default SatisfactionRate;

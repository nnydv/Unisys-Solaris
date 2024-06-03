// src/components/Projects.js
import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const projects = [
  { name: 'Chakra Soft UI Version', completion: '60%' },
  { name: 'Add Progress Track', completion: '10%' },
];

const Projects = () => {
  return (
    <Paper>
      <Typography variant="h6">Projects</Typography>
      <List>
        {projects.map((project, index) => (
          <ListItem key={index}>
            <ListItemText primary={project.name} secondary={`Completion: ${project.completion}`} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Projects;

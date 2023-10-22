import React from 'react';
import { Typography } from '@mui/material';

function MainTitle() {
  return (
    <Typography variant="h3" align="center" sx={titleStyle}>
      The Best Competition Ever
    </Typography>
  );
}

const titleStyle = {
  margin: '2rem',
  color: '#3c4c5c',
  fontWeight: 'bold',
};

export default MainTitle;

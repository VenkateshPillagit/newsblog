import { Box, Typography } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Box sx={{
      bottom: 0,
      position: 'fixed',
      textAlign: 'end',
      width: '100%',
      height: '2rem',
      backgroundColor: '#fff',
    }}
    >
      <Typography>
        @ YSI News
      </Typography>
    </Box>
  );
}

export default Footer;

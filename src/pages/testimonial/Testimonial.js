import React from 'react';
import { Box, Typography } from '@mui/material';

const Testimonial = () => (
  <Box
    sx={{
      backgroundColor: 'black',
      color: 'white',
      padding: '5vw',
      textAlign: 'center',
    }}
  >
    <Typography
      variant="h4"
      component="p"
      gutterBottom
      margin="auto"
      maxWidth="600px"
      pt="20px"
      pb="50px"
      textAlign="justify"
      sx={{
        fontFamily: "var(--font-family-cardo)",
        fontOpticalSizing: 'auto',
        fontWeight: '400', // Adjusted to a standard weight
        fontStyle: 'normal',
      }}
    >
      “Études has saved us thousands of hours of work and has unlocked insights we never thought possible.”
    </Typography>
    <Typography variant="h6" component="p" sx={{ mt: '2vw' }}>
      Annie Steiner
    </Typography>
    <Typography variant="subtitle1" component="p">
      CEO, Greenprint
    </Typography>
  </Box>
);

export default Testimonial;

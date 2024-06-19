import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Subscribe = () => (
  <>
    <Box
      sx={{
        backgroundColor: 'var(--info-color)',
        color: 'white',
        padding: '5vw',
        textAlign: 'center',
      }}
    >
      <Box
        minWidth='300px'
        sx={{
          backgroundColor: 'white',
          color: 'black',
          padding: '3vw',
          textAlign: 'center',
          margin: 'auto',
          borderRadius: '20px',
          maxWidth: '700px',
        }}
      >
        <Typography variant="h4" gutterBottom style={{ fontFamily: "var(--font-family-cardo)", paddingTop:"20px" }}>
          Join 900+ subscribers
        </Typography>
        <Typography variant="subtitle2" component="p" gutterBottom>
          Stay in the loop with everything you need to know
        </Typography>
        <Button variant="contained" size='large' style={{ marginTop: '30px',marginBottom: '20px', backgroundColor:"var(--black-color)" }}>Sign in</Button>
      </Box>
    </Box>
  </>
);

export default Subscribe;

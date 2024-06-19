import { Box, CardMedia } from '@mui/material';
import React from 'react';
import cb1 from '../../Assets/img/chatbot/cb1.jpg';
import cb2 from '../../Assets/img/chatbot/cb2.jpg';
import cb3 from '../../Assets/img/chatbot/cb3.png';

function Housekeeping() {
  return (
   <>
   <Box  sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            bgcolor: 'var(--info-color)',
            pt: 4,
            pb: 4,
        }}>
   <CardMedia
            component="img"
            image={cb3}
            alt="Hero Image"
            sx={{
                width: '300px',
                maxHeight: '100%',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                mt: 4,
            }}
        />
        <CardMedia
            component="img"
            image={cb2}
            alt="Hero Image"
            sx={{
                width: '300px',
                maxHeight: '100%',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                mt: 4,
            }}
        />
        <CardMedia
            component="img"
            image={cb1}
            alt="Hero Image"
            sx={{
                width: '300px',
                maxHeight: '100%',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                mt: 4,
            }}
        />
   </Box>
   </>
  )
}

export default Housekeeping

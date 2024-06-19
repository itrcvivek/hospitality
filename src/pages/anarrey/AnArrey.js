import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const AnArrey = () => (
  
    <Box sx={{ background: "var(--info-color)", padding: 6 }}>
    <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
      <StarIcon fontSize="large" color="primary" />
      <Typography variant="h4" component="h2" align="center" gutterBottom style={{ fontFamily: "var(--font-family-cardo)" }}>
        An array of resources
      </Typography>
      <Typography variant="subtitle1" align="center" paragraph>
        Our comprehensive suite of professional services caters to a diverse clientele,<br /> ranging from homeowners to commercial developers.
      </Typography>
    </Box>
    
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box sx={{ padding: '10vw' }}>
          <StarIcon fontSize="large" color="primary" />
          <Typography variant="h5" component="div" gutterBottom>
            Pool Side
          </Typography>
          <Typography variant="body1">
            <ul>          
              <li>User-Friendly Interaction.</li>
              <li>Personalization and Recommendations.</li>
              <li>Menu Navigation.</li>

              {/* <li>Collaborate with fellow architects.</li>
              <li>Showcase your projects.</li>
              <li>Experience the world of architecture.</li> */}
            </ul>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ padding: '2vw' }}>
          <img
          // src={require('../../Assets/img/tourist-and-building.webp')}
            src={require('../../Assets/img/chatbot/inpoolimg.png')}
            alt="Tourist and building"
            style={{ width: '100%', borderRadius: '20px' }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ padding: '2vw' }}>
          <img
            // src={require('../../Assets/img/windows.webp')}
            src={require('../../Assets/img/chatbot/inloungeimg.png')}
            alt="Windows"
            style={{ width: '100%', borderRadius: '20px' }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ padding: '10vw' }}>
          <StarIcon fontSize="large" color="primary" />
          <Typography variant="h5" component="div" gutterBottom>
          Lobby Lounge
          </Typography>
          <Typography variant="body1">
            <ul>
              <li>Integration with Room Preferences.</li>
              <li>Event and Theme Coordination.</li>
              <li>Integration with External Services.</li>
              {/* <li>A world of thought-provoking articles.</li>
              <li>Case studies that celebrate architecture.</li>
              <li>Exclusive access to design insights.</li> */}
            </ul>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
  
);

export default AnArrey;

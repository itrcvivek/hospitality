import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const services = [
  { title: 'Renovation and restoration', description: 'Experience the fusion of imagination and expertise with Études Architectural Solutions.' },
  { title: 'Continuous Support', description: 'Experience the fusion of imagination and expertise with Études Architectural Solutions.' },
  { title: 'App Access', description: 'Experience the fusion of imagination and expertise with Études Architectural Solutions.' },
  { title: 'Consulting', description: 'Experience the fusion of imagination and expertise with Études Architectural Solutions.' },
  { title: 'Project Management', description: 'Experience the fusion of imagination and expertise with Études Architectural Solutions.' },
  { title: 'Architectural Solutions', description: 'Experience the fusion of imagination and expertise with Études Architectural Solutions.' },
];

const Personfor = () => (
  <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
    <Container>
      <Box align='center'>
        <AcUnitIcon fontSize="large" color="gray" />
        <Typography variant="h4" component="h2" align="center" gutterBottom style={{ fontFamily: "var(--font-family-cardo)" }}>
          A passion for creating spaces
        </Typography>
        <Typography variant="subtitle1" align="center" paragraph maxWidth='700px'>
          Our comprehensive suite of professional services caters to a diverse clientele, ranging from homeowners to commercial developers.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ textAlign: 'left', p: 2, bgcolor: 'background.default' }}>
              <AcUnitIcon fontSize="large" color="gray" />
              <Typography variant="h6" component="h3" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body1">
                {service.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Personfor;

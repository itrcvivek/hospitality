import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import Logo from '../../Assets/img/logo.png';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'var(--info_color)', color: 'white', mt: 4, pt: 4 }}>
      <Container sx={{ mt: 5, mb: 5, color: 'GrayText' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3} lg={5} xl={5} style={{ whiteSpace: "nowrap", display: "flex" }}><img src={Logo} alt="LOGO" width={40} height={40} />
            <Typography variant="h6" component="div" gutterBottom style={{ padding: "5px 0 0 15px " }}>
              Arcadia Hospitality
            </Typography>
          </Grid>
          <Grid item xs={6} md={2} lg={2} xl={2}>
            <Typography variant="h6" component="div" gutterBottom>
              About
            </Typography>
            {['Team', 'History', 'Careers'].map((text) =>(
              <Typography key={text} variant="body2" gutterBottom>
                <Link href="#!" color="inherit" underline="hover">
                  {text}
                </Link>
              </Typography>
            ))}
          </Grid>
          <Grid item xs={6} md={3} lg={3} xl={3}>
            <Typography variant="h6" component="div" gutterBottom>
              Privacy
            </Typography>
            {['Privacy Policy', 'Terms and Conditions', 'Contact Us'].map((text) => (
              <Typography key={text} variant="body2" gutterBottom>
                <Link href="#!" color="inherit" underline="hover">
                  {text}
                </Link>
              </Typography>
            ))}
          </Grid>
          <Grid item xs={6} md={4} lg={2} xl={2}>
  <Typography variant="h6" component="div" gutterBottom>
    Social
  </Typography>
  {[
    { text: 'Facebook', link: 'https://www.facebook.com/yourpage' },
    { text: 'Instagram', link: 'https://www.instagram.com/yourpage' },
    { text: 'Twitter/X', link: 'https://www.twitter.com/yourpage' } 
  ].map((item) => (
    <Typography key={item.text} variant="body2" gutterBottom>
      <Link href={item.link} target="_blank" rel="noopener noreferrer" color="inherit" underline="hover">
        {item.text}
      </Link>
    </Typography>
  ))}
</Grid>

        </Grid>
      </Container>
      <Box sx={{ textAlign: 'center', py: 2, bgcolor: 'rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="body2">
          © 2024 Copyright:&nbsp;
          <Link href="/" color="inherit" underline="hover">
            Arcadia Hospitality
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

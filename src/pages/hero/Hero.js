import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Container, CardMedia } from "@mui/material";
import Heroimg from "../../Assets/img/building-exterior.webp";

const HeroSection = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      bgcolor: "var(--info-color)",
      pt: 4,
      pb: 4,
    }}
  >
    <Container maxWidth="sm md">
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        style={{ fontFamily: "var(--font-family-cardo)" }}
      >
        Empowering Hospitality professionals<br/> with state of the art AI
        assistance.
      </Typography>
      <Link to="/OurServices" ><Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: 'var(--black-color)', width: { xs: '100%', sm: 'auto' } }}
        >
          Our Services
        </Button></Link>
    </Container>
    <CardMedia
      component="img"
      image={Heroimg}
      alt="Hero Image"
      sx={{
        width: "80vw",
        maxHeight: "500px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        mt: 4,
      }}
    />
    <Container maxWidth="sm" style={{ margin: "50px" }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        style={{ fontFamily: "var(--font-family-cardo)" }}
      >
        Streamline operations and enhance same to redefine excellence to ensure
        ultimate guest satisfaction.
      </Typography>
      <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: { xs: 'center', sm: 'space-between' },
        alignItems: 'center',
        mt: 4,
        gap: 2,
      }}
    >
      <Link to="/Housekeeping" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: 'var(--black-color)', width: { xs: '100%', sm: 'auto' } }}
        >
          Housekeeping
        </Button>
      </Link>

      <Button
        variant="contained"
        size="large"
        sx={{ backgroundColor: 'var(--black-color)', width: { xs: '100%', sm: 'auto' } }}
      >
        Engineering
      </Button>

      <Button
        variant="contained"
        size="large"
        sx={{ backgroundColor: 'var(--black-color)', width: { xs: '100%', sm: 'auto' } }}
      >
        Food and Beverage
      </Button>
    </Box>

    </Container>
  </Box>
);

export default HeroSection;

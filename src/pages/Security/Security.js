import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Security = () => (
  <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",bgcolor:"var(--info-color)",pt:4,pb:4}}>
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" gutterBottom style={{fontFamily:"var(--font-family-cardo)"}}>Security</Typography>
      <Typography variant="h4" component="h1" gutterBottom style={{fontFamily:"var(--font-family-cardo)", color:"var(--gray-color)",marginBottom:"70px"}}>Privacy of the guest and hotel is our highest priority</Typography>
    </Container>
    <Box sx={{backgroundColor:"var(--info-color)",color:"white",textAlign:"center"}}>
      <Box minWidth="300px" sx={{backgroundColor:"white",color:"black",padding:"3vw",textAlign:"center",margin:"auto",border:"dashed 7px", borderColor: 'var(--gray-color)', borderRadius:"20px",maxWidth:"700px"}}>
        <Typography variant="h4" gutterBottom style={{fontFamily:"var(--font-family-cardo)",paddingTop:"20px", color:"var(--blue-color)"}}>2-Step Verification</Typography>
      </Box>
    </Box>
    <Container maxWidth="sm" style={{margin:"50px"}}>
      <Typography variant="h3" component="h1" gutterBottom style={{fontFamily:"var(--font-family-cardo)"}}>Finest Service</Typography>
      <Typography variant="h4" component="h1" gutterBottom style={{fontFamily:"var(--font-family-cardo)", color:"var(--gray-color)"}}>Our AI has been trained to provide luxury Forbe standard service.</Typography>
    </Container>
    <Box>
      <Typography variant="h4" component="h1" mt={5} gutterBottom style={{fontFamily:"var(--font-family-cardo)"}}>Concierge</Typography>
      <Typography variant="body1" align="left">
        <ul>
          <li>Operation cars</li>
          <li>Reservation</li>
          <li>Local recommendations</li>
        </ul>
      </Typography>
    </Box>
  </Box>
);

export default Security;

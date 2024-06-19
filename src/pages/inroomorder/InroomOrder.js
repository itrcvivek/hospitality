import React from "react";
import { CardMedia, Box, Typography } from "@mui/material";

// Import your images here
import Heroimg1 from "../../Assets/img/building-exterior.webp";
// import Heroimg2 from "../../Assets/img/building-exterior2.webp";
import Inpool from "../../Assets/img/chatbot/inpoolimg.png";
import Inlounge from "../../Assets/img/chatbot/inloungeimg.png";
// import Heroimg5 from "../../Assets/img/building-exterior5.webp";

function InroomOrder() {
  const sections = [
    { title: "In room dining order", image: Heroimg1 },
    { title: "Up selling", image: Heroimg1 },
    { title: "Pool Side", image: Inpool },
    { title: "Lobby Lounge", image: Inlounge },
    { title: "Admin Control", image: Heroimg1 },
  ];

  return (
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
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <Typography
            variant="h3"
            
            sx={{ fontFamily: "var(--font-family-cardo)", marginTop: "100px" }}
          >
            {section.title}
          </Typography>
          <CardMedia
            component="img"
            image={section.image}
            alt="Hero Image"
            sx={{
              width: "80vw",
              maxHeight: "100%",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              mt: 4,
            }}
          />
         
        </React.Fragment>
      ))}
    </Box>
  );
}

export default InroomOrder;

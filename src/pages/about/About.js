import React from 'react'
import { Box, Typography } from '@mui/material';

function About() {
  return (
    <>
      <Box minWidth='300px' sx={{
          color: 'black',
          padding: '3vw',
          margin: 'auto',
          maxWidth: '600px'
        }} gutterBottom>
          <Typography variant='h3' component="p" align='center' style={{
            fontFamily: 'var(--font-family-cardo)',
            marginBottom: "40px", 
          }}>About</Typography>
          <Typography variant='body1' align='justify' gutterBottom style={{ fontFamily: "var(--font-family-Inter)" }} >This is an example of a page. Unlike posts, which are displayed on your blog’s front page in the order they’re published, pages are better suited for more timeless content that you want to be easily accessible, like your About or Contact information. Click the Edit link to make changes to this page or add another page.</Typography>
      </Box> 
    </>
  )
}

export default About;

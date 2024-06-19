import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, Container } from '@mui/material';
import { CheckCircle, Person, Email, Phone, Note } from '@mui/icons-material';

const ContactForm = () => {
  const [name, setName] = useState("")
  const nameFun=(event)=>{
    console.log(event.target.value)
setName(event.target.value)
  }
  return (
    <>
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        // backgroundColor: '#f5f5f5',
        padding: '1rem',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              <span style={{ fontSize: '40px', color: '#6c757d' }}>Get in contact {name}</span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Get in contact with one of the members of our team to understand how we support you.
            </Typography>
            <List>
              {['Save time', 'Spend less', 'Get organized'].map((text, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: '#6c757d' }} />
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="h6">{text}</Typography>} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <form noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    margin="normal"
                    required
                    onChange={nameFun}
                    InputProps={{
                      startAdornment: <Person sx={{ mr: 1, color: 'grey' }} />,
                    }}
                    InputLabelProps={{
                      style: { color: 'grey' },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'grey',
                        },
                        '&:hover fieldset': {
                          borderColor: 'grey',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'grey',
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: 'grey',
                      },
                      '& .MuiFormLabel-root': {
                        color: 'grey',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    margin="normal"
                    required
                    InputProps={{
                      startAdornment: <Person sx={{ mr: 1, color: 'grey' }} />,
                    }}
                    InputLabelProps={{
                      style: { color: 'grey' },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'grey',
                        },
                        '&:hover fieldset': {
                          borderColor: 'grey',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'grey',
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: 'grey',
                      },
                      '& .MuiFormLabel-root': {
                        color: 'grey',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    type="email"
                    required
                    InputProps={{
                      startAdornment: <Email sx={{ mr: 1, color: 'grey' }} />,
                    }}
                    InputLabelProps={{
                      style: { color: 'grey' },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'grey',
                        },
                        '&:hover fieldset': {
                          borderColor: 'grey',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'grey',
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: 'grey',
                      },
                      '& .MuiFormLabel-root': {
                        color: 'grey',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone number"
                    margin="normal"
                    type="tel"
                    InputProps={{
                      startAdornment: <Phone sx={{ mr: 1, color: 'grey' }} />,
                    }}
                    InputLabelProps={{
                      style: { color: 'grey' },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'grey',
                        },
                        '&:hover fieldset': {
                          borderColor: 'grey',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'grey',
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: 'grey',
                      },
                      '& .MuiFormLabel-root': {
                        color: 'grey',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Notes"
                    margin="normal"
                    multiline
                    rows={4}
                    InputProps={{
                      startAdornment: <Note sx={{ mr: 1, alignSelf: 'flex-start', color: 'grey' }} />,
                    }}
                    InputLabelProps={{
                      style: { color: 'grey' },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'grey',
                        },
                        '&:hover fieldset': {
                          borderColor: 'grey',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'grey',
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: 'grey',
                      },
                      '& .MuiFormLabel-root': {
                        color: 'grey',
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                style={{
                  marginTop: '20px',
                  backgroundColor: 'var(--black-color)',
                  border: '1px solid #626262',
                  borderRadius: '9px',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  padding: '11px 38px',
                  textDecoration: 'none',
                  display: 'flex',
                  textTransform: 'none',
                  color: 'white',
                }}
              > 
                 Get in Touch
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
      
    </Container>
    {/* <Footer /> */}
    </>
  );
};

export default ContactForm;

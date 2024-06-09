import React, { useState } from 'react';
import { Container, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const AboutPage = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to our bookstore. We offer a wide range of books across various genres. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Read More
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Error"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            We are experiencing a technical issue, we are very sorry.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AboutPage;

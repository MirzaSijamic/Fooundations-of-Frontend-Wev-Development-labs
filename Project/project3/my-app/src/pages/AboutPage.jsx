import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        Welcome to our bookstore. We offer a wide range of books across various genres.
      </Typography>
    </Container>
  );
};

export default AboutPage;

import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Submit the form
      console.log({ name, email, message });
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Message"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          error={!!errors.message}
          helperText={errors.message}
        />
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default ContactPage;

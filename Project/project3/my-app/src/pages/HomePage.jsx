import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Card, CardContent, CardMedia, Container, Button } from '@mui/material';

const books = [
  { title: 'Book 1', description: 'This is book 1', image: 'https://via.placeholder.com/150' },
  { title: 'Book 2', description: 'This is book 2', image: 'https://via.placeholder.com/150' },
  { title: 'Book 3', description: 'This is book 3', image: 'https://via.placeholder.com/150' },
];

const HomePage = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Bookstore</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={4} style={{ marginTop: '20px' }}>
          {books.map((book, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt={book.title}
                  height="140"
                  image={book.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {book.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;

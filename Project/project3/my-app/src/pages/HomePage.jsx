import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Card, CardContent, CardMedia, Container, Button } from '@mui/material';

const books = [
  { title: 'Book 1', description: 'Book 1: Miraculus', image: 'https://m.media-amazon.com/images/M/MV5BMGRjNDJjMTUtZmJjNy00ZDNhLWFhNDEtYjc0MDQwMTRlMmY4XkEyXkFqcGdeQXVyMTYwODE3NTA3._V1_FMjpg_UX1000_.jpg' },
  { title: 'Book 2', description: 'Book 2: JJK', image: 'https://m.media-amazon.com/images/I/81TmHlRleJL._AC_UF1000,1000_QL80_.jpg' },
  { title: 'Book 3', description: 'Book 3: Yu-Gi-Oh', image: 'https://m.media-amazon.com/images/I/81K7taBQxiL._AC_UF1000,1000_QL80_.jpg' },
  { title: 'Book 4', description: 'Book 1: Miraculus 2', image: 'https://m.media-amazon.com/images/M/MV5BMGRjNDJjMTUtZmJjNy00ZDNhLWFhNDEtYjc0MDQwMTRlMmY4XkEyXkFqcGdeQXVyMTYwODE3NTA3._V1_FMjpg_UX1000_.jpg' },
  { title: 'Book 5', description: 'Book 2: JJK 2', image: 'https://m.media-amazon.com/images/I/81TmHlRleJL._AC_UF1000,1000_QL80_.jpg' },
  { title: 'Book 6', description: 'Book 3: Yu-Gi-Oh 2', image: 'https://m.media-amazon.com/images/I/81K7taBQxiL._AC_UF1000,1000_QL80_.jpg' },
  { title: 'Book 7', description: 'Book 1: Miraculus 3', image: 'https://m.media-amazon.com/images/M/MV5BMGRjNDJjMTUtZmJjNy00ZDNhLWFhNDEtYjc0MDQwMTRlMmY4XkEyXkFqcGdeQXVyMTYwODE3NTA3._V1_FMjpg_UX1000_.jpg' },
  { title: 'Book 8', description: 'Book 2: JJK 2', image: 'https://m.media-amazon.com/images/I/81TmHlRleJL._AC_UF1000,1000_QL80_.jpg' },
  { title: 'Book 9', description: 'Book 3: Yu-Gi-Oh 2', image: 'https://m.media-amazon.com/images/I/81K7taBQxiL._AC_UF1000,1000_QL80_.jpg' },
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
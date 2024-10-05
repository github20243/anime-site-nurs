import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)({
  maxWidth: 45,
  margin: '16px',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const CardTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.25rem',
});

const AnimeCard: React.FC<{ title: string; image: string; id: string }> = ({ title, image, id }) => (
  <StyledCard>
    <CardMedia
      component="img"
      alt={title}
      height="140"
      image={image}
    />
    <CardContent>
      <CardTitle variant="h5">{title}</CardTitle>
      <Button variant="contained" color="primary" component={Link} to={`/anime/${id}`}>
        More Details
      </Button>
    </CardContent>
  </StyledCard>
);

export default AnimeCard;

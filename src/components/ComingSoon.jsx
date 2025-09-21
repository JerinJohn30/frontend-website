import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
} from '@mui/material';
import { Link } from 'react-router-dom';

const BusinessCards = () => {
  const businesses = [
    {
      id: 1,
      title: 'Medical and Dental Supplies',
      category: 'Medical Equipment',
      description: 'Professional-grade medical tools and equipment for modern practices. We provide precision instruments trusted by medical professionals worldwide with comprehensive service support.',
      image: 'https://www.marketresearchintellect.com/images/blogs/instrumental-growth-trends-shaping-the-future-of-dental-instruments.webp',
    },
    {
      id: 2,
      title: 'Real Estate Services',
      category: 'Property Solutions',
      description: 'Comprehensive property solutions for residential and commercial clients. Your trusted partner in property investment, management, and development across multiple markets.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLF60QKig-BQBd0rv4Y2Q1ZYDau4NkyWMklw&s',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            color: '#333b6aff',
            fontWeight: 700,
          }}
        >
          Our Upcoming Business Ventures
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {businesses.map((business) => (
          <Grid size={{ xs: 12, sm: 6, lg: 5 }} key={business.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={business.image}
                alt={business.title}
                sx={{
                  objectFit: 'fill',
                  backgroundColor: '#f5f5f5',
                }}
              />
              <CardContent 
                sx={{ 
                  flexGrow: 1, 
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Top content section that grows to push features down */}
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      letterSpacing: 1,
                    }}
                  >
                    {business.category}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  >
                    {business.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {business.description}
                  </Typography>
                </Box>
                

                {/* Button - aligned at bottom across all cards */}
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  fullWidth
                  sx={{
                    py: 1.5,
                    fontWeight: 600,
                    backgroundColor: '#333b6aff',
                    '&:hover': {
                      backgroundColor: 'black',
                    },
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BusinessCards;
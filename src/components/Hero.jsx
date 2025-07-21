import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  Business,
  TrendingUp,
  Verified,
  LocalShipping,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Hero = () => {
  const stats = [
    { icon: <Business />, value: '15+', label: 'Years of Excellence' },
    { icon: <TrendingUp />, value: '500+', label: 'Corporate Clients' },
    { icon: <Verified />, value: '100%', label: 'Quality Assured' },
    { icon: <LocalShipping />, value: '24/7', label: 'Order Processing' },
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
        color: 'white',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontWeight: 700,
                background: 'linear-gradient(45deg, #ffffff, #e3f2fd)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Premium Paper Products for Your Business
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.95,
                lineHeight: 1.6,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              Captain Brothers Inc. delivers high-quality paper towels, tissues, and hygiene products
              to corporations nationwide. Trust us for bulk orders, wholesale distribution, and reliable service.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/products"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: 'primary.main',
                  fontSize: '1.125rem',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                View Products
              </Button>
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  fontSize: '1.125rem',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'white',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get Quote
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                p: 4,
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
                Why Choose Us?
              </Typography>
              <Grid container spacing={3}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} key={index}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mb: 1,
                          color: 'secondary.main',
                        }}
                      >
                        {React.cloneElement(stat.icon, { sx: { fontSize: 40 } })}
                      </Box>
                      <Typography variant="h3" sx={{ fontWeight: 700, mb: 0.5 }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body1" sx={{ opacity: 0.9, fontSize: '0.9rem' }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
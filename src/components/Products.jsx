import React from 'react';
import {Box,Container,Typography,Grid,Card,CardContent,CardMedia,Button,Chip,} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 'D350',
      name: 'Professional Roll Towels',
      category: 'Roll Towels',
      description: 'High-absorbency roll towels perfect for commercial kitchens, restaurants, and office spaces. Made from 100% virgin paper pulp.',
      features: ['High Absorbency', 'Commercial Grade', '100% Virgin Pulp', 'Cost Effective'],
      image: 'https://m.media-amazon.com/images/I/41DKIpQqaML._SX300_SY300_QL70_FMwebp_.jpg',
      popular: true,
    },
    {
      id: '800B',
      name: 'Premium Paper Towels',
      category: 'Paper Towels',
      description: 'Professional-grade paper towels designed for high-volume use in corporate environments and industrial settings.',
      features: ['Extra Strong', 'Quick Absorption', 'Lint-Free', 'Bulk Available'],
      image: 'https://m.media-amazon.com/images/I/61FcN4kp9dL._SX679_.jpg',
      popular: false,
    },
    {
      id: 'D485',
      name: 'Commercial Bathroom Tissue',
      category: 'Bathroom Tissue',
      description: 'Soft yet durable bathroom tissue suitable for high-traffic commercial restrooms and office facilities.',
      features: ['Soft & Strong', 'High Capacity', 'Septic Safe', 'Professional Grade'],
      image: 'https://m.media-amazon.com/images/I/71BMHjR+pvL._SX679_.jpg',
      popular: false,
    },
    {
      id: '205B',
      name: 'Industrial Kraft Rolls',
      category: 'Kraft Rolls',
      description: 'Heavy-duty kraft paper rolls ideal for packaging, wrapping, and industrial applications in manufacturing settings.',
      features: ['Heavy Duty', 'Tear Resistant', 'Multi-Purpose', 'Industrial Grade'],
      image: 'https://m.media-amazon.com/images/I/51e-gzZKfCS._SX679_.jpg',
      popular: false,
    },
    {
      id: '250W',
      name: 'Premium Luncheon Napkin',
      category: 'Luncheon Napkin',
      description: 'Soft and durable premium luncheon napkins made from sustainable materials, ideal for eco-conscious dining and hospitality settings.',
      features: ['Sustainable', 'Biodegradable', 'FSC Certified', 'Green Choice'],
      image: 'https://www.ikea.com/in/en/images/products/mottaga-paper-napkin-white__0773585_pe756338_s5.jpg',
      popular: false,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            color: 'primary.main',
            fontWeight: 700,
          }}
        >
          Our Product Range
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Premium paper products designed for businesses of all sizes.
          From small offices to large corporations, we have the right solution for you.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid size={{xs:12,sm:6,lg:4}} key={product.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              {product.popular && (
                <Chip
                  label="Popular"
                  color="secondary"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    zIndex: 1,
                    fontWeight: 600,
                  }}
                />
              )}
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{
                  objectFit: 'contain',
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
                    {product.category}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {product.description}
                  </Typography>
                </Box>
                
                {/* Features section - aligned across all cards */}
                <Box sx={{ mb: 3 }}>
                  {product.features.map((feature, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1,
                      }}
                    >
                      <CheckCircle
                        sx={{
                          color: 'success.main',
                          fontSize: 16,
                          mr: 1,
                        }}
                      />
                      <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
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
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  }}
                >
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}
        >
          Need Custom Solutions?
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 4, color: 'text.secondary', maxWidth: '500px', mx: 'auto' }}
        >
          We offer customized paper products tailored to your specific business needs.
          Contact us to discuss bulk pricing and custom requirements.
        </Typography>
        <Button
          variant="outlined"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '1.125rem',
            fontWeight: 600,
          }}
        >
          Contact Our Team
        </Button>
      </Box>
    </Container>
  );
};

export default Products;
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Inventory,
  LocalShipping,
  Support,
  Analytics,
  CheckCircle,
} from '@mui/icons-material';

const Services = () => {
  const services = [
    {
      icon: <Inventory />,
      title: 'Bulk Order Management',
      description: 'Specialized in handling large-scale orders for corporations and institutions.',
      features: [
        'Minimum order quantities starting from 1000 units',
        'Flexible delivery schedules',
        'Volume-based pricing discounts',
        'Dedicated account management',
      ],
    },
    {
      icon: <LocalShipping />,
      title: 'Wholesale Distribution',
      description: 'Comprehensive distribution network serving businesses across the nation.',
      features: [
        'Nationwide shipping coverage',
        'Fast processing and dispatch',
        'Tracking and logistics support',
        'Multiple delivery options',
      ],
    },
    {
      icon: <Support />,
      title: '24/7 Customer Support',
      description: 'Round-the-clock support to ensure your business operations never stop.',
      features: [
        'Dedicated customer service team',
        'Emergency order processing',
        'Technical product assistance',
        'Order status updates',
      ],
    },
    {
      icon: <Analytics />,
      title: 'Custom Solutions',
      description: 'Tailored products and services to meet your specific business requirements.',
      features: [
        'Product customization options',
        'Private labeling services',
        'Flexible packaging solutions',
        'Consultation and planning',
      ],
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              color: 'primary.main',
              fontWeight: 700,
            }}
          >
            Our Services
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
            Comprehensive solutions designed to support your business operations
            with reliability and efficiency.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  p: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'secondary.main',
                        width: 56,
                        height: 56,
                        mr: 2,
                      }}
                    >
                      {React.cloneElement(service.icon, { sx: { fontSize: 28 } })}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          mb: 0.5,
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '1rem',
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  </Box>

                  <List sx={{ p: 0 }}>
                    {service.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircle
                            sx={{
                              color: 'success.main',
                              fontSize: 20,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            fontSize: '0.95rem',
                            color: 'text.secondary',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 8,
            p: 6,
            background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
            borderRadius: 4,
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              fontWeight: 600,
            }}
          >
            Ready to Partner with Us?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: '1.125rem',
              maxWidth: '600px',
              mx: 'auto',
              opacity: 0.95,
            }}
          >
            Join hundreds of satisfied corporate clients who trust Captain Brothers Inc.
            for their paper product needs. Let's discuss how we can support your business.
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                500+
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Corporate Clients
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                15+
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Years Experience
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                24/7
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Customer Support
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
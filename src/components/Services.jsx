import React from 'react';
import {Box,Container,Typography,Grid,Card,CardContent,Avatar,List,ListItem,ListItemIcon,
  ListItemText,} from '@mui/material';
import {Inventory,LocalShipping,Support,Analytics,CheckCircle,} from '@mui/icons-material';

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
    <Box
      sx={{
        background: 'linear-gradient(135deg, #333b6aff 0%, #455295ff 100%)',
        color: 'white',
        py: 6,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
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
            Our Services
          </Typography>
          <Typography
            variant="h5"
            sx={{
              opacity: 0.95,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Comprehensive solutions designed to support your business operations
            with reliability and efficiency.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{xs:12,md:6}} key={index}>
              <Card
                sx={{
                  height: '100%',
                  p: 2,
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 4,
                  color: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    background: 'rgba(255, 255, 255, 0.15)',
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'rgba(126, 223, 32, 0.8)',
                        width: 56,
                        height: 56,
                        mr: 2,
                      }}
                    >
                      {React.cloneElement(service.icon, { 
                        sx: { fontSize: 28, color: 'white' } 
                      })}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: 'white',
                          mb: 0.5,
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.9)',
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
                              color: '#7EDF20',
                              fontSize: 20,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            fontSize: '0.95rem',
                            color: 'rgba(255, 255, 255, 0.85)',
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
      </Container>
    </Box>
  );
};

export default Services;
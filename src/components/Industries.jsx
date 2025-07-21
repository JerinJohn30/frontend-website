import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import {
  Business,
  LocalHospital,
  School,
  Restaurant,
  Hotel,
  Factory,
} from '@mui/icons-material';

const Industries = () => {
  const industries = [
    {
      icon: <Business />,
      title: 'Corporate Offices',
      description: 'Professional paper products for office environments, meeting rooms, and employee facilities.',
      details: 'Serving Fortune 500 companies and growing startups with reliable supply chains.',
    },
    {
      icon: <LocalHospital />,
      title: 'Healthcare Facilities',
      description: 'Medical-grade hygiene products for hospitals, clinics, and healthcare institutions.',
      details: 'Infection control compliant products meeting healthcare industry standards.',
    },
    {
      icon: <School />,
      title: 'Educational Institutions',
      description: 'Cost-effective solutions for schools, colleges, and universities nationwide.',
      details: 'Bulk pricing for educational budgets with reliable delivery schedules.',
    },
    {
      icon: <Restaurant />,
      title: 'Food Service Industry',
      description: 'Food-safe paper products for restaurants, cafeterias, and commercial kitchens.',
      details: 'High-absorbency products designed for busy food service environments.',
    },
    {
      icon: <Hotel />,
      title: 'Hospitality Sector',
      description: 'Premium quality products for hotels, resorts, and accommodation facilities.',
      details: 'Enhancing guest experience with soft, reliable hygiene products.',
    },
    {
      icon: <Factory />,
      title: 'Manufacturing & Industrial',
      description: 'Heavy-duty solutions for industrial facilities and manufacturing plants.',
      details: 'Durable products designed to handle industrial cleaning and maintenance needs.',
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
          Industries We Serve
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: 'text.secondary',
            maxWidth: '700px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Captain Brothers Inc. proudly serves diverse industries with specialized
          paper product solutions tailored to meet unique operational requirements.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {industries.map((industry, index) => (
          <Grid item xs={12} sm={6} lg={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
                },
                cursor: 'pointer',
              }}
            >
              <CardContent sx={{ p: 4, textAlign: 'center', flexGrow: 1 }}>
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    width: 72,
                    height: 72,
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  {React.cloneElement(industry.icon, { sx: { fontSize: 36 } })}
                </Avatar>
                
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                >
                  {industry.title}
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    color: 'text.secondary',
                    lineHeight: 1.6,
                  }}
                >
                  {industry.description}
                </Typography>
                
                <Typography
                  variant="body2"
                  sx={{
                    color: 'primary.main',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                  }}
                >
                  {industry.details}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          mt: 10,
          p: 6,
          background: 'linear-gradient(135deg, #4caf50 0%, #81c784 100%)',
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
          Your Industry, Our Expertise
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            fontSize: '1.125rem',
            maxWidth: '700px',
            mx: 'auto',
            opacity: 0.95,
            lineHeight: 1.7,
          }}
        >
          Don't see your industry listed? We work with businesses across all sectors,
          providing customized paper product solutions that meet specific operational
          needs and regulatory requirements. Our team of experts is ready to understand
          your unique challenges and deliver the perfect solution.
        </Typography>
        
        <Box
          sx={{
            display: 'inline-block',
            p: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 2,
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 1,
            }}
          >
            Contact us today to discuss your industry-specific needs
          </Typography>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.9,
            }}
          >
            Custom solutions • Competitive pricing • Reliable delivery
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Industries;
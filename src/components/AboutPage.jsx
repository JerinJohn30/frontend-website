import React from 'react';
import {Box,Container,Typography,Grid,Card,Avatar,Paper,Chip,} from '@mui/material';
import {TrendingUp,CheckCircle,Recycling,Security,Star,Factory,PublicOffRounded,HandshakeOutlined,} from '@mui/icons-material';

const AboutPage = () => {
  const stats = [
    {
      icon: <CheckCircle />,
      label: 'Quality First',
      description: 'We source only the highest quality paper products from trusted manufacturers.',
    },
    {
      icon: <HandshakeOutlined />,
      label: 'Customer Partnership',
      description: 'We build long-term relationships based on trust, reliability, and exceptional service.',
    },
    {
      icon: <TrendingUp />,
      label: 'Continuous Growth',
      description: 'We constantly innovate and expand our offerings to meet evolving customer needs.',
    },
    {
      icon: <Recycling />,
      label: 'Environmental Responsibility',
      description: 'We prioritize eco-friendly products and sustainable business practices.',
    },
  ];

  const teamMembers = [
    {
      name: 'Michael Captain',
      position: 'CEO & Founder',
      image: '/api/placeholder/150/150',
      bio: '25+ years of experience in paper manufacturing and distribution.',
      expertise: ['Business Strategy', 'Industry Relations', 'Operations'],
    },
    {
      name: 'Sarah Brothers',
      position: 'COO & Co-Founder',
      image: '/api/placeholder/150/150',
      bio: 'Expert in supply chain management and customer relations.',
      expertise: ['Supply Chain', 'Customer Success', 'Quality Control'],
    },
    {
      name: 'David Johnson',
      position: 'VP of Sales',
      image: '/api/placeholder/150/150',
      bio: 'Leading our sales team with 15+ years of B2B sales experience.',
      expertise: ['B2B Sales', 'Account Management', 'Market Analysis'],
    },
    {
      name: 'Lisa Chen',
      position: 'Head of Operations',
      image: '/api/placeholder/150/150',
      bio: 'Ensuring smooth operations and timely delivery of all orders.',
      expertise: ['Logistics', 'Inventory Management', 'Process Optimization'],
    },
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'FSC Chain of Custody Certification',
    'OSHA Workplace Safety Compliance',
    'EPA Environmental Standards',
    'Better Business Bureau A+ Rating',
  ];

  return (
    <Box sx={{ py: 6, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              color: 'primary.main',
              fontWeight: 700,
            }}
          >
            About Captain Brothers Inc
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.4,
              mb: 4,
            }}
          >
            Your Trusted Source for Premium Paper Products and Service
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '900px',
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: 'text.secondary',
            }}
          >
            At Captain Brothers Inc, we are passionate about bringing high-quality paper towels, tissues, and related products to businesses. 
            Though new to the industry, we are committed to building a reputation based on reliability, quality, and outstanding customer service from day one.
          </Typography>
        </Box>

        {/* Mission, Vision, Values */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid size ={{xs:12, md:4}}>
            <Paper elevation={3} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
              <Avatar
                sx={{
                  bgcolor: 'primary.main',
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 3,
                }}
              >
                <Star />
              </Avatar>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                To provide businesses with reliable access to premium paper products while building 
                lasting partnerships through exceptional service and competitive pricing.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid size ={{xs:12, md:4}}>
            <Paper elevation={3} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
              <Avatar
                sx={{
                  bgcolor: '#ffc400',
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 3,
                }}
              >
                <PublicOffRounded />
              </Avatar>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#ffc400' }}>
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                To be the leading national supplier of business paper products, known for innovation, 
                sustainability, and unwavering commitment to customer success.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid size ={{xs:12, md:4}}>
            <Paper elevation={3} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
              <Avatar
                sx={{
                  bgcolor: 'success.main',
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 3,
                }}
              >
                <Factory />
              </Avatar>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'success.main' }}>
                Our Commitment
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                Quality products, competitive pricing, reliable delivery, and environmental responsibility 
                guide every decision we make as your trusted business partner.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        {/* Stats Section - Replace the existing stats section with this */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'primary.main',
              fontWeight: 600,
            }}
          >
            Our Values
          </Typography>
          
          <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
            {stats.map((stat, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  mb: 4,
                  pb: 4,
                  borderBottom: index < stats.length - 1 ? '2px solid' : 'none',
                  borderColor: 'divider',
                  position: 'relative',
                  '&:hover': {
                    '& .stat-icon': {
                      transform: 'scale(1.1)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    },
                    '& .stat-content': {
                      transform: 'translateX(8px)',
                    }
                  }
                }}
              >
                {/* Icon section */}
                <Box
                  className="stat-icon"
                  sx={{
                    mr: 3,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: '#8bc34a',
                      width: 70,
                      height: 70,
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    }}
                  >
                    {stat.icon}
                  </Avatar>
                </Box>
                  
                {/* Content section */}
                <Box
                  className="stat-content"
                  sx={{
                    flex: 1,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: '#8bc34a',
                    }}
                  >
                    {stat.label}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontSize: '1.1rem',
                    }}
                  >
                    {stat.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          mt: 5,
          p: 4,
          background: 'linear-gradient(135deg, #f5f5f5 0%, #e8f5e8 100%)',
          borderRadius: 4,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: 'text.primary',
            fontWeight: 600,
          }}
        >
          It's All About Hygiene & Quality
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            fontSize: '1.125rem',
            lineHeight: 1.8,
            color: 'text.secondary',
          }}
        >
          In most parts of the business world, a day without quality tissue products is unimaginable.
          Bathroom tissue, paper towels, and napkins all play a critical role in hygiene, cleanliness,
          and comfort. Our tissue paper products function excellently to promote hygiene by helping
          to prevent the spread of germs. One thing is certain: without proper hygiene solutions,
          businesses cannot maintain the health and safety standards their employees and customers deserve.
        </Typography>
      </Box>
    </Box>
    
  );
};

export default AboutPage;
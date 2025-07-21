import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Paper,
  LinearProgress,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import {
  Business,
  Groups,
  EmojiEvents,
  TrendingUp,
  CheckCircle,
  LocalShipping,
  Recycling,
  Security,
  Star,
  Factory,
  PublicOffRounded,
  HandshakeOutlined,
} from '@mui/icons-material';

const AboutPage = () => {
  const stats = [
    {
      icon: <Business />,
      number: '25+',
      label: 'Years in Business',
      description: 'Serving businesses nationwide',
    },
    {
      icon: <Groups />,
      number: '10,000+',
      label: 'Happy Customers',
      description: 'Trusted by businesses of all sizes',
    },
    {
      icon: <LocalShipping />,
      number: '50M+',
      label: 'Products Delivered',
      description: 'Reliable delivery nationwide',
    },
    {
      icon: <EmojiEvents />,
      number: '99.8%',
      label: 'Customer Satisfaction',
      description: 'Excellence in service',
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

  const values = [
    {
      icon: <CheckCircle />,
      title: 'Quality First',
      description: 'We source only the highest quality paper products from trusted manufacturers.',
    },
    {
      icon: <HandshakeOutlined />,
      title: 'Customer Partnership',
      description: 'We build long-term relationships based on trust, reliability, and exceptional service.',
    },
    {
      icon: <TrendingUp />,
      title: 'Continuous Growth',
      description: 'We constantly innovate and expand our offerings to meet evolving customer needs.',
    },
    {
      icon: <Recycling />,
      title: 'Environmental Responsibility',
      description: 'We prioritize eco-friendly products and sustainable business practices.',
    },
  ];

  const timeline = [
    {
      year: '1999',
      title: 'Company Founded',
      description: 'Captain Brothers Inc. was established with a vision to provide quality paper products to businesses.',
    },
    {
      year: '2005',
      title: 'Expansion Phase',
      description: 'Expanded operations to serve customers across multiple states with improved logistics.',
    },
    {
      year: '2012',
      title: 'Digital Transformation',
      description: 'Launched online ordering system and modernized inventory management.',
    },
    {
      year: '2018',
      title: 'Sustainability Initiative',
      description: 'Introduced eco-friendly product lines and green business practices.',
    },
    {
      year: '2023',
      title: 'Industry Leadership',
      description: 'Recognized as a leading B2B paper product supplier with nationwide reach.',
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
    <Box sx={{ py: 4, minHeight: '100vh' }}>
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
            Your Trusted Partner in Premium Paper Products Since 1999
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
            For over two decades, Captain Brothers Inc has been at the forefront of the paper products industry, 
            providing businesses with high-quality paper towels, tissues, and related products. We've built our 
            reputation on reliability, quality, and exceptional customer service.
          </Typography>
        </Box>

        {/* Stats Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 3,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                  },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    width: 64,
                    height: 64,
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  {stat.icon}
                </Avatar>
                <Typography
                  variant="h3"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  {stat.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                  }}
                >
                  {stat.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Mission, Vision, Values */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
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
          
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
              <Avatar
                sx={{
                  bgcolor: 'secondary.main',
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 3,
                }}
              >
                <PublicOffRounded />
              </Avatar>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'secondary.main' }}>
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                To be the leading national supplier of business paper products, known for innovation, 
                sustainability, and unwavering commitment to customer success.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
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

        {/* Company Values */}
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
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ p: 3, height: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.light',
                        color: 'primary.main',
                        width: 56,
                        height: 56,
                      }}
                    >
                      {value.icon}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          color: 'primary.main',
                        }}
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          color: 'text.secondary',
                        }}
                      >
                        {value.description}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Timeline */}
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
            Our Journey
          </Typography>
          <Timeline position="alternate">
            {timeline.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align={index % 2 === 0 ? 'right' : 'left'}
                  variant="body2"
                  color="text.secondary"
                >
                  {item.year}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot
                    color="primary"
                    variant="filled"
                    sx={{ width: 16, height: 16 }}
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span" sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>

        {/* Team Section */}
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
            Leadership Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <Avatar
                    src={member.image}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 500,
                      mb: 2,
                    }}
                  >
                    {member.position}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 2,
                      lineHeight: 1.5,
                    }}
                  >
                    {member.bio}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center' }}>
                    {member.expertise.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill}
                        size="small"
                        variant="outlined"
                        sx={{ fontSize: '0.75rem' }}
                      />
                    ))}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Certifications and Awards */}
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              mb: 4,
              color: 'primary.main',
              fontWeight: 600,
            }}
          >
            Certifications & Standards
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {certifications.map((cert, index) => (
              <Grid item key={index}>
                <Chip
                  icon={<Security />}
                  label={cert}
                  color="primary"
                  variant="outlined"
                  sx={{
                    p: 1,
                    '& .MuiChip-label': { fontSize: '0.9rem' },
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mt: 4,
              color: 'text.secondary',
              lineHeight: 1.6,
            }}
          >
            Our certifications demonstrate our commitment to quality, environmental responsibility, 
            and workplace safety. We continuously invest in maintaining the highest industry standards.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutPage;
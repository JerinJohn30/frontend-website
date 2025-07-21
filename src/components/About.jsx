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
import NatureIcon from '@mui/icons-material/Nature';
import Diamond from '@mui/icons-material/Diamond';
import AttachMoney from '@mui/icons-material/AttachMoney';
import Build from '@mui/icons-material/Build';


const About = () => {
  const values = [
    {
      icon: <Diamond />,
      title: '100% Virgin Paper Products',
      description: 'All Captain Brothers tissue products are manufactured using 100% virgin paper pulp, ensuring the highest quality and performance for your business needs.',
    },
    {
      icon: <NatureIcon />,
      title: 'Premium Quality Standards',
      description: 'We use only the finest quality paper available in the market, with rigorous quality control processes to deliver products that exceed expectations.',
    },
    {
      icon: <AttachMoney />,
      title: 'Competitive Pricing',
      description: 'Our efficient operations and direct relationships with suppliers allow us to offer competitive pricing without compromising on quality.',
    },
    {
      icon: <Build />,
      title: 'Custom Solutions',
      description: 'Make your brand more visible with Captain Brothers. We offer customization options to help enhance your corporate identity and customer experience.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={8} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              color: 'primary.main',
              fontWeight: 700,
            }}
          >
            About Captain Brothers Inc.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: 'text.secondary',
              lineHeight: 1.6,
            }}
          >
            Leading the industry in tissue manufacturing with a commitment to excellence,
            innovation, and sustainability.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: '1.125rem',
              lineHeight: 1.8,
            }}
          >
            We are a trusted paper product manufacturing company dedicated to delivering
            softness, strength, and sustainability in every sheet. With years of experience
            and a focus on innovation, we pride ourselves on crafting products that enrich
            your everyday business operations.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: '1.125rem',
              lineHeight: 1.8,
            }}
          >
            From our reliable paper towels to our premium bathroom tissues, our products
            are designed to provide comfort and convenience when your business needs it most.
            We serve corporations of all sizes, from small businesses to large enterprises.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              height: 400,
              backgroundImage: 'url(https://images.unsplash.com/photo-1486312338219-ce68e2c6b7f3?w=600)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 4,
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, rgba(25, 118, 210, 0.7), rgba(76, 175, 80, 0.7))',
                borderRadius: 4,
              },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: 24,
                left: 24,
                right: 24,
                zIndex: 1,
                color: 'white',
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                15+ Years
              </Typography>
              <Typography variant="body1">
                of Excellence in Paper Manufacturing
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 10 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            mb: 2,
            color: 'text.primary',
            fontWeight: 600,
          }}
        >
          Our Core Values
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
            fontSize: '1.125rem',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          What sets Captain Brothers apart in the competitive paper products industry
        </Typography>

        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  p: 2,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <CardContent>
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      width: 64,
                      height: 64,
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {React.cloneElement(value.icon, { sx: { fontSize: 32 } })}
                  </Avatar>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontSize: '1rem',
                    }}
                  >
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          mt: 10,
          p: 6,
          background: 'linear-gradient(135deg, #f5f5f5 0%, #e8f5e8 100%)',
          borderRadius: 4,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
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
    </Container>
  );
};

export default About;
import React from 'react';
import {Box,Container,Grid,Typography,Link,IconButton,Divider,List,ListItem,ListItemText,
  Paper,} from '@mui/material';
import {Facebook,Twitter,LinkedIn,Instagram,Phone,Email,LocationOn,Business,} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const productCategories = [
    'Paper Towels',
    'Roll Towels',
    'Bathroom Tissues',
    'Napkins',
    'Industrial Kraft Rolls',
    'Custom Solutions',
  ];

  const businessInfo = [
    {
      icon: <Phone sx={{ fontSize: 18 }} />,
      text: '+1 (514) 705-2756',
    },
    {
      icon: <Email sx={{ fontSize: 18 }} />,
      text: 'sales@captainbrothers.com',
    },
    {
      icon: <LocationOn sx={{ fontSize: 18 }} />,
      text: '51 Adelaide Street, Kingston, O.N.\nK7K 1Y3',
    },
    {
      icon: <Business sx={{ fontSize: 18 }} />,
      text: 'Monday - Friday: 8:00 AM - 6:00 PM EST',
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#cfd8dc',
        color: 'black',
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Box sx={{ py: 6 }}>
          <Grid container spacing={4}>
            {/* Company Information */}
            <Grid size={{xs:12, sm:6, md:3}}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: 'primary.main',
                }}
              >
                Captain Brothers Inc
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 3,
                  lineHeight: 1.6,
                  color: 'black',
                }}
              >
                Your trusted partner for bulk paper products. We provide high-quality paper towels, tissues, and more to businesses across the nation.
              </Typography>
              
              {/* Social Media Icons */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                {[
                  { icon: <Facebook />, label: 'Facebook' },
                  { icon: <Twitter />, label: 'Twitter' },
                  { icon: <LinkedIn />, label: 'LinkedIn' },
                  { icon: <Instagram />, label: 'Instagram' },
                ].map((social, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      color: 'black',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid size ={{xs:12, sm:6, md:2}}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'primary.main',
                }}
              >
                Quick Links
              </Typography>
              <List sx={{ p: 0 }}>
                {quickLinks.map((link, index) => (
                  <ListItem key={index} sx={{ p: 0, mb: 1 }}>
                    <Link
                      component={RouterLink}
                      to={link.path}
                      sx={{
                        color: 'black',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        '&:hover': {
                          color: 'primary.main',
                          textDecoration: 'underline',
                        },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {link.name}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Product Categories */}
            <Grid size ={{xs:12, sm:6, md:3}}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'primary.main',
                }}
              >
                Our Products
              </Typography>
              <List sx={{ p: 0 }}>
                {productCategories.map((product, index) => (
                  <ListItem key={index} sx={{ p: 0, mb: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'black',
                        fontSize: '0.9rem',
                      }}
                    >
                      {product}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Contact Information */}
            <Grid size ={{xs:12, sm:6, md:4}}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'primary.main',
                }}
              >
                Contact Information
              </Typography>
              <Box sx={{ mb: 3 }}>
                {businessInfo.map((info, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mt: 0.5 }}>
                      {info.icon}
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'black',
                        fontSize: '0.9rem',
                        lineHeight: 1.4,
                        whiteSpace: 'pre-line'
                      }}
                    >
                      {info.text}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Call to Action */}
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  p: 2,
                  borderRadius: 2,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    color: 'primary.main',
                  }}
                >
                  Ready to Order?
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'black',
                    fontSize: '0.85rem',
                    lineHeight: 1.4,
                  }}
                >
                  Call us today for bulk pricing and fast delivery on all paper products.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            py: 3,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'black',
              fontSize: '0.85rem',
            }}
          >
            © {currentYear} Captain Brothers Inc. All rights reserved.
          </Typography>
          
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {[
              'Privacy Policy',
              'Terms of Service',
              'Cookie Policy',
              'Shipping Policy',
            ].map((link, index) => (
              <Link
                key={index}
                href="#"
                sx={{
                  color: 'black.300',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  '&:hover': {
                    color: 'primary.main',
                    textDecoration: 'underline',
                  },
                  transition: 'color 0.3s ease',
                }}
              >
                {link}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
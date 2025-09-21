import React, { useState } from 'react';
import {Box,Container,Typography,Grid,Card,CardContent,TextField,Button,Avatar,FormControl,InputLabel,
  Select,MenuItem,Paper,Divider,} from '@mui/material';
import {Phone,Email,LocationOn,Business,Send,CheckCircle,} from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      inquiryType: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <Phone />,
      title: 'Phone',
      details: '+1 (514) 705-2756',
      subtitle: 'Monday - Friday: 8:00 AM - 6:00 PM EST',
    },
    {
      icon: <Email />,
      title: 'Email',
      details: 'sales@captainbrothers.com',
      subtitle: 'We typically respond within 4 hours',
    },
    {
      icon: <LocationOn />,
      title: 'Head Office',
      details: '51 Adelaide Street, Kingston, O.N.',
      subtitle: 'K7K 1Y3',
    },
    {
      icon: <Business />,
      title: 'Business Hours',
      details: 'Monday - Friday: 8:00 AM - 6:00 PM',
      subtitle: 'Saturday: 9:00 AM - 2:00 PM EST',
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
          Contact Us
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.4,
            mb: 2,
          }}
        >
          Ready to Partner with Us?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            maxWidth: '800px',
            mx: 'auto',
            fontSize: '1.1rem',
          }}
        >
          Get in touch today to discuss your bulk paper product needs. Our team is ready to provide you with competitive pricing and reliable service.
        </Typography>
      </Box>

      <Grid container justifyContent="center">
        {/* Contact Information Cards */}
        <Grid size={{xs:12}}>
          <Box sx={{ mb: 4 }}>
            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid size={{xs:12,sm:12,lg:6}} key={index}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 6,
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Avatar
                          sx={{
                            bgcolor: '#333b6aff',
                            width: 50,
                            height: 50,
                          }}
                        >
                          {info.icon}
                        </Avatar>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, mb: 1 }}
                          >
                            {info.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ color: '#333b6aff', fontWeight: 500, mb: 0.5 }}
                          >
                            {info.details}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                          >
                            {info.subtitle}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Additional Information */}
      <Box sx={{ mt: 8 }}>
        <Paper elevation={2} sx={{ p: 4, backgroundColor: '#455295ff', color: 'white' }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            Why Choose Captain Brothers Inc?
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {[
              'Competitive Bulk Pricing',
              'Fast & Reliable Delivery',
              '24/7 Customer Support',
              'Quality Guaranteed Products',
              'Flexible Payment Terms',
              'Custom Solutions Available'
            ].map((benefit, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircle sx={{ fontSize: 20 }} />
                <Typography variant="body2">{benefit}</Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Contact;
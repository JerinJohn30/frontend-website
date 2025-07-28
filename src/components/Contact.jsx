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
      details: '1-800-CAPTAIN (227-8246)',
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
            color: 'primary.main',
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

      <Grid container spacing={4}>
        {/* Contact Information Cards */}
        <Grid size={{xs:12,lg:5}}>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              sx={{ mb: 3, color: 'primary.main', fontWeight: 600 }}
            >
              Get In Touch
            </Typography>
            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid size={{xs:12,sm:6,lg:12}} key={index}>
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
                            bgcolor: 'primary.main',
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
                            sx={{ color: 'primary.main', fontWeight: 500, mb: 0.5 }}
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

        {/* Contact Form */}
        <Grid size={{xs:12,lg:7}}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography
              variant="h4"
              sx={{ mb: 3, color: 'primary.main', fontWeight: 600 }}
            >
              Send Us a Message
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, color: 'text.secondary' }}
            >
              Fill out the form below and our team will get back to you within 24 hours.
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid size={{xs:12,sm:6}}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{xs:12,sm:6}}>
                  <TextField
                    fullWidth
                    name="email"
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{xs:12,sm:6}}>
                  <TextField
                    fullWidth
                    name="company"
                    label="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{xs:12,lg:5}}>
                  <TextField
                    fullWidth
                    name="phone"
                    label="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{xs:12}}>
                  <FormControl fullWidth required>
                    <InputLabel>Inquiry Type</InputLabel>
                    <Select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      label="Inquiry Type"
                    >
                      <MenuItem value="bulk-order">Bulk Order Inquiry</MenuItem>
                      <MenuItem value="wholesale">Wholesale Partnership</MenuItem>
                      <MenuItem value="custom-products">Custom Products</MenuItem>
                      <MenuItem value="pricing">Pricing Information</MenuItem>
                      <MenuItem value="general">General Inquiry</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{xs:12}}>
                  <TextField
                    fullWidth
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    placeholder="Tell us about your paper product needs, order quantity, delivery requirements, and any specific questions you have."
                  />
                </Grid>
                <Grid size={{xs:12}}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    startIcon={<Send />}
                    sx={{
                      py: 1.5,
                      px: 4,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 2,
                      boxShadow: 3,
                      '&:hover': {
                        boxShadow: 6,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>

      {/* Additional Information */}
      <Box sx={{ mt: 8 }}>
        <Paper elevation={2} sx={{ p: 4, backgroundColor: 'primary.light', color: 'white' }}>
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
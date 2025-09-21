import React, { useState } from 'react';
import {Box,Container,Typography,Accordion,AccordionSummary,AccordionDetails,Grid,} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const FAQ = () => {
  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      id: 'panel1',
      question: 'What is the minimum order quantity for bulk purchases?',
      answer: 'Our minimum order quantity for bulk purchases starts at 1000 units per product type. We offer significant volume discounts for larger orders, making it cost-effective for businesses of all sizes. Contact our sales team for customized pricing based on your specific requirements.',
    },
    {
      id: 'panel2',
      question: 'Do you offer custom branding or private labeling services?',
      answer: 'Yes, we provide comprehensive custom branding and private labeling services. You can add your company logo, brand colors, and custom packaging to our products. This service is perfect for businesses looking to enhance their brand visibility and create a cohesive customer experience.',
    },
    {
      id: 'panel3',
      question: 'What are your shipping and delivery options?',
      answer: 'We offer nationwide shipping with multiple delivery options including standard ground shipping, expedited delivery, and scheduled bulk deliveries. Most orders are processed within 2-3 business days, with delivery times varying based on location and shipping method selected.',
    },
    {
      id: 'panel4',
      question: 'Are your products environmentally friendly?',
      answer: 'Absolutely! All our products are made from 100% virgin paper pulp sourced from sustainably managed forests. We also offer eco-friendly product lines that are FSC certified and biodegradable, perfect for environmentally conscious businesses.',
    },
    {
      id: 'panel5',
      question: 'Do you provide customer support for ongoing orders?',
      answer: 'Yes, we offer 24/7 customer support with dedicated account managers for bulk customers. Our support team can help with order tracking, technical product questions, emergency orders, and any other assistance you may need.',
    },
    {
      id: 'panel6',
      question: 'What payment methods do you accept for business orders?',
      answer: 'We accept various payment methods including credit cards, bank transfers, purchase orders, and net payment terms for qualified businesses. We can work with your accounting department to establish convenient payment arrangements.',
    },
    {
      id: 'panel7',
      question: 'Can you accommodate special packaging requirements?',
      answer: 'Yes, we understand that different businesses have unique operational needs. We can accommodate special packaging requirements, specific delivery schedules, and even emergency rush orders when necessary. Discuss your specific needs with our team.',
    },
    {
      id: 'panel8',
      question: 'How do I get a quote for my business needs?',
      answer: 'Getting a quote is easy! You can contact us through our website, call our sales team, or email us with your requirements. We will need information about your desired products, quantities, delivery location, and any special requirements to provide an accurate quote.',
    },
    {
      id: 'panel9',
      question: 'Do you offer trial orders for new customers?',
      answer: 'Yes, we understand the importance of product testing before committing to large orders. We offer sample products and trial orders for new customers to evaluate our quality and service before establishing a long-term partnership.',
    },
    {
      id: 'panel10',
      question: 'What industries do you primarily serve?',
      answer: 'We serve a wide range of industries including corporate offices, healthcare facilities, educational institutions, hospitality, food service, and manufacturing. Our products are designed to meet the specific hygiene and operational requirements of various business sectors.',
    },
  ];

  const leftFAQs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightFAQs = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <Box sx={{ backgroundColor: 'background.default', mb:4 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              color: '#333b6aff',
              fontWeight: 700,
            }}
          >
            Frequently Asked Questions
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
            Find answers to common questions about our products, services,
            and business processes.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid size={{xs:12,lg:6}}>
            {leftFAQs.map((faq) => (
              <Accordion
                key={faq.id}
                expanded={expanded === faq.id}
                onChange={handleChange(faq.id)}
                sx={{
                  mb: 2,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  '&:before': {
                    display: 'none',
                  },
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  sx={{
                    backgroundColor: expanded === faq.id ? '#333b6aff' : 'white',
                    color: expanded === faq.id ? 'white' : 'text.primary',
                    minHeight: 64,
                    '&:hover': {
                      backgroundColor: expanded === faq.id ? 'black' : 'grey.50',
                    },
                    '& .MuiAccordionSummary-expandIconWrapper': {
                      color: expanded === faq.id ? 'white' : 'text.secondary',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      fontSize: '1.1rem',
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: 'grey.50',
                    p: 3,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.7,
                      color: 'text.secondary',
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>

          <Grid size={{xs:12,lg:6}}>
            {rightFAQs.map((faq) => (
              <Accordion
                key={faq.id}
                expanded={expanded === faq.id}
                onChange={handleChange(faq.id)}
                sx={{
                  mb: 2,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  '&:before': {
                    display: 'none',
                  },
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  sx={{
                    backgroundColor: expanded === faq.id ? '#333b6aff' : 'white',
                    color: expanded === faq.id ? 'white' : 'text.primary',
                    minHeight: 64,
                    '&:hover': {
                      backgroundColor: expanded === faq.id ? 'black' : 'grey.50',
                    },
                    '& .MuiAccordionSummary-expandIconWrapper': {
                      color: expanded === faq.id ? 'white' : 'text.secondary',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      fontSize: '1.1rem',
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: 'grey.50',
                    p: 3,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.7,
                      color: 'text.secondary',
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 8,
            p: 4,
            backgroundColor: '#333b6aff',
            borderRadius: 4,
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: 600,
            }}
          >
            Still Have Questions?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              opacity: 0.95,
            }}
          >
            Our customer service team is here to help you with any additional
            questions or specific requirements you may have.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.9,
            }}
          >
            Contact us at: <strong>sales@captainbrothers.com</strong> | <strong>+1 (514) 705-2756</strong>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
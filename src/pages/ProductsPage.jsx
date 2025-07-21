import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  Search,
  FilterList,
  CheckCircle,
  Star,
  LocalShipping,
  ExpandMore,
  Business,
  Inventory,
} from '@mui/icons-material';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const products = [
    {
      id: 1,
      name: 'Premium Multi-Fold Paper Towels',
      category: 'Paper Towels',
      image: '/api/placeholder/300/200',
      description: 'High-absorbency multi-fold paper towels perfect for commercial use.',
      features: ['1-ply thickness', 'High absorbency', 'Quick drying', 'Eco-friendly'],
      bulkPricing: [
        { quantity: '1-10 cases', price: '$45.00' },
        { quantity: '11-50 cases', price: '$42.00' },
        { quantity: '50+ cases', price: '$38.00' },
      ],
      specifications: {
        'Sheets per pack': '250',
        'Packs per case': '16',
        'Total sheets per case': '4,000',
        'Dimensions': '9.25" x 9.4"',
        'Color': 'White',
      },
      inStock: true,
      rating: 4.8,
      reviews: 156,
    },
    {
      id: 2,
      name: 'Ultra-Soft Toilet Paper',
      category: 'Toilet Paper',
      image: '/api/placeholder/300/200',
      description: '2-ply ultra-soft toilet paper for maximum comfort and durability.',
      features: ['2-ply softness', 'Strong & durable', 'Septic safe', 'Biodegradable'],
      bulkPricing: [
        { quantity: '1-10 cases', price: '$52.00' },
        { quantity: '11-50 cases', price: '$48.00' },
        { quantity: '50+ cases', price: '$44.00' },
      ],
      specifications: {
        'Sheets per roll': '500',
        'Rolls per case': '48',
        'Total sheets per case': '24,000',
        'Dimensions': '4.5" x 4.0"',
        'Color': 'White',
      },
      inStock: true,
      rating: 4.7,
      reviews: 203,
    },
    {
      id: 3,
      name: 'Premium Facial Tissues',
      category: 'Facial Tissues',
      image: '/api/placeholder/300/200',
      description: 'Soft, strong facial tissues in convenient flat boxes.',
      features: ['2-ply softness', 'Hypoallergenic', 'Lotion-free', 'Flat box design'],
      bulkPricing: [
        { quantity: '1-10 cases', price: '$38.00' },
        { quantity: '11-50 cases', price: '$35.00' },
        { quantity: '50+ cases', price: '$32.00' },
      ],
      specifications: {
        'Tissues per box': '100',
        'Boxes per case': '30',
        'Total tissues per case': '3,000',
        'Box dimensions': '8.9" x 4.5" x 3.1"',
        'Color': 'White',
      },
      inStock: true,
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 4,
      name: 'Dinner Napkins - White',
      category: 'Napkins',
      image: '/api/placeholder/300/200',
      description: 'High-quality dinner napkins perfect for restaurants and catering.',
      features: ['1-ply thickness', 'Absorbent', 'Elegant design', 'Food service grade'],
      bulkPricing: [
        { quantity: '1-10 cases', price: '$28.00' },
        { quantity: '11-50 cases', price: '$25.00' },
        { quantity: '50+ cases', price: '$22.00' },
      ],
      specifications: {
        'Napkins per pack': '250',
        'Packs per case': '12',
        'Total napkins per case': '3,000',
        'Dimensions': '17" x 17"',
        'Color': 'White',
      },
      inStock: true,
      rating: 4.5,
      reviews: 67,
    },
    {
      id: 5,
      name: 'Industrial Cleaning Wipes',
      category: 'Industrial Wipes',
      image: '/api/placeholder/300/200',
      description: 'Heavy-duty cleaning wipes for industrial and commercial use.',
      features: ['Heavy-duty material', 'Oil resistant', 'Lint-free', 'Reusable'],
      bulkPricing: [
        { quantity: '1-10 cases', price: '$65.00' },
        { quantity: '11-50 cases', price: '$60.00' },
        { quantity: '50+ cases', price: '$55.00' },
      ],
      specifications: {
        'Wipes per roll': '275',
        'Rolls per case': '6',
        'Total wipes per case': '1,650',
        'Dimensions': '9.7" x 16.8"',
        'Color': 'Blue',
      },
      inStock: true,
      rating: 4.9,
      reviews: 124,
    },
    {
      id: 6,
      name: 'Custom Branded Paper Towels',
      category: 'Custom Solutions',
      image: '/api/placeholder/300/200',
      description: 'Custom branded paper towels with your company logo and colors.',
      features: ['Custom branding', 'Various sizes', 'Color options', 'Minimum order applies'],
      bulkPricing: [
        { quantity: '100-500 cases', price: '$55.00' },
        { quantity: '500-1000 cases', price: '$50.00' },
        { quantity: '1000+ cases', price: '$45.00' },
      ],
      specifications: {
        'Customization': 'Logo & Colors',
        'Minimum order': '100 cases',
        'Lead time': '2-3 weeks',
        'Setup fee': '$250',
        'Proof included': 'Yes',
      },
      inStock: false,
      rating: 4.8,
      reviews: 45,
    },
  ];

  const categories = ['all', 'Paper Towels', 'Toilet Paper', 'Facial Tissues', 'Napkins', 'Industrial Wipes', 'Custom Solutions'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseFloat(a.bulkPricing[0].price.replace('$', '')) - parseFloat(b.bulkPricing[0].price.replace('$', ''));
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const ProductCard = ({ product }) => (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
            {product.name}
          </Typography>
          <Chip
            label={product.inStock ? 'In Stock' : 'Custom Order'}
            color={product.inStock ? 'success' : 'warning'}
            size="small"
          />
        </Box>

        <Chip
          label={product.category}
          variant="outlined"
          size="small"
          sx={{ mb: 2 }}
        />

        <Typography
          variant="body2"
          sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.5 }}
        >
          {product.description}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            Key Features:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {product.features.map((feature, index) => (
              <Chip
                key={index}
                label={feature}
                size="small"
                variant="outlined"
                sx={{ fontSize: '0.75rem' }}
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            Bulk Pricing:
          </Typography>
          {product.bulkPricing.map((pricing, index) => (
            <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {pricing.quantity}:
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main' }}>
                {pricing.price}/case
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Star sx={{ color: 'warning.main', fontSize: 16 }} />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {product.rating}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ({product.reviews} reviews)
          </Typography>
        </Box>

        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{
            mt: 'auto',
            py: 1.5,
            fontWeight: 600,
            borderRadius: 2,
          }}
        >
          Request Quote
        </Button>
      </CardContent>

      {/* Product Details Accordion */}
      <Accordion sx={{ mt: 'auto' }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            Product Specifications
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List dense>
            {Object.entries(product.specifications).map(([key, value]) => (
              <ListItem key={key} sx={{ px: 0, py: 0.5 }}>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {key}:
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {value}
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Card>
  );

  return (
    <Box sx={{ py: 4, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              color: 'primary.main',
              fontWeight: 700,
            }}
          >
            Our Products
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.4,
            }}
          >
            Premium Paper Products for Business & Industrial Use
          </Typography>
        </Box>

        {/* Filters and Search */}
        <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  label="Category"
                  startAdornment={<FilterList sx={{ mr: 1 }} />}
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  label="Sort By"
                >
                  <MenuItem value="name">Name (A-Z)</MenuItem>
                  <MenuItem value="price">Price (Low to High)</MenuItem>
                  <MenuItem value="rating">Rating (High to Low)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>

        {/* Results Count */}
        <Typography
          variant="body1"
          sx={{ mb: 3, color: 'text.secondary' }}
        >
          Showing {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''}
          {categoryFilter !== 'all' && ` in ${categoryFilter}`}
        </Typography>

        {/* Products Grid */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {sortedProducts.map((product) => (
            <Grid item xs={12} md={6} lg={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        {/* Additional Information */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Business sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Bulk Ordering Benefits
                </Typography>
              </Box>
              <List>
                {[
                  'Volume discounts on orders of 50+ cases',
                  'Free shipping on orders over $500',
                  'Dedicated account manager',
                  'Flexible payment terms for qualified businesses',
                  'Custom packaging options available',
                  'Same-day shipping on in-stock items',
                ].map((benefit, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: 'success.main' }} />
                    </ListItemIcon>
                    <ListItemText primary={benefit} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Inventory sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Custom Solutions
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                Need something specific? We offer custom branding, special sizes, and 
                tailored packaging solutions for your business needs.
              </Typography>
              <List>
                {[
                  'Custom logo printing and branding',
                  'Special size requirements',
                  'Private labeling options',
                  'Color customization',
                  'Eco-friendly material options',
                  'Specialized packaging solutions',
                ].map((service, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: 'success.main' }} />
                    </ListItemIcon>
                    <ListItemText primary={service} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>

        {/* Call to Action */}
        <Paper
          elevation={3}
          sx={{
            mt: 6,
            p: 4,
            backgroundColor: 'primary.main',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
            Ready to Place Your Order?
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
            Contact us today for personalized quotes and bulk pricing
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ px: 4, py: 1.5, fontWeight: 600 }}
            >
              Request Quote
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'secondary.main',
                  backgroundColor: 'secondary.main',
                },
              }}
            >
              Call 1-800-CAPTAIN
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ProductsPage;
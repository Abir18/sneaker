import { Grid, Container, Box, Typography } from '@mui/material';
import React from 'react';
import useProducts from '../hooks/useProducts';
import Navigation from './Navigation';
import SingleProduct from './SingleProduct';

const Products = () => {
  const { products } = useProducts();

  return (
    <>
      <Navigation />
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          sx={{ fontWeight: 700, mt: 5, mb: 3 }}
          variant="h3"
          component="div"
        >
          Discover
        </Typography>
        <Typography
          sx={{ fontWeight: 600, mb: 20, color: '#5Ce7ed' }}
          variant="h4"
          component="div"
        >
          Our New Arrivals
        </Typography>
        <Container>
          <Grid
            sx={{ m: 5 }}
            container
            // spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {products.map(product => (
              <SingleProduct key={product._id} product={product} />
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Products;

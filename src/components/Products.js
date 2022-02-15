import { Grid, Container, Box, Typography } from '@mui/material';
import React from 'react';
import useProducts from '../hooks/useProducts';
import Footer from './Footer';
import Navigation from './Navigation';
// import PaginationLayout from './PaginationLayout';
import SingleProduct from './SingleProduct';

const Products = () => {
  const { products } = useProducts();

  return (
    <>
      <Navigation />
      <Box sx={{ flexGrow: 1, pb: 12, mb: 4, borderBottom: '1px solid black' }}>
        <Typography
          sx={{ fontWeight: 400, mt: 5, mb: 3 }}
          variant="h3"
          component="div"
        >
          All Sneakers
        </Typography>
        {/* <Container> */}
        <div>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            container
            // spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {products.map(product => (
              <SingleProduct key={product._id} product={product} />
            ))}
          </Grid>
        </div>
        {/* </Container> */}
      </Box>
      {/* <PaginationLayout /> */}
      <Footer />
    </>
  );
};

export default Products;

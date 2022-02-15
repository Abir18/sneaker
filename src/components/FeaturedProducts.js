import { Grid, Container, Box, Typography } from '@mui/material';
import React from 'react';
import useProducts from '../hooks/useProducts';
import SingleProduct from './SingleProduct';

const FeaturedProducts = () => {
  const { products } = useProducts();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {/* <Typography
          sx={{ fontWeight: 700, mt: 5, mb: 3 }}
          variant="h3"
          component="div"
        >
          Discover
        </Typography> */}
        <Typography
          sx={{ fontWeight: 400, mt: 5, fontSize: '28px', mr: 100 }}
          variant="h4"
          component="div"
        >
          Popular Right Now
        </Typography>
        <Container>
          <>
            <Grid
              sx={{ m: 5 }}
              container
              // spacing={{ xs: 2, md: 8 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {products.slice(0, 6).map(product => (
                <SingleProduct key={product._id} product={product} />
              ))}
            </Grid>
          </>
        </Container>
      </Box>
    </>
  );
};

export default FeaturedProducts;

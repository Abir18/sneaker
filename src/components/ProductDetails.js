import { Button, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import Footer from './Footer';
import Navigation from './Navigation';
import SingleProduct from './SingleProduct';
// import Products from './Products';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();
  // console.log(products);
  const [product, setProduct] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { _id, name, description, price, image } = product;

  // console.log('id', id);
  // console.log('_id', _id);

  const url = `/purchase/product/${_id}`;
  useEffect(() => {
    const filtered = products.filter(product => product._id !== id);
    setFilteredProducts(filtered);
    console.log(products, 'p');
    console.log(filtered, 'f');
    console.log(filteredProducts, 'fp');
    axios
      .get(`https://sneakers-website.herokuapp.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      });
    // return () => {
    //   setFilteredProducts(filtered);
    // };
  }, [id]);

  return (
    <>
      <Navigation />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1400px auto',
          marginBottom: '100px',
        }}
      >
        <div>
          <img src={image} alt="product" />
        </div>
        <div style={{ textAlign: 'start', marginTop: '280px' }}>
          <h1>{name} </h1>
          <h3>$ {price}</h3>
          <h4>{description}</h4>
          <Link to={url} style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              style={{
                padding: '15px 80px',
                fontSize: '16px',
                // background: 'linear-gradient(to right, #ffaa00 , #ffaa00)',
                background: '#000',
                border: 'none',
                fontWeight: 600,
                marginTop: '20px',
              }}
            >
              Buy Now
            </Button>
          </Link>
        </div>
      </div>
      {/* <Products /> */}
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
        {filteredProducts.map(product => (
          <SingleProduct key={product._id} product={product} />
        ))}
      </Grid>
      {/* {filteredProducts.map(product => (
        <SingleProduct product={product} />
      ))} */}
      <Footer />
    </>
  );
};

export default ProductDetails;

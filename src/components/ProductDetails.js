import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';
import Navigation from './Navigation';
// import Products from './Products';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { _id, name, description, price, image } = product;
  const url = `/purchase/product/${_id}`;
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://sneakers-website.herokuapp.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      });
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
      <Footer />
    </>
  );
};

export default ProductDetails;

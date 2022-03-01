import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({});

  const handleBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newProduct = { ...product };
    newProduct[field] = value;
    setProduct(newProduct);
  };
  console.log(product);
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`https://sneakers-website.herokuapp.com/products`, product)
      .then(response => {
        // console.log(response);
        if (response.data.acknowledged) {
          alert('New Product Added Succesfully');
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ mb: 5, width: '50%' }}
          id="standard-basic"
          label="Product Name"
          name="name"
          variant="standard"
          onBlur={handleBlur}
          required
        />
        <br />
        <TextField
          sx={{ mb: 5, width: '50%' }}
          id="standard-basic"
          label="Description"
          name="description"
          variant="standard"
          onBlur={handleBlur}
          required
        />
        <br />
        <TextField
          sx={{ mb: 5, width: '50%' }}
          id="standard-basic"
          label="Price"
          name="price"
          variant="standard"
          required
          type="number"
          min="0"
          max="5"
          step="1"
          onBlur={handleBlur}
        />
        <br />
        <TextField
          sx={{ mb: 5, width: '50%' }}
          id="standard-basic"
          label="Image Link"
          name="image"
          variant="standard"
          onBlur={handleBlur}
          required
        />
        <br />
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;

import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { NavLink, useHistory, useParams } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
// import Navigation from '../Shared/Navigation/Navigation';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import Navigation from '../components/Navigation';

const Purchase = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const history = useHistory();
  //   const { displayName, email } = user;

  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://sneakers-website.herokuapp.com/products/${id}`)
      .then(res => {
        console.log(res.data, 'single');
        setProduct(res.data);
      });
  }, [id]);

  const initialUserData = {
    name: user?.displayName,
    email: user?.email,
    productName: product?.name,
    productPrice: product?.price,
  };
  const [userData, setUserData] = useState(initialUserData);

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserData = { ...userData };
    newUserData[field] = value;
    setUserData(newUserData);
  };

  const handleLoginForm = e => {
    e.preventDefault();
    axios
      .post('https://sneakers-website.herokuapp.com/orders', userData)
      .then(response => {
        if (response.data.insertedId) {
          alert('You Ordered Successfully');
          history.push('/');
        }
        //   console.log(response);
      });
  };

  console.log(userData);

  return (
    <div>
      <Navigation />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} sx={{ mt: 18 }}>
          <Typography variant="h2" gutterBottom sx={{ fontSize: '30px' }}>
            Purchase Your Product
          </Typography>
          <Container>
            {/* {!isLoading && ( */}
            <>
              <form onSubmit={handleLoginForm}>
                <TextField
                  sx={{ width: '60%', my: 7 }}
                  id="standard-basic"
                  value={user.displayName}
                  variant="standard"
                  name="name"
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: '60%', mb: 7 }}
                  id="standard-basic"
                  value={user.email}
                  variant="standard"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: '60%', mb: 7 }}
                  id="standard-basic"
                  variant="standard"
                  value={product.name}
                  name="productName"
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: '60%', mb: 7 }}
                  id="standard-basic"
                  variant="standard"
                  value={product.price}
                  name="productPrice"
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: '60%', mb: 7 }}
                  id="standard-basic"
                  label="Your Address"
                  variant="standard"
                  name="address"
                  required
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: '60%', mb: 10 }}
                  id="standard-basic"
                  label="Your Phone Number"
                  variant="standard"
                  name="phone"
                  type="number"
                  required
                  onBlur={handleOnBlur}
                />

                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    padding: '10px 70px',
                    background: ' #FE495C',
                    width: '60%',
                  }}
                >
                  Purchase
                </Button>
              </form>
            </>
            {/* )} */}
            {/* {isLoading && <CircularProgress sx={{ mt: 7 }} />}
            {user?.email && (
              <Alert severity="success">User Created Successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>} */}
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Purchase;

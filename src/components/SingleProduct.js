import {
  Grid,
  Paper,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Hover = styled.div`
  &:hover {
    box-sizing: border-box;
    /* border: 1px solid black; */
    outline: 1px black solid;
    outline-offset: -19px;
    /* transition: 0.5s all ease-out; */
    /* transform: scale(1.1); */
  }
  &:hover .price {
    color: red;
  }
  &:hover .name {
    color: red;
  }
`;

const SingleProduct = ({ product }) => {
  const { _id, name, description, price, image } = product;
  const url = `/product/${_id}`;
  return (
    <Hover>
      <Link to={url} style={{ textDecoration: 'none' }}>
        <Grid item xs={2} sm={4} md={4} sx={{ m: 2 }}>
          <Card sx={{ minWidth: 345 }}>
            <CardMedia
              style={{
                width: '350px',
                height: '300px',
                //   margin: '0 auto',
              }}
              component="img"
              image={image}
              alt="shoe"
            />
            <CardContent>
              <Typography
                variant="caption"
                className="price"
                sx={{
                  position: 'relative',
                  top: '-40px',
                  left: '-150px',
                  background: 'white',
                  // width: '100%',
                  fontSize: '16px',
                  // fontWeight: '500',
                }}
              >
                $ {price}
              </Typography>
              <Typography
                className="name"
                sx={{ mb: 2, fontSize: '18px', fontWeight: 'bold' }}
                variant="h5"
                component="div"
              >
                {name}
              </Typography>

              <Typography
                variant="h6"
                // color="text.disabled"
                sx={{ fontSize: '14px' }}
              >
                {description}
              </Typography>
            </CardContent>
            {/* <Link to={url} style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              style={{
                padding: '5px 35px',
                fontSize: '14px',
                // background: 'linear-gradient(to right, #ffaa00 , #ffaa00)',
                background: '#333',
                border: 'none',
                fontWeight: 400,
                marginBottom: '20px',
              }}
            >
              Buy Now
            </Button>
          </Link> */}
          </Card>
        </Grid>
      </Link>
    </Hover>
  );
};

export default SingleProduct;

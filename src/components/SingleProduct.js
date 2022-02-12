import {
  Grid,
  Paper,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';

const SingleProduct = ({ product }) => {
  const { _id, name, description, price, image } = product;
  return (
    <div>
      <Grid item xs={2} sm={4} md={4} sx={{ m: 2 }}>
        <Card sx={{ minWidth: 345 }}>
          <CardMedia
            style={{
              width: 'auto',
              height: '200px',
              //   margin: '0 auto',
            }}
            component="img"
            image={image}
            alt="bike"
          />
          <CardContent>
            <Typography sx={{ mb: 3 }} variant="h5" component="div">
              {name}
            </Typography>

            <Typography variant="h6" color="text.disabled">
              {description}
            </Typography>
          </CardContent>
          {/* <Link to={url} style={{ textDecoration: 'none' }}> */}
          <Button
            variant="contained"
            style={{
              padding: '7px 20px',
              background: 'linear-gradient(to right, #2FE1AE , #5Ce7ed)',
              fontSize: '16px',
              border: 'none',
              fontWeight: 700,
              marginBottom: '20px',
            }}
          >
            Buy Now
          </Button>
          {/* </Link> */}
        </Card>
      </Grid>
    </div>
  );
};

export default SingleProduct;

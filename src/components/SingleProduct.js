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

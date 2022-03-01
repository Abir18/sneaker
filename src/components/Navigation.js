import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const NavUnlisted = styled.ul`
  display: flex;
  a {
    text-decoration: none;
  }

  li {
    color: white;
    margin: 0 2rem;
    /* font-size: 1rem; */
    position: relative;
    list-style: none;
  }

  .current {
    li {
      border-bottom: 2px solid red;
    }
  }
`;

const Navigation = () => {
  const { user, logOutUser } = useAuth();
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#000' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <span style={{ color: '#FFE019', fontSize: '3rem' }}>S</span>
              <span style={{ marginTop: '20px', fontSize: '1.8rem' }}>
                NEAKERS
              </span>
            </Typography>

            <NavUnlisted>
              <NavLink to="/" activeClassName="current" exact>
                <li>HOME</li>
              </NavLink>
              <NavLink to="/products" activeClassName="current" exact>
                <li>PRODUCTS</li>
              </NavLink>
              <NavLink to="/contact" activeClassName="current" exact>
                <li>ABOUT US</li>
              </NavLink>
            </NavUnlisted>

            {/* <Link to="/products" style={{ textDecoration: 'none' }}>
            <Box sx={{ ml: 12 }}>
              <Button
                sx={{
                  px: 3,
                  fontSize: '1rem',
                  my: 2,
                  color: 'white',
                  display: 'block',
                }}
              >
                Products
              </Button>
            </Box>
          </Link>
          <Box sx={{ ml: 3 }}>
            <Button
              sx={{
                px: 3,
                fontSize: '1rem',
                my: 2,
                color: 'white',
                display: 'block',
              }}
            >
              Contact
            </Button>
          </Box> */}

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                // marginLeft: '10%',
              }}
            >
              {/* ======================================================= */}

              {user?.email ? (
                <>
                  <Box sx={{ ml: 32 }}>
                    <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          color: '#fff',
                          mr: 2,
                          '&:hover': {
                            color: '#5Ce7ed',
                          },
                        }}
                      >
                        DashBoard
                      </Typography>
                    </NavLink>
                  </Box>
                  <span style={{ margin: '5px 15px 0px 200px', color: '#fff' }}>
                    {user.displayName}{' '}
                  </span>
                  <Button
                    onClick={logOutUser}
                    variant="outlined"
                    color="inherit"
                    sx={{ color: '#fff' }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <NavLink to="/login" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{ ml: 80, color: '#fff' }}
                  >
                    Login
                  </Button>
                </NavLink>
              )}

              {/* ==================================================== */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ height: '15px', background: '#FFE019' }}
        >
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navigation;

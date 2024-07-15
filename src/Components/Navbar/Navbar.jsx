import React from 'react';
import { Grid, Typography } from '@mui/material';
import { stylesNavBar, stylesNavBartext } from '../../Components/Navbar/NavBarStyles.js';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget.jsx';

const Navbar = () => {
  return (
    <div>
      <Grid container sx={stylesNavBar} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
          <Link to="/">
            <img
              className="imagen_gorilla"
              src="https://res.cloudinary.com/dpcrzpruo/image/upload/v1718677836/logo_Silverback_xzk1su.png"
              alt="gorilla_logo"
              style={{ height: '94px' }}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
          <Link to={`/Category/electronics`} style={{ textDecoration: 'none' }}>
            <Typography sx={stylesNavBartext}>Electronics</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
          <Link to={`/Category/jewelery`} style={{ textDecoration: 'none' }}>
            <Typography sx={stylesNavBartext}>Jewelery</Typography>
          </Link>
        </Grid>

        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
          <Link to={`/Category/women's clothing`} style={{ textDecoration: 'none' }}>
            <Typography sx={stylesNavBartext}>Women's clothing</Typography>
          </Link>
        </Grid>

        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
          <Link to={`/Category/men's clothing`} style={{ textDecoration: 'none' }}>
            <Typography sx={stylesNavBartext}>Men's clothing</Typography>
          </Link>
        </Grid>

        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
          <CartWidget />
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;







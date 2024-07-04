// src/Pages/Category/CategoryContainer.jsx

import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import useCategoryFetch from '../../hooks/useCategoryFetch';
import { stylesNavBar } from '../../Components/Navbar/NavBarStyles.js';

const CategoryContainer = () => {
  const { category, type } = useParams();
  const items = useCategoryFetch(category, type);

  return (
    <div>
      <Grid container sx={stylesNavBar} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={4}>
          <Link to="/">
            <img
              className="imagen_gorilla"
              src="https://res.cloudinary.com/dpcrzpruo/image/upload/v1718677836/logo_Silverback_xzk1su.png"
              alt="gorilla_logo"
              style={{ height: '94px' }}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={44}>
          <Link to={`/category/gender`}>
            <Typography sx={stylesNavBar}>Gender</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Link to={`/category/status`}>
            <Typography sx={stylesNavBar}>Status</Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <div>
              <Typography>{item.name}</Typography>
              <Typography>{item.gender}</Typography>
              <Typography>{item.status}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CategoryContainer;



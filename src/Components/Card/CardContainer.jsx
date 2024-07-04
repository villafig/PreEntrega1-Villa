import React from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CardContainer = ({ productos }) => {
  return (
    <Grid container justifyContent="center" spacing={4}>
      {productos.map((producto) => (
        <Grid item xs={6} md={3} sm={3} lg={3} key={producto.id}>
          <Card>
            <CardActionArea>
              <Link to={`/ItemDetailContainer/${producto.id}`}>
                <CardMedia
                  component="img"
                  height="200"
                  image={producto.image}
                  alt={producto.title}
                  id={producto.id}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{ color: "black" }}>
                    {producto.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {producto.location ? producto.location.name : 'Ubicación desconocida'}
                  </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardContainer;





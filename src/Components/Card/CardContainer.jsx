import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CardStyles, CardStyle, ImageStyle, PriceStyle } from './CardStyle';

const CardContainer = ({ productos }) => {


  return (
    <Grid container justifyContent="center" spacing={4} sx={CardStyles}>
      {productos.map((producto) => (
        <Grid item xs={6} sm={6} md={3} lg={3} key={producto.id}>
          <Card sx={CardStyle}>
            <Link to={`/ItemDetailContainer/${producto.id}`}>
              <CardActionArea>
                <CardMedia
                  sx={ImageStyle}
                  component="img"
                  image={producto.image}
                  alt={producto.title}
                  id={producto.id}
                />
                <CardContent>
                  <Typography gutterBottom component="div" color="primary">
                    {producto.title}
                  </Typography>
                  <Typography gutterBottom component="div">
                    <h4 style={ PriceStyle }>Price</h4>
                  </Typography>
                  <Typography gutterBottom component="div">
                    <h4 style={ PriceStyle }>$</h4>
                  </Typography>
                  <Typography gutterBottom component="div" style={ PriceStyle }>
                    {producto.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardContainer;






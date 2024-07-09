import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { CardStyles, CardStyle, ImageStyle, PriceStyle } from '../../Components/Card/CardStyle'



const Category = ({ productos }) => {
  return (
    <Grid container justifyContent="center" spacing={4} sx={CardStyles}>
      {productos.map((producto) => (
        <Grid item xs={6} sm={6} md={3} lg={3} key={producto.id}>
          <Card sx={CardStyle}>
            <CardActionArea>
              <CardMedia
                sx={ImageStyle}
                component="img"
                height="200"
                image={producto.image}
                alt={producto.title}
              />
              <CardContent>
                <Typography gutterBottom component="div" color="textPrimary">
                  {producto.title}
                </Typography>
                <Typography gutterBottom component="div" color="textPrimary">
                  <h4 style={{ color: 'black' }}>Price</h4>
                </Typography>
                <Typography gutterBottom component="div" color="textPrimary">
                  <h4 style={ PriceStyle }>${producto.price}</h4>
                </Typography>
                <Typography gutterBottom component="div" color="textPrimary">
                  <h4 style={{ color: 'black' }}>Comprar</h4>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Category;





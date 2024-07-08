import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const CardContainer = ({ productos }) => {
  return (
    <Grid container justifyContent="center" spacing={4}>
      {productos.map((producto) => (
        <Grid item xs={6} sm={6} md={3}lg={3} key={producto.id}>
          <Card>
          <Link to={`/ItemDetailContainer/${producto.id}`}>
            <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={producto.image}
                  alt={producto.title}
                  id = {producto.id}
                />
                <CardContent>
                <Typography gutterBottom component="div" color={'primary'}>
                    {producto.title}
                  </Typography>
                  <Typography gutterBottom component="div" color={'secondary'}>
                  <h4 style={{ color: 'black' }}>Price</h4>
                  </Typography>
                  <Typography gutterBottom component="div" color={'black'}>
                  <h4 style={{ color: 'black' }}>$</h4>
                  </Typography>
                  <Typography gutterBottom component="div" color={'black'}>
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





import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import CounterContainer from '../../Components/Counter/CounterContainer';
import ItemDetailStyle from './ItemDetailStyle';

const ItemDetail = ({ producto, onAdd }) => {
  return (
    <div style={ItemDetailStyle}>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={producto.image}
                alt={producto.title}
              />
              <CardContent>
                <Typography gutterBottom component="div" style={{ color: "black" }}>
                  {producto.title}
                </Typography>
                <Typography gutterBottom component="div">
                  <h4 style={{ color: "black" }}>Price</h4>
                </Typography>
                <Typography gutterBottom component="div">
                  <h4 style={{ color: "black" }}>${producto.price}</h4>
                </Typography>
                <CounterContainer onAdd={onAdd} />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ItemDetail;







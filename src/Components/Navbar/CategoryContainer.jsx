
import { Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useCategoryFetch from '../../hooks/useCategoryFetch';

const CategoryContainer = () => {
  const { category, type } = useParams();
  const { items, loading, error, loadMore } = useCategoryFetch(category, type);

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h6">Error: {error.message}</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <div>
            <img src={item.image} alt={data.name} style={{ width: '100%', height: 'auto' }} />
            <Typography variant="h6">{item.name}</Typography>
            <Typography>{item.gender}</Typography>
            <Typography>{item.status}</Typography>
          </div>
        </Grid>
      ))}
      <button onClick={loadMore}>Load More</button>
    </Grid>
  );
};

export default CategoryContainer;






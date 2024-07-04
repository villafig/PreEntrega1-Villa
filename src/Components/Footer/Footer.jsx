import { Grid, Box, Typography, Paper } from '@mui/material';
import { stylesFooter } from "./footer";

function Footer() {
  return (
    <Grid container sx={stylesFooter}>
      <Grid item xs={12} md={6}>
        <Paper elevation={6} sx={stylesFooter}>
          <Grid container > 
            <Grid item xs={12} md={6}> 
                <Typography variant="h6" sx={stylesFooter}>Facebook</Typography>
                <Typography variant="h6" sx={stylesFooter}>Instagram</Typography>
                <Typography variant="h6" sx={stylesFooter}>Tik tok</Typography>
                <Typography variant="h6" sx={stylesFooter}>Twitter</Typography>
            </Grid>
            <Grid item xs={12} md={6}> 
                <Typography variant="h6" sx={stylesFooter}>Contacto</Typography>
                <Typography variant="h6" sx={stylesFooter}>5555 55 55 55 55</Typography>
                <Typography variant="h6" sx={stylesFooter}>Cumbres del Bosque</Typography>
                <Typography variant="h6" sx={stylesFooter}>negocio@gmail.com</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Footer;



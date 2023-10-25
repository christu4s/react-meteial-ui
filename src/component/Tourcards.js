import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import AccessTime from '@mui/icons-material/AccessTime';
import { WidthFull } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Link } from 'react-router-dom';

const theme = createTheme({
    components:{
        MuiTypography:{
            variants: [{
                props:{
                    variant:"body2"
                },
                style:{
                    fontSize:11
                }
            }, 
            {
                props:{
                    variant:"body3"
                },
                style:{
                    fontSize:9
                }
            },

            
        
        ]
        }
    }
})

const Tourcards = ({tour}) => {
    const [value, setValue] = React.useState(2);
  return (
    <Grid item xs={3}>
        <ThemeProvider theme={theme}>
          <Paper elevation={3} >
          <Link to={tour.id} underline="none"> <img src={tour.image ?? 'images/rose.JPG' } alt="image" className='img'/></Link>
            <Box padding={1}>
            <Typography component="h2" variant='subtitle1'>
                {tour.name}
            </Typography>
            </Box>
            <Box sx={{display:"flex", alignItems:"center"}}>
            <AccessTime sx={{width:12.5}}/>
                    <Typography variant='body2' component="p" marginLeft={0.5}>
                       {tour.duration} hours
                    </Typography>
            </Box>

            <Box sx={{display:"flex", alignItems:"center"}}>
            <Rating
                name="simple-controlled"
                value={tour.rating}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                precision={0.5}
                size='small'
            />
            <Typography variant='body3' component="p" marginLeft={0.5}>
            Reviews({tour.numberOfReviews})
            </Typography>
            </Box>
            <Box sx={{display:"flex", alignItems:"center"}}>
                <Typography variant='h6' component="h3" marginLeft={0.5}>
                   From C3  ${tour.price}
                </Typography>
            </Box>
          </Paper>
          </ThemeProvider>
        </Grid>
      
   )
}

export default Tourcards
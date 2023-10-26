import React from 'react';
import Tourcards from '../Tourcards';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import PersistentDrawerLeft from '../AppBar';
import cities from "../../data.json";
import { Typography } from '@mui/material';


const Home = () => {
  return (
    <div className="App">
      <PersistentDrawerLeft>
      <Container sx={{marginY:5}}>
      {
        cities.map((city) => (
          <>
          <Typography variant='h5' component='h2' marginTop={5} marginBottom={3}> Top {city.name} Tours</Typography>
          <Grid container spacing={5}>
              {city.tours.map((tour, index)=>(
                <Tourcards tour={tour} key={index}/>
              ))}
          </Grid>
        </>
        ))

      } 
       
      </Container>
      </PersistentDrawerLeft>
    </div>
  )
}

export default Home
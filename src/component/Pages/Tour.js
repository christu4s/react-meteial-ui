import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import ImageCollage from '../common/ImageCollage';
import SearchAppBar from '../AppBar';
import CommonAccordion from '../common/CommonAccordion'

const Tour = () => {
  return (
    <><SearchAppBar />
    <Container sx={{width:900}}>
        <Typography variant='h3' component="h1" marginTop={3}>
            Explore the world in Optm
        </Typography>
        <Box marginTop={3} sx={{display:"flex", displayDirection:"row"}}>
        <img src='images/rose.JPG' alt="image" height={320}/>
        <ImageCollage />
        </Box>
        <Box>
            <Typography variant='h6' component="h4" marginTop={3}>
                About this ticket
            </Typography>
            <Typography variant='paragraph' component="h4" marginTop={3}>
            About this ticket contentAbout this ticket contentAbout this ticket contentAbout this ticket contentAbout this ticket contentAbout this ticket contentAbout this ticket content
            </Typography>

        </Box>
    <Box>
    <Typography variant='h6' component="h4" marginY={3}>
                Frequently asked questions
     </Typography>
    <CommonAccordion />
    </Box>
   
    </Container>
    </>
  )
}

export default Tour
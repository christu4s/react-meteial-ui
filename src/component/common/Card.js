import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    border: "1px solid #D0D5DD !important",
  },
  boxContainer : {
  
    display:"flex",
    hieght:"100vh",
    justifyContent:"center",
    alignItems:"center",
    margin:"130px 80px",
  },
  box:{
    display:"flex",
    margin:"52px",
    justifyContent:"center",
    alignItems:"center"

  }
  }));


export default function BasicCard({children}) {
  const classes = useStyles();
  return (
    <Box className={classes.boxContainer}>
        <Card sx={{ width: 500 }} className={classes.cardContainer}>
          <Box className={classes.box}> 
            {children}
          </Box>
        </Card>
    </Box>
  );
}
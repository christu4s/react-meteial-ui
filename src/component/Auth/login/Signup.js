import React from 'react';
import BasicCard from '../../common/Card';
import { Grid, Button, TextField } from '@mui/material';
import CommonTypography from "../../common/CommonTypography";
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@mui/styles";



const useStyles = makeStyles((theme) => ({
  buttonContained: {
    fontSize: 14,
    color: "#FFF !important",
  },
  buttonOutlined: {
    fontSize: 14,
  },
}));



const Signup = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <BasicCard>
      <Grid container spacing={2}>
        <CommonTypography variant="subtitle2" gutterBottom >
        Signup
        </CommonTypography>
        <Grid item sx={12}>
          <TextField fullWidth label="Username" id="fullWidth" sx={{width:390}} size="small" />
        </Grid>
        <Grid item sx={12}>
          <TextField fullWidth label="Email" id="fullWidth" sx={{width:390}} size="small" />
        </Grid>
        <Grid item sx={12}>
          <TextField fullWidth label="Mobile" id="fullWidth" sx={{width:390}} size="small" />
        </Grid>
        <Grid item sx={12}>
          <TextField fullWidth label="Password" id="fullWidth" sx={{width:390}} size="small" />
        </Grid>
        <Grid item xs={12}>
        <Button
            className={classes.buttonContained}
            fullWidth
            variant="contained"
            onClick={()=>navigate("/home")}
           >Signup</Button>
        </Grid>
        <Grid item xs={12}>
        <Button
            className={classes.buttonOutlined}
            fullWidth
            variant="outlined"
            onClick={()=>navigate("/login")}
          >Login</Button>
        </Grid>
      </Grid>
    </BasicCard>
  )
}

export default Signup
import React from "react";
import Box from "@mui/material/Box";
import { Button, Card, Grid } from "@mui/material";
import BasicCard from "../../common/Card";
import CommonButton from "../../common/CommonButton"
import CommonTypography from "../../common/CommonTypography"
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  buttonContained: {
    fontSize: 14,
    color: "#FFF !important",
  },
  buttonOutlined: {
    fontSize: 14,
  },
}));

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <BasicCard>
      <Grid container spacing={2}>
        <CommonTypography variant="subtitle2" gutterBottom >
        Welcome back! Please enter your details to log in
        </CommonTypography>
        <Grid item xs={12}>
        <Button
            className={classes.buttonContained}
            fullWidth
            variant="contained"
            onClick={()=>navigate("/signup")}
           >New user</Button>
        </Grid>
        <Grid item xs={12}>
        <Button
            className={classes.buttonOutlined}
            fullWidth
            variant="outlined"
            onClick={()=>navigate("/loginuser")}
          >Existing user</Button>
        </Grid>
      </Grid>
    </BasicCard>
  );
};

export default Login;

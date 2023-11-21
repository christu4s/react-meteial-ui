import React, { useEffect, useState } from 'react';
import BasicCard from '../../common/Card';
import { Grid, Button, TextField } from '@mui/material';
import CommonTypography from "../../common/CommonTypography";
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import * as yup from "yup";
import { useFormik } from "formik";
import { useAuth } from '../Auth';
import CommonBackdrop from '../../common/CommonBackdrop';


const useStyles = makeStyles((theme) => ({
  buttonContained: {
    fontSize: 14,
    color: "#FFF !important",
  },
  buttonOutlined: {
    fontSize: 14,
  },
}));



const LoginUser = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const Auth = useAuth();
  const [open,setOpen] = useState(false);

  useEffect(() => {
    if(Auth.user){
      navigate('/home');
    }
  }, [Auth.user]);

  const validationSchema = yup.object({
    username: yup.string().required("Username is required"),
    
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be 8 or more characters")
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])\w+/,
        "Password should contain at least one uppercase and lowercase character"
      )
      .matches(/\d/, "Password should contain at least one number")
      .matches(
        /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
        "Password should contain at least one special character"
      )
  });

  

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
     },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if(values.username === 'chris') {
        setOpen(true);
        setTimeout(() => {
          document.cookie = "user="+values.username+"; expires=0; path=/";  
          Auth.login(values.username);
          navigate("/");
      }, 1000);
       
      }
    },
  });
  return (
    <BasicCard>
      <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <CommonTypography variant="subtitle2" gutterBottom >
        Login
        </CommonTypography>
        <Grid item xs={12}>
          <TextField fullWidth label="Username"
              name="username"
              id="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              sx={{ width: 390 }}
              size="small"
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              InputLabelProps={{ shrink: true }} />
        </Grid>
       
        <Grid item xs={12}>
          <TextField fullWidth 
              label="Password"
              name="password"
              id="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              sx={{ width: 390 }}
              size="small"
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputLabelProps={{ shrink: true }} />
        </Grid>
        <Grid item xs={12}>
        <Button
            className={classes.buttonContained}
            fullWidth
            variant="contained"
            type="submit"
           >Login</Button>
        </Grid>
        <Grid item xs={12}>
        <Button
            className={classes.buttonOutlined}
            fullWidth
            variant="outlined"
            onClick={()=>navigate("/signup")}
          >Signup</Button>
        </Grid>
      </Grid>
      </form>
      <CommonBackdrop open={open}/>
    </BasicCard>
  )
}

export default LoginUser
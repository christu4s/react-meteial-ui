import React, { useEffect, useState } from "react";
import BasicCard from "../../common/Card";
import { Grid, Button, TextField } from "@mui/material";
import CommonTypography from "../../common/CommonTypography";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import * as yup from "yup";
import { useFormik } from "formik";
import { useAuth } from '../Auth';
import CommonBackdrop from "../../common/CommonBackdrop";

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
  const Auth = useAuth();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if(Auth.user){
      navigate('/home');
    }
  }, [Auth.user]);

  const validationSchema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup
      .string()
      .email("Please enter the valid email")
      .required("Email is required"),
    mobile: yup.string().required("Mobile is required"),
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
      ),
    confirmPassword: yup.string().when("password", (password, field) => {
      if (password) {
        return field
          .required("The passwords do not match")
          .oneOf([yup.ref("password")], "The passwords do not match");
      }
    }),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      mobile: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
     
      if(values.username === 'chris') {
        setOpen(true);
        setTimeout(() => {
          Auth.login(values.username);
          document.cookie = "user="+values.username+"; expires=0; path=/";  
          navigate("/");
      }, 1000);
      }
      
    },
  });
  return (
    <BasicCard>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <CommonTypography variant="subtitle2" gutterBottom>
            Signup
          </CommonTypography>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              id="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              sx={{ width: 390 }}
              size="small"
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              sx={{ width: 390 }}
              size="small"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mobile"
              name="mobile"
              id="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              sx={{ width: 390 }}
              size="small"
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              sx={{ width: 390 }}
              size="small"
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="confirmPassword"
              onChange={formik.handleChange}
              name="confirmPassword"
              id="confirmPassword"
              value={formik.values.confirmPassword}
              sx={{ width: 390 }}
              size="small"
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.buttonContained}
              fullWidth
              variant="contained"
              type="submit"
            >
              Signup
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button
              className={classes.buttonOutlined}
              fullWidth
              variant="outlined"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <CommonBackdrop open={open}/>
    </BasicCard>
  );
};

export default Signup;

import React from "react";
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles'
const useStyles = makeStyles((theme) => ({
    appBar: {
      top: "auto",
      bottom: 0
    },
    typo: {
      flexGrow: 1,
      textAlign: "center"
    }
  }));

const CommonTypography = ({ children, variant, props }) => {
  const classes = useStyles();
  return (
    <Typography variant={variant} {...props} className={classes.typo}>
      {children}
    </Typography>
  );
};

export default CommonTypography;

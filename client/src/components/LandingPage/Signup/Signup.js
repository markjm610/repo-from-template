import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SideImage from "../SideImage";
import SignupForm from "./SignupForm";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
  },
  rightSide: {
    height: '100%',
    width: '100%'
  },
}));


const Signup = (props) => {
  const classes = useStyles();
  const { user } = props;

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={5} lg={5}>
        <SideImage />
      </Grid>
      <Grid item xs={12} sm={12} md={7} lg={7} container justify="center" className={classes.rightSide}>
        <SignupForm />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};


export default connect(mapStateToProps, null)(Signup);

import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { register } from "./store/utils/thunkCreators";
import sideImage from './images/bg-img.png';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
  },
  imageBox: {
    height: '100vh',
    width: '100%'
  },
  sideImage: {
    height: '100vh',
    width: '100%',
    zIndex: 1,
  },
  sideImageOverlay: {
    height: '100%',
    width: '100%',
    backgroundColor: 'blue',
    zIndex: 2,
    position: 'absolute'
    // opacity: '85%'
  },
  rightSide: {
    height: '100%',
    width: '100%'
  },
  form: {
    width: '100%',
    // display: 'flex',
    // justifyContent: 'center',
    // flexDirection: 'column'
  },
  formControl: {
    width: '100%'
  },
  textField: {
    width: '100%'
  }
}));

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container className={classes.root}>
      <Grid item md={5} lg={5}>
        <Box className={classes.imageBox}>
          <img src={sideImage} alt="" className={classes.sideImage} />
          {/* <div className={classes.sideImageOverlay} /> */}
        </Box>
      </Grid>
      <Grid item md={7} lg={7} className={classes.rightSide} container justify="center">
        {/* <Grid className={classes.rightSide} container direction="column" justify="center" alignItems="center"> */}
        <Grid item lg={12}>
          <Typography>Create an account.</Typography>
          <Typography>Already have an account?</Typography>
          <Button onClick={() => history.push("/login")}>Login</Button>
        </Grid>
        <Grid item lg={8} container justify="center">
          <form className={classes.form} onSubmit={handleRegister}>
            <Grid item lg={12}>
              <FormControl className={classes.formControl}>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  required
                  className={classes.textField}
                />
              </FormControl>
            </Grid>
            <Grid item lg={12}>
              <FormControl className={classes.formControl}>
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  required
                  className={classes.textField}
                />
              </FormControl>
            </Grid>
            <Grid item lg={12}>
              <FormControl error={!!formErrorMessage.confirmPassword} className={classes.formControl}>
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  required
                  className={classes.textField}
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item lg={12}>
              <FormControl error={!!formErrorMessage.confirmPassword} className={classes.formControl}>
                <TextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                  required
                  className={classes.textField}
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item container justify="center" lg={12}>
              <Grid item>
                <Button type="submit" variant="contained" size="large">
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
    width: '100%',
    position: 'relative'
  },
  sideImage: {
    height: '100vh',
    width: '100%',
    zIndex: 1,
    position: 'absolute'
  },
  sideImageOverlay: {
    height: '100%',
    width: '100%',
    backgroundImage: `linear-gradient(rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0.85)), url(${sideImage})`,
    backgroundSize: 'cover',
  },
  rightSide: {
    height: '100%',
    width: '100%'
  },
  switchFormText: {
    color: "#9CADC8"
  },
  switchFormButton: {
    backgroundColor: "white",
    color: '#3A8DFF',
    boxShadow: '0px 0px 10px 2px lightgray',
    height: 60,
    width: 140
  },
  formHeading: {
    fontWeight: '900',
  },
  form: {
    width: '100%',
  },
  formControl: {
    width: '100%'
  },
  textField: {
    width: '100%'
  },
  submitButton: {
    backgroundColor: "#3A8DFF",
    color: 'white',
    height: 60,
    width: 160
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
        {/* <Box className={classes.imageBox}>
          <img src={sideImage} alt="" className={classes.sideImage} /> */}
        <div className={classes.sideImageOverlay} />
        {/* </Box> */}
      </Grid>
      <Grid item md={7} lg={7} className={classes.rightSide} container justify="center">
        <Grid item md={12} lg={12} container justify="flex-end" alignItems="center" spacing={5}>
          <Grid item>
            <Typography className={classes.switchFormText}>Already have an account?</Typography>
          </Grid>
          <Grid item>
            <Button className={classes.switchFormButton} onClick={() => history.push("/login")}>Login</Button>
          </Grid>
        </Grid>
        <Grid item md={8} lg={8}>
          <form className={classes.form} onSubmit={handleRegister}>
            <Grid container spacing={6}>
              <Grid item>
                <Typography variant="h4" className={classes.formHeading}>Create an account.</Typography>
              </Grid>
              <Grid item md={12} lg={12}>
                <FormControl className={classes.formControl}>
                  <TextField
                    InputLabelProps={{
                      required: false,
                      style: {
                        color: "#9CADC8"
                      }
                    }}
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    required
                    className={classes.textField}
                  />
                </FormControl>
              </Grid>
              <Grid item md={12} lg={12}>
                <FormControl className={classes.formControl}>
                  <TextField
                    InputLabelProps={{
                      required: false,
                      style: {
                        color: "#9CADC8"
                      }
                    }}
                    label="E-mail address"
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    required
                    className={classes.textField}
                  />
                </FormControl>
              </Grid>
              <Grid item md={12} lg={12}>
                <FormControl error={!!formErrorMessage.confirmPassword} className={classes.formControl}>
                  <TextField
                    InputLabelProps={{
                      required: false,
                      style: {
                        color: "#9CADC8"
                      }
                    }}
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
              <Grid item md={12} lg={12}>
                <FormControl error={!!formErrorMessage.confirmPassword} className={classes.formControl}>
                  <TextField
                    InputLabelProps={{
                      required: false,
                      style: {
                        color: "#9CADC8"
                      }
                    }}
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
                <Button type="submit" variant="contained" size="large" className={classes.submitButton}>
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
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

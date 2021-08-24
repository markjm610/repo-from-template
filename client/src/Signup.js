import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
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
    color: 'white',
  },
  sideImageGrid: {
    height: '100%'
  },
  sideImageIcon: {
    marginBottom: 50,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: 50
    }
  },
  sideImageText: {
    textAlign: 'center',
    marginBottom: 50
  },
  rightSide: {
    height: '100%',
    width: '100%'
  },
  switchFormText: {
    color: "#9CADC8",
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginTop: 30
    }
  },
  switchFormButton: {
    backgroundColor: "white",
    color: '#3A8DFF',
    boxShadow: '0px 0px 10px 2px lightgray',
    height: 60,
    width: 140,
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

const textFieldInputLabelProps = {
  required: false,
  style: {
    color: "#9CADC8",
    fontSize: 20,
  }
};

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
      <Grid item xs={12} sm={12} md={5} lg={5}>
        <div className={classes.sideImageOverlay}>
          <Grid className={classes.sideImageGrid} container justify="center" alignItems="center" alignContent="center">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className={classes.sideImageIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                </svg>
              </div>
            </Grid>
            <Grid item xs={10} sm={10} md={8} lg={8}>
              <Typography variant="h4" className={classes.sideImageText}>Converse with anyone with any language</Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={7} lg={7} className={classes.rightSide} container justify="center">
        <Grid className={classes.switchFormContainer} item xs={12} sm={12} md={12} lg={12} container justify="flex-end" alignItems="center" spacing={5}>
          <Grid item xs={12} sm={7} md={9} lg={9}>
            <Typography className={classes.switchFormText}>Already have an account?</Typography>
          </Grid>
          <Grid item container justify="center" xs={12} sm={5} md={3} lg={3}>
            <Grid item>
              <Button className={classes.switchFormButton} onClick={() => history.push("/login")}>Login</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8}>
          <form className={classes.form} onSubmit={handleRegister}>
            <Grid container spacing={6}>
              <Grid item>
                <Typography variant="h4" className={classes.formHeading}>Create an account.</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormControl className={classes.formControl}>
                  <TextField
                    InputLabelProps={textFieldInputLabelProps}
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    required
                    className={classes.textField}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormControl className={classes.formControl}>
                  <TextField
                    InputLabelProps={textFieldInputLabelProps}
                    label="E-mail address"
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    required
                    className={classes.textField}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormControl error={!!formErrorMessage.confirmPassword} className={classes.formControl}>
                  <TextField
                    InputLabelProps={textFieldInputLabelProps}
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
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormControl error={!!formErrorMessage.confirmPassword} className={classes.formControl}>
                  <TextField
                    InputLabelProps={textFieldInputLabelProps}
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
              <Grid item container justify="center" xs={12} sm={12} md={12} lg={12}>
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

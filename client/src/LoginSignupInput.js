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

const LoginSignupInput = (props) => {
    const classes = useStyles();

    const { label, ariaLabel, type, name, required } = props;

    return (
        <TextField
            InputLabelProps={textFieldInputLabelProps}
            label={label}
            aria-label={ariaLabel}
            type={type}
            inputProps={{ minLength: 6 }}
            name={name}
            required={required}
            className={classes.textField}
        />
    );
};

export default LoginSignupInput;
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
import { register } from "../../../store/utils/thunkCreators";

const useStyles = makeStyles((theme) => ({
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

const SignupForm = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const { register } = props;
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

    return (
        <>
            <Grid className={classes.switchFormContainer} item xs={12} sm={12} md={12} lg={12} container justify="flex-end" alignItems="center" >
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
        </>
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
        register: (credentials) => {
            dispatch(register(credentials));
        },
    };
};

export default connect(null, mapDispatchToProps)(SignupForm);

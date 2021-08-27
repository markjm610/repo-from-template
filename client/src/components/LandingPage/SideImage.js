import React from "react";
import {
    Grid,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import sideImage from '../../images/bg-img.png';

const useStyles = makeStyles((theme) => ({
    sideImageOverlay: {
        height: '100%',
        width: '100%',
        backgroundImage: `linear-gradient(rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0.85)), url(${sideImage})`,
        backgroundSize: 'cover',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
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
}));


const SideImage = () => {
    const classes = useStyles();

    return (
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
    );
};

export default SideImage;

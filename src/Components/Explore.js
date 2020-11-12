import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: "10px",
        textAlign: 'center',
    },
    head: {
        padding: theme.spacing(2),
        margin: "10px",
        textAlign: 'center',
        color: "red"
    },
}));

export default function Explore(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container style={{
                display: "block",
                height: "500px",
                width: "250px",
                position: "fixed",
                zIndex: "-1",
                top: "0",
                right: "0",
                color: "white",
                backgroundColor: "#9bc3e8",
                overflowX: "hidden",
                transition: "0.5s",
                padding: "20px",
                alignContent: "center",
                paddingTop: "60px"

            }}>
                <Grid item xs={12}>
                    <h3 className={classes.head}>Node Information</h3>
                </Grid>

                <Grid item xs={12}>
                    <h4 className={classes.paper}>Name: {props.info.cust_name}</h4>
                </Grid>
                <Grid item xs={12}>
                    <h4 className={classes.paper}>Address Line 1: {props.info.Address_Line_1}</h4>
                </Grid>
                <Grid item xs={12}>
                    <h4 className={classes.paper}>Address Line 2: {props.info.Address_Line_2}</h4>
                </Grid>
                <Grid item xs={12}>
                    <h4 className={classes.paper}>ZIP CODE: {props.info.ZIP_CD}</h4>
                </Grid>
                <Button variant="contained" color="primary" onClick={props.closed}>Cancel</Button>
            </Grid>

        </div>

    );
}
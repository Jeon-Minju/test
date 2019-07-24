import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    gridContainer: {
      paddingTop:"20px"
    },
    text: {
      color: "#434f5b",
      fontWeight:"bold",
      fontSize: "0.875rem",
      [theme.breakpoints.down("md")]: {
        fontSize:"0.7rem"
      },
    },
    button_gridmargin: {
      marginTop: '20px'
    },
    button: {
      color: '#ffffff',
      backgroundColor: '#297bff',
      marginTop: '20px',
      '&:hover': {
        backgroundColor:"rgb(28,86,178)"
      }
    },
}));


export default function SideCard() {

    const classes = useStyles();

    return (
        <Paper>
          <Box display="flex">
            <Grid container className={classes.gridContainer}>
              <Grid item md={5} lg={5}>
                <Typography component="p" align="right" className={classes.text}>영업일</Typography>
              </Grid>
              <Grid item md={7} lg={7}>
                <Typography component="p" align="center" className={classes.text}>2019년 6월 22일</Typography>
              </Grid>
              <Grid item md={5} lg={5}>
                <Typography component="p" align="right" className={classes.text}>최근 수정일</Typography>
              </Grid>
              <Grid item md={7} lg={7}>
                <Typography component="p" align="center" className={classes.text}>2019년 6월 22일</Typography>
              </Grid>
              <Box width="100%" alignContent="flex-end">
                <Button
                  fullWidth
                  color="primary"
                  size="large"
                  className={classes.button}
                >
                  반영하기
                </Button>
              </Box>
            </Grid>
          </Box>
        </Paper>
    );
}

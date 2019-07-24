import React from 'react';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import ArrowbackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
  cardHeader: {
    padding: '10px 0px',
    width: '100%',
    textAlign:"center"
  },
  backButton: {
    color: "#434f5b",
    backgroundColor:"transparent"
  },
  leftIcon: {
    marginRight:theme.spacing(1)
  },
  textLeft: {
    color: "#434f5b",
    marginRight: "20px",
    [theme.breakpoints.down("xs")]: {
      marginRight: "10px",
      fontSize:"0.7rem"
    },
  },
  textRight: {
    color: "#434f5b",
    [theme.breakpoints.down("xs")]: {
      fontSize:"0.7rem"
    },
  },
}));


export default function HeadCard() {
    const classes = useStyles();

    return (
      <div>
        <Hidden smDown>
          <div className={classes.contentHeader}>
            <Button className={classes.backButton} onCick={() => Router.back()}>
              <ArrowbackIcon fontSize="small" className={classes.leftIcon}/>
              뒤로가기
            </Button>
          </div>
        </Hidden>
        <Hidden mdUp>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Paper className={classes.cardHeader}>
                <Typography
                  component="p"
                  display="inline"
                  className={classes.textLeft}
                >
                  <strong>영업일 : 2019년 6월 22일</strong>
                </Typography>
                <Typography
                  component="p"
                  display="inline"
                  className={classes.textRight}
                >
                  <strong>최근수정일 : 2019년 6월 22일</strong>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Hidden>
      </div>
    );
}

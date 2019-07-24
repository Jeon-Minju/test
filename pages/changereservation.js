import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import MenuBar from '../components/menubar';
import Chatbot from '../components/chatbot';
import HeadCard from '../components/card/HeadCard';
import SideCard from '../components/card/SideCard';
import theme from '../static/theme';
import '../static/style.scss';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  toolbar: theme.mixins.toolbar,
  content: {
    color: "#434f5b",
    backgroundColor: '#f9fafc',
    height:'100vh',
    flexGrow: 1,
    paddingTop: theme.spacing(3)
  },
  flexGrid: {
    display:"flex",
  },
  fab : {
    backgroundColor:"#297bff",
    position:"fixed",
    right:"20px",
    bottom:"20px"
  }
});

class ChangeReservation extends React.Component {
    render() {
        const {classes,type} = this.props;

    return (
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <CssBaseline />
            <MenuBar />
            <main className={classes.content}>
              <div className={classes.toolbar} />

                <Container maxWidth="xl">
                  <HeadCard />
                  <Grid container spacing={2} className={classes.flexGrid}>
                    <Grid item sm={12} md={9}>
                    <Chatbot
                      type={"list02"}
                    />
                    </Grid>
                    <Hidden smDown>
                      <Grid item md={3}>
                        <SideCard />
                      </Grid>
                    </Hidden>
                  </Grid>
                  <Hidden mdUp>
                    <Fab color="primary" aria-label="Add" className={classes.fab}>
                      <AddIcon />
                    </Fab>
                  </Hidden>
                </Container>
              </main>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(ChangeReservation);

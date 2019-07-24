import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import theme from '../static/theme';
import '../static/style.scss';
import MenuBar from '../components/menubar';
import MainTable from '../components/datatable/MainTable';
import MainCard from '../components/card/MainCard';

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
  contentHeader: {
    display: "flex",
    marginBottom: "20px"
  },
  contentHeaderLink: {
    marginLeft: "auto"
  },
  headerLinkItem1: {
    fontSize:".6rem",
    paddingRight : "5px",
    borderRight : "1px solid #000"
  },
  headerLinkItem2: {
    fontSize:".6rem",
    color: "#297bff",
    padding : "0 5px 0 5px",
    borderRight : "1px solid #000"
  },
  headerLinkItem3: {
    fontSize:".6rem",
    paddingLeft : "5px",
  }
});

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

	render () {
    const { classes } = this.props;
		return (
      <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />

        <MenuBar/>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Container maxWidth="xl">
            <div className={classes.contentHeader}>
              <Hidden smDown>
                <Typography
                  className={classes.contentHeaderText}
                  variant="h5"
                  component="h5"
                >
                  <strong>$ 주문 관리</strong>
                </Typography>
              </Hidden>
              <div className={classes.contentHeaderLink}>
                <Link
                  variant="p"
                  color="textPrimary"
                  href="#"
                  className={classes.headerLinkItem1}
                >
                  지난 주문 관리하기
                </Link>
                <Link
                  variant="p"
                  href="#"
                  color="textPrimary"
                  className={classes.headerLinkItem2}
                >
                  <strong>새로운 주문 보기</strong>
                </Link>
                <Link
                  variant="p"
                  color="textPrimary"
                  href="#"
                  className={classes.headerLinkItem3}
                >
                  새로 고침
                </Link>
              </div>
            </div>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <MainCard
                  title={'영업일'}
                  content={'2019년6월22일'}
                />
              </Grid>
              <Grid item xs={4} sm={3}>
                <MainCard
                  title={'주문'}
                  content={'15'}
                  type={'건'}
                />
              </Grid>
              <Grid item xs={4} sm={3}>
                <MainCard
                  title={'문의'}
                  content={'5'}
                  type={'건'}
                />
              </Grid>
              <Grid item xs={4} sm={3}>
                <MainCard
                  title={'예상매출'}
                  content={'250,000'}
                  type={'원'}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <MainTable/>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
      </MuiThemeProvider>
		);
	}
}

export default withStyles(styles)(MainPage);

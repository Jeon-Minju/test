import React from 'react';
import 'date-fns';
import Link from 'next/link';
import Router from 'next/router';
import Calendar from 'react-calendar/dist/entry.nostyle';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import ArrowbackIcon from '@material-ui/icons/ArrowBack';
import DropDownButton from '../button/DropDown';
import URLDialog from '../dialog/URLdialog';
import LogoImg from "../../static/assets/images/white.png"
import RobotImg from "../../static/assets/images/robot-solid.png"
import FileImg from "../../static/assets/images/file-export-solid.png"


const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  flexWrapper : {
    width:"100%",
    display:"flex"
  },
  appBar: {
    color: "#434f5b",
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      textAlign: "center"
    },
  },
  sidebar: {
    height: "100vh",
    color: "#fff",
    backgroundColor: "#0e0e3a"
  },
  logoImg : {
    float: 'left',
    width: '40px',
    margin: '10px',
    cursor:"pointer"
  },
  buttonImg : {
    width : '20px',
    marginRight : '5px'
  },
  linkList : {
    textAlign : "center",
    marginTop : "20px",
    backgroundColor: "#0e0e3a"
  },
  upperButton : {
    backgroundColor: "#297bff",
    width: drawerWidth - 20,
  },
  bottomButton : {
    backgroundColor: "#297bff",
    width: drawerWidth - 20,
    [theme.breakpoints.up('md')]: {
      marginTop: "60px",
    }
  },
  bakcButton: {
    backgroundColor:"transparent",
    border:"none"
  },
  link : {
    '&:hover' : {
      color:"#297bff"
    },
    '&:active' : {
      color:"#297bff"
    },
  }
});


class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      mobileOpen: false,
      date: new Date()
    };
  }

  handleClickCalendar = date => this.setState({ date })

  handleDrawerToggle = () => {
    this.setState({
      mobileOpen: !this.state.mobileOpen
    });
  }

  handleClickOpen = () => {
    this.setState({
      dialogOpen: true,
    });
    console.log(this.state.dialogOpen)
  };

  handleClose = () => {
    this.setState({ dialogOpen: false });
  };


  render() {
    const {
      classes
    } = this.props;
    const {
      mobileOpen,
      date,
      dialogOpen
    } = this.state;

    const drawer = (
      <div className={classes.sidebar}>
        <div className={classes.toolbar}>
          <div className={classes.flexWrapper}>
            <Link prefetch href="/">
              <img src={LogoImg} className={classes.logoImg} />
            </Link>
            <Hidden mdUp>
              <DropDownButton
                type={'sidebar'}
              />
            </Hidden>
          </div>
        </div>
        <Divider />
        <Calendar
          className={classes.calendar}
          onClick={this.handleClickCalendar}
          value={this.state.date}
        />
        <Divider />
        <div className={classes.linkList}>
          <Button
            color="primary"
            variant="contained"
            fullWidth="true"
            className={classes.upperButton}
          >
            <img src={RobotImg} className={classes.buttonImg} />
            챗봇 만들기
          </Button>
          <List dense="true">
            {[
              <Link prefetch href="/basicinfo" className={classes.link}><span>- 기본정보</span></Link>,
              <Link prefetch href="/addmenu" className={classes.link}><span>- 메뉴등록</span></Link>,
              <Link prefetch href="/reservation" className={classes.link}><span>- 안내/예약</span></Link>,
              <Link prefetch href="/changereservation" className={classes.link}><span>- 예약 수정/취소</span></Link>,
              <Link prefetch href="/question" className={classes.link}><span>- 추가 문의사항</span></Link>
            ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon> - </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Button
            color="primary"
            variant="contained"
            className={classes.bottomButton}
            fullWidth="true"
            onClick={this.handleClickOpen}
          >
            <img src={FileImg} className={classes.buttonImg} />
            챗봇 내보내기
          </Button>
        </div>
      </div>
    );

    return (
      <React.Fragment>
        <URLDialog
          open={this.state.dialogOpen}
          onClose={this.handleClose}
        />
        <AppBar
          position="fixed"
          className={classes.appBar}
          color="default"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.title}>
              <Typography
                variant="h6"
                noWrap
              >
                카페 애일
              </Typography>
            </div>
            <Hidden smDown>
              <DropDownButton
                type={'account'}
              />
            </Hidden>
            <Hidden mdUp>
              <button className={classes.bakcButton} onClick={() => Router.back()}>
                <ArrowbackIcon />
              </button>
            </Hidden>
          </Toolbar>
        </AppBar>

        <nav className={classes.drawer} aria-label="sidebar">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden mdUp implementation="css">
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(MenuBar);

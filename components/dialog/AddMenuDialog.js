import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ImageIcon from '@material-ui/icons/Image';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import AddMenuTable from '../datatable/AddMenuTable';
import { compose } from 'recompose';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    color:"#434f5b",
  },
  header: {
    [theme.breakpoints.down("xs")]: {
        fontSize:"1rem",
    }
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "#434f5b"
  },
  subTitle:{
    fontWeight:"700",
    marginLeft:"10px"
  },
  girdContainer: {
    marginTop:"10px"
  },
  imgInput: {
    display:"none"
  },
  alignGrid: {
    textAlign:"right"
  },
  formControl: {
    width:"100%",
    height:"100%",
    border:"1px solid rgba(0,0,0,0.23)",
    textAlign:"center",
    justifyContent:"center",
    borderRadius:"4px"
  },
  imageIcon: {
    fontSize:"2rem",
    color:"#434f5b"
  },
  insertButton: {
    backgroundColor:"#a0a0a0",
    color:"#fff",
    boxShadow:"none"
  }
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant="h6" align="center" className={classes.header}>{children}</Typography>
        {onClose ? (
          <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
              <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    justifyContent:"center"
  }
}))(MuiDialogActions);

class AddMenuDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { classes, open, onClose } = this.props;
    return (
        <div>
          <Dialog
            onClose={onClose}
            aria-labelledby="addmenuDialog"
            open={open}
            maxWidth="md"
            fullScreen={
              isWidthUp('sm', this.props.width) ? false
              : true
            }
          >
          <DialogTitle id="chatbotURL" onClose={onClose}>
            메뉴추가
          </DialogTitle>
          <DialogContent>
            <Typography
              className={classes.subTitle}
              color="primary"
              variant="p"
            >
              새로운 메뉴
            </Typography>
            <Grid container spacing={2} className={classes.girdContainer}>
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  label='메뉴이름'
                  variant="outlined"
                  fullWidth
                >
                </TextField>
              </Grid>
              <Hidden smDown>
                <Grid item sm={4} md={6}>
                  <TextField
                    label='메뉴설명'
                    variant="outlined"
                    fullWidth
                  >
                  </TextField>
                </Grid>
              </Hidden>
              <Grid item xs={8} sm={4} md={2}>
                <TextField
                  label='가격'
                  variant="outlined"
                  fullWidth
                >
                </TextField>
              </Grid>
              <Grid item xs={4} sm={2} md={2}>
                <FormControl
                  fullWidth
                  className={classes.formControl}
                >
                  <input accept="image/*" className={classes.imgInput} id="icon-button" type="file"/>
                  <label htmlFor="icon-button">
                    <ImageIcon className={classes.imageIcon}/>
                  </label>
                </FormControl>
              </Grid>
              <Hidden mdUp>
                <Grid item xs={12} sm={12}>
                  <TextField
                    label='메뉴설명'
                    variant="outlined"
                    fullWidth
                  >
                  </TextField>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={12} className={classes.alignGrid}>
                <Button
                  variant="contained"
                  className={classes.insertButton}
                >
                  새로 추가
                </Button>
              </Grid>
              <Divider />
              <Typography
                className={classes.subTitle}
                color="primary"
                variant="p"
              >
                기존 메뉴
              </Typography>
              <Grid item xs={12} sm={12}>
                <AddMenuTable />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              size="large"
            >
              등록 완료
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  withWidth(),
)(AddMenuDialog)

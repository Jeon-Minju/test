import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FAQIcon from '@material-ui/icons/HelpOutline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
    inputURL: {
      [theme.breakpoints.down("xs")]: {
          fontSize:"0.875rem",
      }
    },
    copyButton : {
      color: "#297bff",
      border: "1px solid #297bff",
      backgroundColor: "#fff",
      padding: "13px",
      fontSize:"1rem",
      float:"right",
      cursor:"pointer",
      [theme.breakpoints.down("xs")]: {
          fontSize:"0.875rem",
      }
    },
    textBody: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      lineHeight:"2",
      [theme.breakpoints.down("xs")]: {
        padding: "0"
      }
    },
    flexHead: {
      display:"flex"
    },
    faqIcon: {
      color:"#dadada",
      fontSize:"2rem",
      [theme.breakpoints.down("xs")]: {
        fontSize:"1.6rem",
      }
    },
    title: {
      color:"#dadada",
      marginLeft:"5px",
      [theme.breakpoints.down("xs")]: {
        fontSize:"1rem",
      }
    },
    content: {
      color:"#434f5b",
      marginLeft: "20px",
      fontSize:"1rem",
      [theme.breakpoints.down("xs")]: {
        fontSize:"0.7rem",
        marginLeft: "10px",
      }
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

class ChatbotURL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "http://morethanchat.com/1dfiv14",
      copied: false
    }
  }

  render() {
    const { classes, open, onClose } = this.props;
    return (
        <div>
          <Dialog
            onClose={onClose}
            aria-labelledby="chatbotURL"
            open={open}
            maxWidth="sm"
          >
          <DialogTitle id="chatbotURL" onClose={onClose}>
            챗봇 내보내기
          </DialogTitle>
          <DialogContent dividers>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  value={this.state.value}
                  onChange={({target: {value}}) => this.setState({value, copied: false})}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.inputURL}
                />
                <CopyToClipboard
                  text={this.state.value}
                  onCopy={() => this.setState({copied: true})}
                >
                  <Button className={classes.copyButton}>복사</Button>
                </CopyToClipboard>
              </Grid>

              <Grid item xs={12} sm={12}>
                <div className={classes.textBody}>
                  <div className={classes.flexHead}>
                    <FAQIcon className={classes.faqIcon}/>
                    <Typography variant="h6" component="h6" className={classes.title}>
                      FAQ
                    </Typography>
                  </div>
                  <Typography variant="p" component="p" className={classes.content}>
                    - 인스타그램/카카오톡과 연동하는 방법을 모르겠습니다.
                  </Typography>
                  <Typography variant="p" component="p" className={classes.content}>
                    - 고객들이 어떻게 이용하게 되나요?
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(ChatbotURL);

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ChatView from '../chat';
import SendIcon from '@material-ui/icons/Send';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: "#bcd6ff",
    color:"#434f5b"
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "#fff"
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
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
    padding: theme.spacing(2),
    color:"#434f5b"
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    color:"#434f5b"
  }
}))(MuiDialogActions);

class ChatDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { open, onClose, classes } = this.props;
    return (
        <Dialog
          onClose={onClose}
          aria-labelledby="chatDialog"
          open={open}
          fullScreen={
            isWidthUp('sm', this.props.width) ? false
            : true
          }
        >
          <DialogTitle id="chatDialog" onClose={onClose}>
            안다해
          </DialogTitle>
          <DialogContent dividers>
            <ChatView />
          </DialogContent>
          <DialogActions style={{backgroundColor:'#eeeeee'}}>
            <input
              type="text"
              className="compose-input"
              placeholder="이곳에 메세지를 입력하세요"
            />
            <button className="toolbar-button" style={{marginLeft:'0px'}}>
              <SendIcon />
            </button>
          </DialogActions>
        </Dialog>
    );
  }
}

export default withWidth()(ChatDialog);

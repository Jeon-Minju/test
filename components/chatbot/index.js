import 'date-fns';
import React from 'react';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import ChatbotList01 from './ChatbotList01';
import ChatbotList02 from './ChatbotList02';
import ChatbotList03 from './ChatbotList03';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '20px 0',
    width: '100%',
    height: "80vh",
    marginBottom: theme.spacing(2),
    borderTop: "6px solid #297bff",
    color: "#434f5b"
  },
  paperHead: {
    padding:"0 20px",
  },
  paperBody: {
    maxHeight:"95%",
    overflowY:"auto"
  },
  headText : {
    [theme.breakpoints.down("sm")]: {
      fontSize:"1.2rem"
    }
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
    fontSize:"1rem",
    fontWeight:"700",
  },
  onButton: {
    border:"none",
    borderRadius:"20px",
    padding:"5px 15px",
    backgroundColor: "#7daefe",
    color:"#fff",
    cursor:"pointer",
    [theme.breakpoints.down("sm")]: {
      fontSize:"0.75rem",
    }
  },
  offButton: {
    border:"none",
    borderRadius:"20px",
    padding:"5px 15px",
    backgroundColor: "#d3d3d3",
    color:"#fff",
    cursor:"pointer",
    [theme.breakpoints.down("sm")]: {
      fontSize:"0.75rem",
    }
  },
  onLabel : {
    color:"#7daefe",
    margin: "0px 10px",
    lineHeight: "2",
    [theme.breakpoints.down("sm")]: {
      fontSize:"0.75rem",
    }
  },
  offLabel : {
    color:"#d3d3d3",
    margin: "0px 10px",
    lineHeight: "2",
    [theme.breakpoints.down("sm")]: {
      fontSize:"0.75rem",
    }
  }
}));


export default function ChatbotModification(props) {
  const classes = useStyles();
  const { type } = props;
  const [isToggleOn, setIsToggleOn] = React.useState(true);

  function handleToggle () {
    setIsToggleOn(!isToggleOn)
  }

  return (
    <React.Fragment className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.paperHead}>
          <Typography variant="h5" gutterBottom className={classes.headText}>
            { type === 'list01' ? '챗봇 수정하기'
             : type === 'list02' ? '예약 수정/취소'
             : type === 'list03' ? '추가 문의 사항'
             : null
            }
          </Typography>
          { type === 'list03' ?
            <div className={classes.buttonGroup}>
              <button
                className= {isToggleOn
                  ? classes.onButton
                  : classes.offButton
                }
                onClick={() => handleToggle()}
              >
                포장
              </button>
              {isToggleOn
                ? <div className={classes.onLabel}>On</div>
                : <div className={classes.offLabel}>Off</div>
              }
              <button
                className= {!isToggleOn
                  ? classes.onButton
                  : classes.offButton
                }
                onClick={() => handleToggle()}
              >
                보냄
              </button>
              {!isToggleOn
                ? <div className={classes.onLabel}>On</div>
                : <div className={classes.offLabel}>Off</div>
              }
            </div>
            : null
          }
        </div>
        <Divider light={true}/>
        <div className={classes.paperBody}>
          { type === 'list01' ? <ChatbotList01 />
           : type === 'list02' ? <ChatbotList02 />
           : type === 'list03' ? <ChatbotList03 />
           : null
          }
        </div>
      </Paper>
    </React.Fragment>
  );
}

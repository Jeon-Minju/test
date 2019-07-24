import 'date-fns';
import React from 'react';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { Avatar, FormGroup } from '@material-ui/core';;
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const GlobalCss = withStyles({
  '@global': {
    '.MuiFormLabel-root':{
      color:'#b5bec8'
    },
    '.MuiFormLabel-root.Mui-focused': {
      color: '#297bff',
      fontWeight:'400',
      '&:hover' : {
        borderBottom : '2px solid #297bff',
      }
    },
    '.MuiInput-underline': {
      '&:before' : {
        borderBottom : '1px solid #b5bec8',
      },'&:after': {
        borderBottom : '1px solid #297bff',
      }
    },
    '.MuiInput-underline':{
      '&:hover': {
        '&:not(.Mui-disabled)':{
          '&:before':{
            border:"none"
          }
        }
      }
    },
  },
})(() => null);

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '20px 0',
    width: '100%',
    minHeight: "80vh",
    marginBottom: theme.spacing(2),
    borderTop: "6px solid #297bff",
    color: "#434f5b"
  },
  paperHead: {
    padding:"0 20px",
  },
  paperBody: {
    padding:"20px",
    maxHeight:"95%",
    overflowY:"auto"
  },
  headText : {
    [theme.breakpoints.down("sm")]: {
      fontSize:"1.2rem"
    }
  },
  label_lineheight: {
    textAlign: 'left',
    lineHeight: '6'
  },
  avatar_grid: {
    paddingLeft: '35px',
  },
  avatar: {
    width: '60px',
    height: '60px'
  },
  avatar_icon: {
    width: '40px',
    height: '40px'
  },
  imgInput: {
    display: "none"
  }
}));

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[ /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function BasicForm() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [values, setValues] = React.useState({
    textmask: '031-1234-1234 ',
  });

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  return (
    <React.Fragment className={classes.root}>
      <GlobalCss />
      <Paper className={classes.paper}>
        <div className={classes.paperHead}>
          <Typography variant="h5" gutterBottom className={classes.headText}>
            기본 정보 수정
          </Typography>
        </div>
        <Divider light={true} />
        <div className={classes.paperBody}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={8}>
              <TextField
                required
                id="storeName"
                name="storeName"
                fullWidth
                label="가게 이름"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <FormControl>
                <InputLabel htmlFor="formatted-text-mask-input">전화번호</InputLabel>
                <Input
                  name="phone"
                  value={values.textmask}
                  onChange={handleChange}
                  id="formatted-text-mask-input"
                  inputComponent={TextMaskCustom}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                required
                id="storeName"
                name="storeName"
                label="가게 설명"
                fullWidth
                multiline={true}
                rowsMax={3}
                defaultValue="어디 길을 있으며, 피가 말이다, 얼마나 꾸며 새가 이상 생생하며,내는 날카로우나 인도하겠다는 철환하였는가? 싹이 동산에는 관현악이며, 공자는 몸이 일월과 쓸쓸하랴?"
                inputProps={{ maxLength: 300 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="mui-pickers-date"
                  label="영업일"
                  format="YYY-MM-dd"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={4} className={classes.label_lineheight}>
              <FormControlLabel
                value="reservation"
                control={
                  <Checkbox color="primary" />
                }
                label="이틀 이후 예약"
                labelPlacement="start"
              />
            </Grid>
            <Hidden xsDown>
              <Grid item sm={2} md={2} className={classes.label_lineheight}>
                <Typography display="inline" align="left">예약시간</Typography>
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={5} md={5}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  margin="normal"
                  id="mui-pickers-time"
                  label="시작"
                  fullWidth
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={5} md={5}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  margin="normal"
                  id="mui-pickers-time"
                  label="마감"
                  value={selectedDate}
                  fullWidth
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item sm={2} md={2} className={classes.avatar_grid}>
              <input accept="image/*" className={classes.imgInput} id="icon-button" type="file"/>
              <label htmlFor="icon-button">
                <Avatar className={classes.avatar}>
                  <PermIdentityIcon
                    aria-label="uploadIcon"
                    className={classes.avatar_icon}
                  />
                </Avatar>
              </label>
            </Grid>
            <Grid item sm={8} md={8}>
              <TextField
                required
                id="dialog_name"
                name="dialog_name"
                label="대화명"
                fullWidth
              />
            </Grid>

          </Grid>
        </div>
      </Paper>
    </React.Fragment>
  );
}

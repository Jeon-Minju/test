import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ArrowbackIcon from '@material-ui/icons/ArrowBack';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    DatePicker
} from '@material-ui/pickers';
import Hidden from '@material-ui/core/Hidden';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import CalendarIcon from '@material-ui/icons/DateRange';
import AddMenuDialog from '../dialog/AddMenuDialog';

const GlobalCss = withStyles({
  '@global': {
    '.MuiInput-underline': {
      fontSize:"1.5rem",
      '&:before' : {
        border : 'none',
      }
    },
    '.MuiInputBase-input':{
      color:"#434f5b"
    }
  }
})(() => null);

const useStyles = makeStyles(theme => ({
  tablecontainer: {
    width: '100%'
  },
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
  },
  wrapper:{
    overflowX:"auto"
  },
  table: {
    minWidth:750
  },
  headText : {
    [theme.breakpoints.down("sm")]: {
      fontSize:"1.2rem"
    }
  },
  menu_button: {
    marginTop: '20px'
  },
  addButton: {
    color: "#fff",
    fontWeight:"700",
    fontSize:"1.2rem"
  },
  pickerButton: {
    float:"right"
  },
  calendarIcon: {
    color:"#297bff",
    fontSize:"2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize:"1.5rem"
    }
  }
}));

function createData(number, name, information, price) {
  return { number, name, information, price };
}
const rows = [
  createData(1, '마카롱', '작고 맛있어요', '10000원'),
  createData(2, '아메리카노', '쓰지만 맛있어요', '4500원'),
  createData(3, '카페라떼', '달아요', '5000원'),
  createData(4, '마카롱', '작고 맛있어요', '10000원'),
  createData(5, '아메리카노', '쓰지만 맛있어요', '4500원'),
  createData(6, '카페라떼', '달아요', '5000원'),
  createData(7, '마카롱', '작고 맛있어요', '10000원'),
  createData(8, '아메리카노', '쓰지만 맛있어요', '4500원'),
  createData(9, '카페라떼', '달아요', '5000원'),
  createData(10, '마카롱', '작고 맛있어요', '10000원'),
  createData(11, '아메리카노', '쓰지만 맛있어요', '4500원'),
  createData(12, '카페라떼', '달아요', '5000원'),
  createData(13, '마카롱', '작고 맛있어요', '10000원'),
  createData(14, '아메리카노', '쓰지만 맛있어요', '4500원'),
  createData(15, '카페라떼', '달아요', '5000원'),
  createData(16, '마카롱', '작고 맛있어요', '10000원'),
  createData(17, '아메리카노', '쓰지만 맛있어요', '4500원'),
  createData(18, '카페라떼', '달아요', '5000원'),
];

export default function RegisterMenu() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [isPickerOpen, setIsPickerOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [dialogOpen, setDialogOpen] = React.useState(false)

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  function handleClickOpen (event) {
    setDialogOpen(true)
  };

  function handleClose (event) {
    setDialogOpen(false)
  };

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }
  function handleDateChange(date) {
    setSelectedDate(date);
  }

  const classes = useStyles();

  return (
    <React.Fragment>
      <AddMenuDialog
        open={dialogOpen}
        onClose={handleClose}
      />
      <Hidden xsDown>
        <GlobalCss />
      </Hidden>
      <div className={classes.tablecontainer}>
        <Paper className={classes.paper}>
          <Grid container className={classes.paperHead}>
            <Grid item xs={12} sm={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                {/*<KeyboardDatePicker
                  margin="normal"
                  id="mui-pickers-date"
                  fullWidth
                  variant="inline"
                  format="YYYY년 MM월 dd일 예약"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />*/}
                <DatePicker
                  disablePast
                  format="YYYY년 MM월 dd일 예약"
                  value={selectedDate}
                  onChange={handleDateChange}
                  open={isPickerOpen}
                  onOpen={()=>setIsPickerOpen(true)}
                  onClose={()=>setIsPickerOpen(false)}
                  className={classes.datePicker}
                />
                <IconButton onClick={()=>setIsPickerOpen(true)} className={classes.pickerButton}>
                  <CalendarIcon className={classes.calendarIcon}/>
                </IconButton>
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Divider light={true} />
          <div className={classes.paperBody}>
            <div className={classes.wrapper}>
              <Table size="small" className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">번호</TableCell>
                    <TableCell align="center">메뉴이름</TableCell>
                    <TableCell align="center">설명</TableCell>
                    <TableCell align="center">가격</TableCell>
                    <TableCell align="center">사진</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                    <TableRow key={row.number}>
                      <TableCell component="th" scope="row" align="center">
                          {row.number}
                      </TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.information}</TableCell>
                      <TableCell align="center">{row.price}</TableCell>
                      <TableCell align="center">
                        <Button variant="outlined">보기</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 49 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
            </Table>
          </div>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            labelRowsPerPage=''
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />

           <Grid container>
              <Grid item xs={12} sm={12} className={classes.menu_button}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleClickOpen}
                  className={classes.addButton}
                >
                  <AddIcon fontSize="small"/>
                  메뉴 추가
                </Button>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </div>
    </React.Fragment>
    );
}

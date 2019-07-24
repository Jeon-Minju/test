import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/HighlightOff';
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

const useStyles = makeStyles(theme => ({
  tablecontainer: {
    width: '100%',
  },
  wrapper:{
    overflow:"auto"
  },
  table:{
    minWidth:750
  },
  tableText: {
    [theme.breakpoints.down("sm")]: {
      fontSize:"0.875rem",
    }
  },
  button: {
    color:"#434f5b",
    cursor:"pointer",
    [theme.breakpoints.down("sm")]: {
      fontSize:"0.875rem",
    }
  },
  iconButton: {
    cursor:"pointer",
    [theme.breakpoints.down("sm")]: {
      fontSize:"0.875rem",
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
  createData(5, '마카롱', '작고 맛있어요', '10000원'),
  createData(6, '아메리카노', '쓰지만 맛있어요', '4500원'),
  createData(7, '카페라떼', '달아요', '5000원'),
  createData(8, '마카롱', '작고 맛있어요', '10000원'),
  createData(9, '마카롱', '작고 맛있어요', '10000원'),
  createData(10, '아메리카노', '쓰지만 맛있어요', '4500원'),
  createData(11, '카페라떼', '달아요', '5000원'),
  createData(12, '마카롱', '작고 맛있어요', '10000원'),
];

export default function AddMenuTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

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
  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }



  return (
    <React.Fragment>
      <div className={classes.tablecontainer}>
        <div className={classes.wrapper}>
          <Table size="small" className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="center" className={classes.tableText}></TableCell>
                <TableCell align="center" className={classes.tableText}>메뉴이름</TableCell>
                <TableCell align="center" className={classes.tableText}>설명</TableCell>
                <TableCell align="center" className={classes.tableText}>가격</TableCell>
                <TableCell align="center" className={classes.tableText} padding="checkbox">사진</TableCell>
                <TableCell align="center" className={classes.tableText} padding="checkbox"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                <TableRow key={row.number}>
                  <TableCell component="th" scope="row" align="center" className={classes.tableText} padding="checkbox">
                    <IconButton>
                      <AddIcon className={classes.iconButton}/>
                    </IconButton>
                  </TableCell>
                  <TableCell align="center" className={classes.tableText}>{row.name}</TableCell>
                  <TableCell align="center" className={classes.tableText}>{row.information}</TableCell>
                  <TableCell align="center" className={classes.tableText}>{row.price}</TableCell>
                  <TableCell align="center" className={classes.tableText} padding="checkbox">
                    <Button
                      variant="outlined"
                      className={classes.button}
                    >
                      보기
                    </Button>
                  </TableCell>
                  <TableCell align="center" className={classes.tableText} padding="checkbox">
                    <IconButton>
                      <DeleteIcon className={classes.iconButton}/>
                    </IconButton>
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
          rowsPerPageOptions={[5, 10, 20]}
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
      </div>
    </React.Fragment>
    );
}

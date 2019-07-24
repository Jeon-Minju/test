import React from 'react';
import Link from 'next/link'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Hidden from '@material-ui/core/Hidden';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';
import ListIcon from '@material-ui/icons/List';
import BlackChatIcon from '../../static/assets/images/comment-black.png';
import GrayChatIcon from '../../static/assets/images/comment-gray.png';
import DropDownButton from '../button/DropDown';
import ChatDialog from '../dialog/ChatDialog';


const GlobalCss = withStyles({
  '@global': {
    '.MuiCheckbox-colorSecondary.Mui-checked': {
      color:'#fbaf4b'
    }
  }
})(() => null);


function createData( number, name, phone, order, orderTime, payment, payWay, send, addText ) {
  return { number, name, phone, order, orderTime, payment, payWay, send, addText };
}

const rows = [
  createData('1', '안다해', '010-1234-1234', '데리야끼 / 1개', '10:18', '7000원', '현금', 'X', '항상 많이 사가시는 손닙입니다. 서비스 많이 많이'),
  createData('2', '김영감', '010-1234-1235', '간장데리야끼 / 1개', '10:20', '8000원', '카드', 'O', ''),
  createData('3', '홍길동', '010-1234-1236', '퓨전데리야끼 / 1개', '10:18', '7000원', '현금', 'X', '포장을 오시기 직전에 해야합니다.'),
  createData('4', '김철수', '010-1234-1237', '라이스 / 2개', '10:30', '12000원', '카드', 'X', ''),
  createData('5', '이영희', '010-1234-1238', '데리야끼 / 1개', '10:40', '7000원', '현금', 'X', ''),
  createData('6', '박영수', '010-1234-1239', '라이스 / 2개', '11:20', '12000원', '카드', 'X', ''),
  createData('7', '김군', '010-1234-1240', '데리야끼 / 2개', '12:40', '20000원', '카드', 'X', ''),
  createData('8', '이씨', '010-1234-1241', '데리야끼 / 1개', '10:40', '7000원', '현금', 'X', '')
];

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headRows = [
  { id: 'number', disablePadding: false, label: '번호' },
  { id: 'name', disablePadding: false, label: '주문자' },
  { id: 'chat', disablePadding: false, label: '채팅' },
  { id: 'phone', disablePadding: false, label: '연락처' },
  { id: 'order', disablePadding: false, label: '주문정보' },
  { id: 'orderTime', disablePadding: false, label: '수령' },
  { id: 'payment', disablePadding: false, label: '총금액' },
  { id: 'payWay', disablePadding: false, label: '결제' },
  { id: 'send', disablePadding: false, label: '포장/보냄' },
  { id: 'chk', disablePadding: false, label: '확인' },
  { id: 'addText', disablePadding: false, label: '비고' },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headRows.map(row => (
          <TableCell
            key={row.id}
            align='center'
            padding={
              row.id === 'number' || row.id === 'name' || row.id === 'chat' || row.id === 'chk'
              ? 'checkbox'
              : 'default'
            }
            sortDirection={orderBy === row.id ? order : false}
          >
            {row.label === '채팅'
              ? <img src={BlackChatIcon} width="20"/>
              : row.label
            }
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    color: "#434f5b",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  },
  spacer: {
    flex: '1 1 100%',
  },
  title: {
    flex: '0 0 auto',
  },
  listIcon : {
    fontSize: "2.5rem",
    verticalAlign: "middle",
    marginRight: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem"
    }
  },
  buttonBox : {
    flex: '1 1 auto',
    [theme.breakpoints.up("md")]: {
      marginLeft: "20px",
    },
  },
  toolbarButton : {
    color: "#434f5b",
    border : "2px solid #434f5b",
    marginRight: "15px",
    '&:hover, &:active' : {
      color:"#fff",
      backgroundColor: "#434f5b"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".875rem",
      padding: "6px",
      marginRight: "10px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".5rem",
      marginRight: "5px"
    }
  },
  titleBox : {
    flex: '1 1 auto',
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px"
    }
  },
  smtitle : {
    paddingTop:"6px",
    flex:'1 1 auto',
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem"
    }
  },
  fileExportButton : {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    }
  }
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar className={classes.root}>
      <Hidden mdUp>
        <Box
          flexDirection="row"
          display="flex"
          className={classes.titleBox}
        >
          <div className={classes.smtitle}>
            <Typography variant="h6" id="tableTitle" className={classes.title}>
              <ListIcon
                className={classes.listIcon}
              />
              정렬방식
            </Typography>
          </div>
          <div className={classes.actions}>
            <DropDownButton
              type={'tableOrderSend'}
              className={classes.fileExportButton}
            />
          </div>
        </Box>
      </Hidden>
      <Hidden smDown>
        <div className={classes.title}>
          <Typography variant="h6" id="tableTitle">
            <ListIcon
              className={classes.listIcon}
            />
            정렬방식
          </Typography>
        </div>
      </Hidden>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        className={classes.buttonBox}
      >
        <Button variant ='outlined' className={classes.toolbarButton}>주문자이름 순</Button>
        <Button variant ='outlined' className={classes.toolbarButton}>수령시간</Button>
        <Button variant ='outlined' className={classes.toolbarButton}>결제방식</Button>
        <Button variant ='outlined' className={classes.toolbarButton}>읽지않은 문의</Button>
      </Box>
      <Hidden smDown>
        <div className={classes.actions}>
          <DropDownButton
            type={'tableOrderSend'}
          />
        </div>
      </Hidden>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  tablecontainer: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 1200,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  addText: {
    width: '100px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace:'nowrap'
  },
  tableCellText: {
    color: "#434f5b",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".875rem"
    }
  },
  tableButton: {
    [theme.breakpoints.down("sm")]: {
      fontSize: ".875rem"
    }
  },
  dialogButton:{
    border:"none",
    backgroundColor:"transparent",
    cursor:"pointer"
  }
}));

export default function MainTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('number');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  function handleChatOpen(event) {
    setDialogOpen(true)
  }

  function handleClose(event) {
    setDialogOpen(false)
  }

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }

  function handleClick(event, name) {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  function handleChangeDense(event) {
    setDense(event.target.checked);
  }

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
  <React.Fragment>
    <ChatDialog
      open={dialogOpen}
      onClose={handleClose}
    />
    <div className={classes.tablecontainer}>
      <GlobalCss />
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.number}
                      selected={isItemSelected}
                    >
                      <TableCell id={labelId} scope="row" align="center" padding="checkbox" className={classes.tableCellText}>
                        {row.number}
                      </TableCell>
                      <TableCell align="center" padding="checkbox" className={classes.tableCellText}>{row.name}</TableCell>
                      <TableCell align="center" padding="checkbox" className={classes.tableCellText}>
                        <button className={classes.dialogButton} onClick={handleChatOpen}>
                          <img src={GrayChatIcon} width="20" />
                        </button>
                      </TableCell>
                      <TableCell align="center" className={classes.tableCellText}>{row.phone}</TableCell>
                      <TableCell align="center" className={classes.tableCellText}>
                        <DropDownButton
                          type={'tableOrder'}
                          content={row.order}
                          className={classes.tableButton}
                        />
                      </TableCell>
                      <TableCell align="center" className={classes.tableCellText}>{row.orderTime}</TableCell>
                      <TableCell align="center" className={classes.tableCellText}>{row.payment}</TableCell>
                      <TableCell align="center" className={classes.tableCellText}>{row.payWay}</TableCell>
                      <TableCell align="center" className={classes.tableCellText}>{row.send}</TableCell>
                      <TableCell padding="checkbox" className={classes.tableCellText}>
                        <Checkbox
                          color="secondary"
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell align="center" className={classes.addText} className={classes.tableCellText}>
                        <DropDownButton
                          type={'tableText'}
                          content={row.addText}
                          className={classes.tableButton}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[10, 20, 50]}
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
      </Paper>
    </div>
  </React.Fragment>
  );
}

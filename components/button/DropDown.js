import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PersonIcon from '@material-ui/icons/Person';
import ExitIcon from '@material-ui/icons/ExitToApp';
import PrintIcon from '@material-ui/icons/Print';
import PdfIcon from '@material-ui/icons/PictureAsPdf';
import ExcelIcon from '@material-ui/icons/InsertDriveFile';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginLeft: "auto"
  },
  buttonGroup : {
    boxShadow: "none"
  },
  button: {
    color: "#434f5b",
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none"
  },
  sideButton: {
    color:'#fff',
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    margin:"10px 0 0 70px"
  },
  tableButton: {
    color: "#434f5b",
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    width:"150px",
    overflow:"hidden",
    textOverflow:"ellipsis",
    whiteSpace:"nowrap"
  },
  tableContent: {
    color: "#434f5b",
    backgroundColor: "rgba(41,123,255,0.14)",
    width:"200px",
    display:"block",
    whiteSpace:"normal",
    textAlign:"center",
    padding:"2px"
  },
  tableOrderPaper: {
    color: "#434f5b",
    zIndex:1000,
    backgroundColor:"#fff"
  }
}));

export default function SplitButton(props) {
  const { type, content } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    setOpen(false);
  }

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  return (
    <div className={classes.wrapper}>
      <Grid container>
        <Grid item xs={12} align="center">
          <ButtonGroup variant="contained" className={classes.buttonGroup} ref={anchorRef} aria-label="Split button">
              {type === 'account' ?
                <Button onClick={handleToggle} className={classes.button}>
                  안녕하세요, <strong>안다해</strong>님
                  <ArrowDownIcon />
                </Button>
                : type === 'sidebar' ?
                <Button onClick={handleToggle} className={classes.sideButton}>
                  <strong>안다해</strong>님
                  <ArrowDownIcon />
                </Button>
                : type === 'tableOrder' ?
                <Button onClick={handleToggle} className={classes.tableButton}>
                  {content}
                  <ArrowDropDownIcon />
                </Button>
                : type === 'tableText' ?
                <Button onClick={handleToggle} className={classes.tableButton}>
                  {content ? <ArrowDropDownIcon /> : null}
                </Button>
                : type === 'tableOrderSend' ?
                <Button onClick={handleToggle} className={classes.button}>
                  주문서 내보내기
                  <ArrowDownIcon />
                </Button>
                : null
              }
          </ButtonGroup>
          <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
              { type === 'account' || type === 'sidebar' ?
                <Paper id="menu-list-grow" className={classes.tableOrderPaper}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList>

                      <MenuItem
                        onClick={() => handleMenuItemClick()}
                      >
                        <PersonIcon /> 개인페이지
                      </MenuItem>
                      <MenuItem
                        onClick={() => handleMenuItemClick()}
                      >
                        <ExitIcon /> 로그아웃
                      </MenuItem>

                    </MenuList>
                  </ClickAwayListener>
                </Paper>
                : type === 'tableOrderSend' ?
                  <Paper id="menu-list-grow">
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList>
                        <MenuItem
                          onClick={() => handleMenuItemClick()}
                        >
                          <PrintIcon /> 프린트
                        </MenuItem>
                        <MenuItem
                          onClick={() => handleMenuItemClick()}
                        >
                          <PdfIcon /> PDF
                        </MenuItem>
                        <MenuItem
                          onClick={() => handleMenuItemClick()}
                        >
                          <ExcelIcon /> EXCEL
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                :  type === 'tableOrder' || type === 'tableText' ?
                  <Paper id="menu-list-grow" class={classes.tableContent}>
                    <ClickAwayListener onClickAway={handleClose}>
                      <p class={classes.contentText}>{content}</p>
                    </ClickAwayListener>
                  </Paper>
                : null
              }
              </Grow>
            )}
          </Popper>
        </Grid>
      </Grid>
    </div>
  );
}

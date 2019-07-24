import React from 'react';
import moment from 'moment';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from "@material-ui/core/styles";
import '../../static/style.scss';

const styles = theme => ({
  button: {
    marginLeft:"5px",
  },
  btnIcon: {
    [theme.breakpoints.down("sm")]: {
      fontSize:"1rem"
    }
  }
});

class ChatbotList02 extends React.Component {
  render() {
    const { classes } = this.props;

    return(
      <div className="messenger">
        <div className="scrollable content">
          <div className="message-list">
            <div className="message-list-container">
              <div className="message">
                <div className="bubble-container">
                  <div className="bubble blue">
                    주문자 이름과 전화번호를 입력해주세요
                  </div>
                  <div className={classes.iconButtonGroup}>
                    <IconButton className={classes.button} size="small" aria-label="Edit">
                      <EditIcon className={classes.btnIcon} />
                    </IconButton>
                  </div>
                </div>
              </div>

              <div className="message mine">
                <div className="bubble-container">
                  <div className="bubble gray">
                    주문자 이름 : 방해주
                  </div>
                </div>
              </div>

              <div className="message mine">
                <div className="bubble-container">
                  <div className="bubble gray">
                    주문자 전화번호 : 010-0000-0000
                  </div>
                </div>
              </div>

              <div className="message">
                <div className="bubble-container">
                  <div className="bubble blue">
                    확인되었습니다.
                  </div>
                </div>
              </div>

              <div className="message">
                <div className="bubble-container">
                  <div className="bubble blue">
                    수정할 주문을 선택해주세요.
                  </div>
                  <div className={classes.iconButtonGroup}>
                    <IconButton className={classes.button} size="small" aria-label="Edit">
                      <EditIcon className={classes.btnIcon} />
                    </IconButton>
                  </div>
                </div>
              </div>

              <div className="message mine">
                <div className="bubble-container">
                  <div className="bubble blue">
                    주문 선택
                  </div>
                </div>
              </div>

              <div className="message">
                <div className="bubble-container">
                  <div className="bubble blue">
                    어떻게 수정해드릴까요?
                  </div>
                  <div className={classes.iconButtonGroup}>
                    <IconButton className={classes.button} size="small" aria-label="Edit">
                      <EditIcon className={classes.btnIcon} />
                    </IconButton>
                  </div>
                </div>
                <div>
                  <form className="form-group">
                    <button className="message-button btn-blue">
                      메뉴 및 개수 변경
                    </button>
                  </form>
                  <form className="form-group">
                    <button className="message-button">
                      수령 시간 변경
                    </button>
                  </form>
                  <form className="form-group">
                    <button className="message-button">
                      포장/보냄
                    </button>
                  </form>
                  <form className="form-group">
                    <button className="message-button">
                      주문취소
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ChatbotList02);

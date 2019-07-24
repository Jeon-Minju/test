import React from 'react';
import moment from 'moment';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
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

class ChatbotList01 extends React.Component {
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
                    안녕하세요. 카페애일 입니다! 무엇을 도와드릴까요?
                  </div>
                  <div className={classes.iconButtonGroup}>
                    <IconButton className={classes.button} size="small" aria-label="Edit">
                      <EditIcon className={classes.btnIcon} />
                    </IconButton>
                    <IconButton className={classes.button} size="small" aria-label="Delete">
                      <DeleteIcon className={classes.btnIcon}/>
                    </IconButton>
                  </div>
                </div>
                <div>
                  <form className="form-group">
                    <button className="message-button btn-blue">
                      예약하기
                    </button>
                  </form>
                  <form className="form-group">
                    <button className="message-button">
                      예약수정 / 취소
                    </button>
                  </form>
                  <form className="form-group">
                    <button className="message-button">
                      문의하기
                    </button>
                  </form>
                </div>
              </div>

              <div className="message mine">
                <div className="bubble-container">
                  <div className="bubble gray">
                    예약하기
                  </div>
                </div>
              </div>

              <div className="message">
                <div className="bubble-container">
                  <div className="bubble blue">
                    예약할 날짜를 입력해주세요
                  </div>
                </div>
              </div>

              <div className="message mine">
                <div className="bubble-container">
                  <div className="bubble gray">
                    6월 4일
                  </div>
                </div>
              </div>

              <div className="message">
                <div className="bubble-container">
                  <div className="bubble blue">
                    주문할 메뉴와 개수를 선택해주세요
                  </div>
                </div>
              </div>

              <div className="message mine">
                <div className="bubble-container">
                  <div className="bubble gray">
                    딸기 요거트 마코롱 1개<br />
                    녹차 마카롱 2개
                  </div>
                </div>
              </div>

              <div className="message">
                <div className="bubble-container">
                  <div className="bubble blue">
                    주문자 성함을 입력해주세요
                  </div>
                </div>
              </div>

              <div className="message mine">
                <div className="bubble-container">
                  <div className="bubble gray">
                    홍길동
                  </div>
                </div>
              </div>

              <div className="message">
                <div className="bubble-container">
                  <div className="bubble blue">
                    주문자 연락처를 입력해주세요
                  </div>
                </div>
              </div>

              <div className="message mine">
                <div className="bubble-container">
                  <div className="bubble gray">
                    010-1234-1234
                  </div>
                </div>
              </div>

              <div className="message">
                <div className="bubble-container">
                  <div className="bubble blue">
                    어떻게 결제하시겠습니까?
                  </div>
                </div>
                <div>
                  <form className="form-group">
                    <button className="message-button btn-blue">
                      현장결제
                    </button>
                  </form>
                  <form className="form-group">
                    <button className="message-button">
                      계좌이체
                    </button>
                  </form>
                </div>
              </div>

              <div className="message mine">
                <div className="bubble-container">
                  <div className="bubble gray">
                    계좌이체
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ChatbotList01);

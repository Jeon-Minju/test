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

class ChatbotList03 extends React.Component {
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
                    문의사항이 있으신가요?
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
                      포장/보냄
                    </button>
                  </form>
                  <form className="form-group">
                    <button className="message-button">
                      기타 문의 사항
                    </button>
                  </form>
                  <form className="form-group">
                    <button className="message-button">
                      없습니다.
                    </button>
                  </form>
                </div>
              </div>

              <div className="message">
                <div className="timestamp">
                  - 포장 / 보냄 -
                </div>
              </div>

              <div className="message">
                <div className="bubble-container">
                  <div className="bubble blue">
                    포장은 ~이렇게, 보냄은 ~이렇게 할 수있습니다.
                    포장 밑 보냉 방법에 대해 설명해주세요.
                  </div>
                  <div className={classes.iconButtonGroup}>
                    <IconButton className={classes.button} size="small" aria-label="Edit">
                      <EditIcon className={classes.btnIcon} />
                    </IconButton>
                  </div>
                </div>
              </div>

              <div className="message">
                <div className="bubble-container">
                  <div className="bubble blue">
                    포장/보냄을 신청(수정)하시겠습니까?
                  </div>
                </div>
              </div>

              <div className="message">
                <div className="timestamp">
                  - 기타 문의 사항 -
                </div>
              </div>

              <div className="message">
                <div className="bubble-container">
                  <div className="bubble blue">
                    기타 문의 사항을 적어주세요.
                  </div>
                  <div className={classes.iconButtonGroup}>
                    <IconButton className={classes.button} size="small" aria-label="Edit">
                      <EditIcon className={classes.btnIcon} />
                    </IconButton>
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

export default withStyles(styles)(ChatbotList03);

import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Message from './Message';
import moment from 'moment';
import '../../static/style.scss';

const MY_USER_ID = '마카롱';

export default class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    this.getMessages();
  }

  getMessages = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        messages: [
          {
            id: 1,
            author: '마카롱',
            message: '문의사항 있으신가요?',
            timestamp: new Date().getTime()
          },
          {
            id: 2,
            author: '고객',
            message: '기타 문의사항',
            timestamp: new Date().getTime()
          },
          {
            id: 3,
            author: '마카롱',
            message: '기타 문의 사항을 적어주세요',
            timestamp: new Date().getTime()
          },
          {
            id: 4,
            author: '고객',
            message: '안녕하세요. 사장님! 마카롱을 전자렌지에 돌려먹어도 괜찮은가요?',
            timestamp: new Date().getTime()
          },
          // {
          //   id: 5,
          //   author: '마카롱',
          //   message: '또 다른 문의사항 있으신가요?',
          //   timestamp: new Date().getTime()
          // },
          // {
          //   id: 6,
          //   author: '고객',
          //   message: '기타 문의사항',
          //   timestamp: new Date().getTime()
          // },
          // {
          //   id: 7,
          //   author: '마카롱',
          //   message: '기타 문의 사항을 적어주세요',
          //   timestamp: new Date().getTime()
          // },
          // {
          //   id: 8,
          //   author: '고객',
          //   message: '안녕하세요. 사장님! 마카롱을 어떻게 보관하는게 좋을까요?',
          //   timestamp: new Date().getTime()
          // },
          // {
          //   id: 9,
          //   author: '마카롱',
          //   message: '또 다른 문의사항 있으신가요?',
          //   timestamp: new Date().getTime()
          // },
          // {
          //   id: 10,
          //   author: '고객',
          //   message: '기타 문의사항',
          //   timestamp: new Date().getTime()
          // },
          // {
          //   id: 11,
          //   author: '마카롱',
          //   message: '기타 문의 사항을 적어주세요',
          //   timestamp: new Date().getTime()
          // },
          // {
          //   id: 12,
          //   author: '고객',
          //   message: '안녕하세요. 사장님! 마카롱 입고는 언제 되나요?',
          //   timestamp: new Date().getTime()
          // }
        ]
      };
    });
  }

  renderMessages() {
    let i = 0;
    let messageCount = this.state.messages.length;
    let messages = [];

    while (i < messageCount) {
      let previous = this.state.messages[i - 1];
      let current = this.state.messages[i];
      let next = this.state.messages[i + 1];
      let isMine = current.author === MY_USER_ID;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;

        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      messages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return messages;
  }

  render() {
    return(
      <div className="messenger">
        <div className="scrollable content">
          <div className="message-list">
            <div className="message-list-container">{this.renderMessages()}</div>
            {/*<div className="compose">
              <input
                type="text"
                className="compose-input"
                placeholder="이곳에 메세지를 입력하세요"
              />
              <button className="toolbar-button">
                <AddIcon />
              </button>
            </div>*/}
          </div>
        </div>
      </div>
    );
  }
}

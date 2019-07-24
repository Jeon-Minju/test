import React from 'react';
import MessageList from './MessageList';
import '../../static/style.scss';

class Chatting extends React.Component {
    render() {
        const {classes} = this.props;

    return (
      <MessageList />
    );
  }
}

export default Chatting;

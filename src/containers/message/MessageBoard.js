import React from "react";
import MessageBoardController from './MessageBoardController';
import {MessageSearchBar, MessageList} from '../../components'

const MessageBoard = (props) => (
    <MessageBoardController {...props}>
        <MessageSearchBar/>
        <MessageList/>
  </MessageBoardController>

);

export default MessageBoard;

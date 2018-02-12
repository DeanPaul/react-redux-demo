import React from "react";
import MessageBoardController from './MessageBoardController';
import {MessageSearchBar, MessageList, MessageFooter,BusyIndicator} from '../../components'

const MessageBoard = (props) => (
    <MessageBoardController {...props}>
        <BusyIndicator/>
        <MessageSearchBar id="TestA"/>
        <MessageSearchBar id="TestC"/>
        <MessageList/>
        <MessageFooter/>
    </MessageBoardController>

);

export default MessageBoard;

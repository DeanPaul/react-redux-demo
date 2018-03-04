import React, {PropTypes, Component} from "react";
// import cx from "classnames";
import {bindActionCreators} from "redux";
import createDataProviders from "../../utils/createDataProviders";
import {connect} from 'react-redux';
import * as messageBoardActionCreators from "../../actions/MessageBoardActionCreators";
import {MessageSearchBar, MessageList, BusyIndicator} from '../../components';
import Perf from 'react-addons-perf';

class MessageBoardController extends Component {

    constructor(props) {
        super(props);
        this.refreshMessage = this.refreshMessage.bind(this);
    }
    componentDidMount() {
        let {requestMessageList, receiveMessageList} = this.props.messageBoardActions;
        requestMessageList();
        setTimeout(receiveMessageList, 1000);
    }

    componentDidUpdate(){
        Perf.stop();
//        Perf.printInclusive();
//        Perf.printExclusive();
        Perf.printWasted();
    }
    refreshMessage(){
        Perf.start();
        this.props.messageBoardActions.refreshMessage();
    }
    components = {
        [BusyIndicator]: () => {
            const { messageBoard } = this.props;
            return messageBoard.isProcessing ? {} : null;
        },
        [MessageSearchBar]: (instance) => {
            const test = {
                  ["TestA"]: {
                      hidden: 'TestA',
                      clickBar:this.refreshMessage
                  },
                  ["TestC"]: {
                      hidden: 'TestC',
                      clickBar:this.refreshMessage
                  }
            };
            return Object.assign({}, test[instance.props.id] || instance.props);
        },
        [MessageList]: () => {
            const {data} = this.props.messageBoard;
            return {data};
        },
    };

    render() {
        return (
            <div className={this.props.className}>
                {createDataProviders(this.props.children, this.components)}
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    messageBoard: state.MessageBoard,
});

const mapDispatchToProps = (dispatch) => ({
    messageBoardActions: bindActionCreators(messageBoardActionCreators, dispatch),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageBoardController);

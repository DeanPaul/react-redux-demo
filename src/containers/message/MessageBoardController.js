import React, {PropTypes, Component} from "react";
// import cx from "classnames";
import {bindActionCreators} from "redux";
import createDataProviders from "../../utils/createDataProviders";
import {connect} from 'react-redux';
import * as messageBoardActionCreators from "../../actions/MessageBoardActionCreators";
import {MessageSearchBar, MessageList, BusyIndicator} from '../../components';


class MessageBoardController extends Component {


    componentDidMount() {
        let {requestMessageList, receiveMessageList} = this.props.messageBoardActions;
        requestMessageList();
        setTimeout(receiveMessageList, 1000);
    }


    components = {
        [BusyIndicator]: () => {
            const { messageBoard } = this.props;
            return messageBoard.get('isProcessing') ? {} : null;
        },
        [MessageSearchBar]: (instance) => {
            const test = {
                  ["TestA"]: {
                      hidden: 'sdsdsd',
                  },
                  ["TestC"]: {
                      hidden: 'C',
                  }
            };
            return test[instance.props.id];
        },
        [MessageList]: () => {
            const data = this.props.messageBoard.get('data');
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
//state.getIn(['dish', 'cartList'])
    messageBoard: state.get('MessageBoard'),
});

const mapDispatchToProps = (dispatch) => ({
    messageBoardActions: bindActionCreators(messageBoardActionCreators, dispatch),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageBoardController);

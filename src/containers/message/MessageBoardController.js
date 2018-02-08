import React, {PropTypes, Component} from "react";
// import cx from "classnames";
import {bindActionCreators} from "redux";
import createDataProviders from "../../utils/createDataProviders";
import {connect} from 'react-redux';
import * as messageBoardActionCreators from "../../actions/MessageBoardActionCreators";
import {MessageSearchBar, MessageList} from '../../components';


class MessageBoardController extends Component {


    componentDidMount() {
        //this.props.portalActions.initPortal();
    }


    components = {
        [MessageSearchBar]: () => {
            const {ui} = this.props;
            return {};
        },
        [MessageList]: () => {
            const {ui} = this.props;
            return {};
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
    auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
    authActions: bindActionCreators(messageBoardActionCreators, dispatch),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageBoardController);

import React, {PropTypes, Component} from "react";
// import cx from "classnames";
import {bindActionCreators} from "redux";
import createDataProviders from "../../utils/createDataProviders";
import {connect} from 'react-redux';
import * as todoActionCreators from "../../actions/TodoActionCreators";
import {TodoBar, TodoList} from '../../components';

class TodoController extends Component {

    componentDidMount() {
        //this.props.portalActions.initPortal();
    }

    components = {
        [TodoList]: () => {
            const {ui} = this.props;
            return {};
        },
        [TodoBar]: () => {
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
    authActions: bindActionCreators(todoActionCreators, dispatch),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoController);

import React, {PropTypes, Component} from "react";
// import cx from "classnames";
import {bindActionCreators} from "redux";
import createDataProviders from "../../utils/createDataProviders";
import {connect} from 'react-redux';
import * as authActionCreators from "../../actions/AuthActionCreators";

import AddressList from "../../components/address/AddressList";


class AddressController extends Component {

    state = {docContextMenu: null};

    componentDidMount() {
        //this.props.portalActions.initPortal();
    }


    components = {
        [AddressList]: () => {
            const {ui} = this.props;
            return ui.isBusy ? {} : null;
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

AddressController.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    style: PropTypes.object,
    uiSettings: PropTypes.object,

    // Action Creators
    authActions: PropTypes.object,

};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
    authActions: bindActionCreators(authActionCreators, dispatch),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddressController);

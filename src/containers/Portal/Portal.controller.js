// import React, {PropTypes, Component} from "react";
// import cx from "classnames";
// import {bindActionCreators} from "redux";
// import {settings, endpoints} from "../../config";
// import {openWindow} from "../../utils/index";
// import createDataProviders from "../../utils/createDataProviders";
// import connect from "../../utils/connect";
// import * as authActionCreators from "../../actions/AuthActionCreators";
//
//
//
//
// class PortalViewController extends Component {
//
//   state = {docContextMenu: null};
//
//   componentDidMount() {
//     //this.props.portalActions.initPortal();
//   }
//
//
//
//   components = {
//     [BusyIndicator]: () => {
//       const { ui } = this.props;
//       return ui.isBusy ? {} : null;
//     },
//   };
//
//   render() {
//     return (
//       <div className={this.props.className}>
//         { createDataProviders(this.props.children, this.components) }
//       </div>
//     );
//   }
// }
//
// PortalViewController.propTypes = {
//   children: PropTypes.element,
//   className: PropTypes.string,
//   style: PropTypes.object,
//   uiSettings: PropTypes.object,
//
//   // Action Creators
//   authActions: PropTypes.object,
//
// };
//
// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   authActions: bindActionCreators(authActionCreators, dispatch),
// });
//
//
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PortalViewController);

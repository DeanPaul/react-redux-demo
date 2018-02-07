import React from "react";

// Common Components


// Portal Components
/**
 * This module represents the portal view.
 *
 * This way activities that require authorization.
 * MUST be shown to user only when user is logged in.
 *
 */
// const PortalView = (props) => (
//     <div>
//
//        test
//     </div>
// );
class Portal extends React.Component {
    render() { // Every react component has a render method.
        return ( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
            <div>
                Hello World Portal
            </div>
        );
    }
}

export default Portal;

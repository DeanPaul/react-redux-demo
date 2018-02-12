import React, {Component, PropTypes} from 'react';

class MessageSearchBar extends Component {


    render() {
        return (
            <div>{this.props.hidden}</div>
        );
    }
}

MessageSearchBar.propTypes = {};

export default MessageSearchBar;

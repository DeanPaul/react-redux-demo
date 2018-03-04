import React, {Component, PropTypes} from 'react';

class MessageSearchBar extends Component {


    render() {
        return (
            <div onClick={this.props.clickBar}>{this.props.hidden}</div>
        );
    }
}

MessageSearchBar.propTypes = {};

export default MessageSearchBar;

import React, {Component, PropTypes} from 'react';

class MessageList extends Component {

    renderContent() {
        let {data} = this.props;
        return (data || []).map((item) => <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.owner}</td>
            <td>{item.number}</td>
        </tr>)
    }

    render() {
        return (
            <table className="table">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Owner</th>
                    <th>Number</th>
                </tr>
                {this.renderContent()}
            </table>
        );
    }
}

MessageList.propTypes = {};

export default MessageList;

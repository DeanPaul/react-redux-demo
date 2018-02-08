import React, {Component, PropTypes} from 'react';

class MessageList extends Component {

    renderContent() {
        let {data} = this.props;
        return (data || []).map((item) => <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.owner}</td>
        </tr>)
    }

    render() {
        return (
            <table className="table">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Owner</th>
                </tr>
                {this.renderContent()}
            </table>
        );
    }
}

MessageList.propTypes = {};

export default MessageList;

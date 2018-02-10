import React, {Component, PropTypes} from 'react';

class MessageList extends Component {

    renderContent() {
        let {data} = this.props;
        return (data || []).map((item) => <tr>
            <td>{item.get('id')}</td>
            <td>{item.get('title')}</td>
            <td>{item.get('owner')}</td>
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

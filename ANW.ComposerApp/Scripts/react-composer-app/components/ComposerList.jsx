import React, { Component } from 'react';

class ComposerList extends Component {
  render() {
    const { composers } = this.props;
    const list = composers.map(c => <li
      key={`${c.firstName} ${c.lastName}`}
      onClick={this.props.navCallback}>
      {`${c.firstName} ${c.lastName}`}
    </li>);
    list.push(<li key="total">{`Total: ${composers.length}`}</li>);
    return (<ul>{list}</ul>);
  }
}

export default ComposerList;
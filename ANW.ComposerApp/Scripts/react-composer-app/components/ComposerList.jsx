import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ComposerList extends Component {
  render() {
    const { composers } = this.props;
    const list = composers.map(c => <Link key={`${c.firstName} ${c.lastName}`} to={`/info/${c.id}`}>
        <li
          onClick={this.props.navCallback}>
          {`${c.firstName} ${c.lastName}`}
      </li>
    </Link>);
    list.push(<li key="total">{`Total: ${composers.length}`}</li>);
    return (<ul>{list}</ul>);
  }
}

export default ComposerList;
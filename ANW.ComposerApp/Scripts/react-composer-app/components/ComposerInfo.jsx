import React, { Component } from 'react';

class ComposerInfo extends Component {
  render() {
    const { composer } = this.props;
    const list = [];
    list.push(<li key="total">{`${composer.title} ${composer.firstName} ${composer.lastName}`}</li>);
    list.push(<li key="total">{`${composer.awards}`}</li>);
    return (<ul>{list}</ul>);
  }
}

export default ComposerInfo;
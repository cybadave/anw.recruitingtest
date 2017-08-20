import React from 'react';
import ReactDOM from 'react-dom';
import ComposerList from './components/ComposerList';
import ComposerInfo from './components/ComposerInfo';
import { HashRouter, Route, Switch } from 'react-router-dom';

class TagLine extends React.Component {
  render() {
      return <p>Find music to be passionate about</p>
  }
}

ReactDOM.render(<HashRouter>
  <Switch>
    <Route
      path='/info/:id'
      render={(routeProps) => <ComposerInfo composer={composers[routeProps.match.params.id - 1]} />} />
    <Route
      path='/'
      render={(routeProps) => <ComposerList composers={composers} />} />
  </Switch>
</HashRouter>, document.getElementById('tag-line'));

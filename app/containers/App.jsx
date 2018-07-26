import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import './App.scss';

class App extends Component {
  render() {
    const { route, location } = this.props;
    return (
      <div className={location.pathname === '/' ? 'home' : location.pathname.replace(/\//g, '')}>
        {renderRoutes(route.routes)}
      </div>
    );
  }
}

export default App;

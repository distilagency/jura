import React, { Component } from 'react';

class App extends Component {
  render() {
    const { children, location } = this.props;
    return (
      <div className={location.pathname === '/' ? 'home' : location.pathname.replace(/\//g, '')}>
        {children}
      </div>
    );
  }
}

export default App;

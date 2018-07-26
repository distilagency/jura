import React from 'react';
import { fetchData } from './fetch-data';
import App from './containers/App';

function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(({ default: Component }) => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        }).catch(err => console.error(err));
      }
    }

    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return null;
    }
  };
}

const getComponent = (name) => {
  return asyncComponent(() => import(/* webpackChunkName: "[request]" */ `./containers/${name}`));
};

export default [{
  component: App,
  routes: [{
    path: '/film/:id',
    name: 'Page',
    fetchData,
    component: getComponent('Page')
  }, {
    path: '*',
    name: 'Home',
    exact: true,
    fetchData,
    component: getComponent('Home')
  }]
}];

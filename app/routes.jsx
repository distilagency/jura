import React from 'react';
import { Route, IndexRoute } from 'react-router';
// Import containers used for below routes
import App from './containers/App';
import Home from './containers/Home';
import Page from './containers/Page';
import { fetchData } from './fetch-data';

// Map paths to components
// Dynamic params declared using :
// Use name={} for switch statement in fetchData function
// Declare function to retreive data on the server using fetchData

export default (store) => {
  return (
    <Route path="/" component={App} name="App">
      <IndexRoute component={Home} name="Home" fetchData={fetchData} />
      <Route path="film/:id" component={Page} name="Page" fetchData={fetchData} />
    </Route>
  );
};

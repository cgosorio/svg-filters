import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from '../../containers/App';
import configureStore from './configureStore';

const store = configureStore();

const Root = () => {
  const url = '/:section?/:id?';

  return (
    <Provider store={store}>
      <Router>
        <Route
          path={url}
          component={App}
        />
      </Router>
    </Provider>
  );
};

export default Root;

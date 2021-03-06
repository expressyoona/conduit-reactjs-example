import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import '../index.css';

import { Provider } from 'react-redux'
import PropTypes from 'prop-types';

import Home from './Book';
import BookDetail from './BookDetail';

const App = ({ store }) => {

  return (
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/book/:slug" component={BookDetail} />
          </Switch>
        </BrowserRouter>
      </Layout>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;

// render(<App />, document.getElementById('root'));
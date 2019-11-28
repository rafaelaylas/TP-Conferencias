import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from './Login';
import Home from './Home';
import NotFount from './NotFount';

import '../assets/styles/App.scss';

const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route component={NotFount} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Player from '../containers/Player';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFount from '../containers/NotFount';

const App = () => (
    
  <BrowserRouter>
    <Layout>
      <Switch>
         <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/player/:id" component={Player} /> 
        <Route exact path="/register" component={Register} />
        <Route component={NotFount} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
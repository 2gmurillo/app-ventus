import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Player from '../containers/Player';
import NotFound from '../containers/NotFound';
import ScoreApp from '../containers/ScoreApp';
import Layout from '../components/Layout';
import CreatePlayer from '../containers/CreatePlayer';

import '../assets/styles/App.scss';

const App = ({ isLogged }) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/player/:id' component={Player} />
        <Route
          exact
          path='/score-app'
          component={isLogged ? ScoreApp : Register}
        />
        <Route exact path='/create-player' component={CreatePlayer} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;

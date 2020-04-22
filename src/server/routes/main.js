import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import serverRoutes from '../../frontend/routes/serverRoutes';
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/reducers';
import render from '../render';
import estadoInicial from '../../frontend/initialState';

const main = (req, res, next) => {
  try {
    let initialState;
    const { email, name, id } = req.cookies;

    if (id) {
      initialState = {
        user: {
          email,
          name,
          id,
        },
        playing: {},
        favorites: [],
        search: [],
        female: [],
        male: [],
      };
    } else {
      initialState = estadoInicial;
    }
    const isLogged = initialState.user.id;
    const store = createStore(reducer, initialState);
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <Layout>{renderRoutes(serverRoutes(isLogged))}</Layout>
        </StaticRouter>
      </Provider>
    );
    const preloadedState = store.getState();
    res.send(render(html, preloadedState));
  } catch (err) {
    next(err);
  }
};

export default main;

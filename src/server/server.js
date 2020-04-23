/* eslint-disable func-names */
/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cookieParser from 'cookie-parser';
import boom from '@hapi/boom';
import passport from 'passport';
import axios from 'axios';
import reducer from '../frontend/reducers';
import Layout from '../frontend/components/Layout';
import serverRoutes from '../frontend/routes/serverRoutes';
import getManifest from './getManifest';
import stateDefault from '../frontend/initialState';

import icon from '../frontend/assets/static/ventus.png';

dotenv.config();

const app = express();
const { ENV, PORT } = process.env;

// Body parser
app.use(express.json());

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(`${__dirname}/public`));

// Basic strategy
require('./utils/auth/strategies/basic');

if (ENV === 'development') {
  console.log('Loading dev config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://localhost${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  console.log(`Loading ${ENV} config`);
  app.use((req, res, next) => {
    req.hashManifest = getManifest();
    next();
  });
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : '/assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : '/assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="shortcut icon" href=${icon} />
      <link rel="stylesheet" href="${mainStyles}" type="text/css" />
      <title>Ventus</title>
    </head>
    <body>
      <div id="app">${html}</div>
      <script id="preloadedState">
            window.__PRELOADED_STATE__ = ${JSON.stringify(
              preloadedState
            ).replace(/</g, '\\u003c')}
          </script>
          <script src="${mainBuild}" type="text/javascript"></script>
          <script src="${vendorBuild}" type="text/javascript"></script>
    </body>
  </html>
  `;
};

const renderApp = async (req, res) => {
  let initialState;
  const { token, email, name, id } = req.cookies;

  try {
    let playerList = await axios({
      url: `${process.env.API_URL}/api/players`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'get',
    });
    let userPlayers = await axios({
      url: `${process.env.API_URL}/api/players?userId=${id}`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'get',
    });
    playerList = playerList.data.data;
    userPlayers = userPlayers.data.data;
    let user = {};
    if (email || name || id) {
      user = {
        id,
        email,
        name,
      };
    }
    initialState = {
      user,
      playing: {},
      search: [],
      favorites: userPlayers.filter((player) => player._id === id),
      female: playerList.filter(
        (player) => player.tags[1] === 'Femenino' && player._id
      ),
      male: playerList.filter(
        (player) => player.tags[1] === 'Masculino' && player._id
      ),
    };
  } catch (err) {
    initialState = stateDefault;
  }

  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const isLogged = initialState.user.id;
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Layout>{renderRoutes(serverRoutes(isLogged))}</Layout>
      </StaticRouter>
    </Provider>
  );
  res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.post('/auth/sign-in', async function (req, res, next) {
  passport.authenticate('basic', function (error, data) {
    try {
      if (error || !data) {
        next(boom.unauthorized());
      }

      req.login(data, { session: false }, async function (err) {
        if (err) {
          next(err);
        }

        const { token, ...user } = data;

        res.cookie('token', token, {
          httpOnly: !(ENV === 'development'),
          secure: !(ENV === 'development'),
        });

        res.status(200).json(user);
      });
    } catch (err) {
      next(err);
    }
  })(req, res, next);
});

app.post('/auth/sign-up', async function (req, res, next) {
  const { body: user } = req;

  try {
    const userData = await axios({
      url: `${process.env.API_URL}/api/auth/sign-up`,
      method: 'post',
      data: {
        email: user.email,
        name: user.name,
        password: user.password,
      },
    });
    res.status(201).json({
      name: req.body.name,
      email: req.body.email,
      id: userData.data.id,
    });
  } catch (error) {
    next(error);
  }
});

app.get('/players', async function (req, res, next) {});

app.post('/user-players', async function (req, res, next) {
  try {
    const { body: userPlayer } = req;
    const { token } = req.cookies;

    const { data, status } = await axios({
      url: `${process.env.API_URL}/api/user-players`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'post',
      data: userPlayer,
    });

    if (status !== 201) {
      return next(boom.badImplementation());
    }

    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
});

app.delete('/user-players/:userPlayerId', async function (req, res, next) {
  try {
    const { userPlayerId } = req.params;
    const { token } = req.cookies;

    const { data, status } = await axios({
      url: `${process.env.API_URL}/api/user-players/${userPlayerId}`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'delete',
    });

    if (status !== 200) {
      return next(boom.badImplementation());
    }

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

app.get('*', renderApp);

app.listen(PORT, function () {
  console.log(`Listening http://localhost:${PORT}`);
});

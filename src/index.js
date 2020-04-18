import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers/index';
import App from './routes/App';

const initialState = {
  user: {},
  playing: {},
  favorites: [],
  search: [],
  female: [
    {
      id: 1,
      name: 'Sammy Fontalvo',
      position: 'Defensa',
      height: 1.61,
      cover: 'http://dummyimage.com/800x600.png/001f3f/ffffff',
    },
    {
      id: 2,
      name: 'Melissa Humana',
      position: 'Defensa',
      height: 1.75,
      cover: 'http://dummyimage.com/800x600.png/0074D9/ffffff',
    },
    {
      id: 3,
      name: 'Sarah Pavan',
      position: 'Bloque',
      height: 1.98,
      cover: 'http://dummyimage.com/800x600.png/7FDBFF/ffffff',
    },
    {
      id: 4,
      name: 'Laura Ludwig',
      position: 'Defensa',
      height: 1.81,
      cover: 'http://dummyimage.com/800x600.png/39CCCC/ffffff',
    },
    {
      id: 5,
      name: 'Kira Walkenhorst',
      position: 'Bloque',
      height: 1.84,
      cover: 'http://dummyimage.com/800x600.png/3D9970/ffffff',
    },
    {
      id: 6,
      name: 'Kerri Walsh',
      position: 'Bloque',
      height: 1.88,
      cover: 'http://dummyimage.com/800x600.png/2ECC40/ffffff',
    },
    {
      id: 7,
      name: 'Misty May',
      position: 'Defensa',
      height: 1.82,
      cover: 'http://dummyimage.com/800x600.png/01FF70/ffffff',
    },
    {
      id: 8,
      name: 'April Ross',
      position: 'Bloque',
      height: 1.85,
      cover: 'http://dummyimage.com/800x600.png/FFDC00/ffffff',
    },
    {
      id: 9,
      name: 'Jennifer Kessy',
      position: 'Defensa',
      height: 1.8,
      cover: 'http://dummyimage.com/800x600.png/FF851B/ffffff',
    },
  ],
  male: [
    {
      id: 10,
      name: 'Juango Murillo',
      position: 'Bloque',
      height: 1.82,
      cover: 'http://dummyimage.com/800x600.png/FF4136/ffffff',
    },
    {
      id: 11,
      name: 'Adrian Carambula',
      position: 'Defensa',
      height: 1.83,
      cover: 'http://dummyimage.com/800x600.png/85144B/ffffff',
    },
    {
      id: 12,
      name: 'Alex Ranghieri',
      position: 'Bloque',
      height: 2.0,
      cover: 'http://dummyimage.com/800x600.png/F012BE/ffffff',
    },
    {
      id: 13,
      name: 'Taylor Crabb',
      position: 'Defensa',
      height: 1.83,
      cover: 'http://dummyimage.com/800x600.png/B10DC9/ffffff',
    },
    {
      id: 14,
      name: 'Jake Gibb',
      position: 'Bloque',
      height: 2.01,
      cover: 'http://dummyimage.com/800x600.png/111111/ffffff',
    },
    {
      id: 15,
      name: 'Anders Mol',
      position: 'Bloque',
      height: 2.0,
      cover: 'http://dummyimage.com/800x600.png/AAAAAA/ffffff',
    },
    {
      id: 16,
      name: 'Christian Sorum',
      position: 'Defensa',
      height: 1.92,
      cover: 'http://dummyimage.com/800x600.png/DDDDDD/ffffff',
    },
    {
      id: 17,
      name: 'Phil Dalhausser',
      position: 'Bloque',
      height: 2.05,
      cover: 'http://dummyimage.com/800x600.png/789ABC/ffffff',
    },
    {
      id: 18,
      name: 'Todd Rogers',
      position: 'Defensa',
      height: 1.87,
      cover: 'http://dummyimage.com/800x600.png/CBA987/ffffff',
    },
  ],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

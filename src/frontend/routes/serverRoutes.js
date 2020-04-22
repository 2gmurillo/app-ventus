import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import ScoreApp from '../containers/ScoreApp';
import Player from '../containers/Player';

const serverRoutes = (isLogged) => {
  return [
    {
      exact: true,
      path: '/score-app',
      component: isLogged ? ScoreApp : Login,
    },
    {
      exact: true,
      path: '/',
      component: Home,
    },
    {
      exact: true,
      path: '/login',
      component: Login,
    },
    {
      exact: true,
      path: '/register',
      component: Register,
    },
    {
      exact: true,
      path: '/player/:id',
      component: Player,
    },
    {
      name: 'ScoreApp',
      component: NotFound,
    },
  ];
};

export default serverRoutes;

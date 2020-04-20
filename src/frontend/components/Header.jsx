import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions/index';
import gravatar from '../utils/gravatar';

import logoVentus from '../assets/static/logoVentus.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    props.logoutRequest({});
  };
  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
        <img className='header__logo--img' src={logoVentus} alt='logoVentus' />
        <p className='header__logo--p'>@ventus</p>
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ? (
            <img className='fas' src={gravatar(user.email)} alt={user.email} />
          ) : (
            <i className='fas fa-volleyball-ball' />
          )}
          <p>Perfil</p>
        </div>
        {hasUser ? (
          <ul className='header__menu--list'>
            <li>
              <Link className='link' to='/score-app'>
                Score-app
              </Link>
            </li>
            <li>
              <Link className='link' to='/' onClick={handleLogout}>
                Cerrar sesión
              </Link>
            </li>
          </ul>
        ) : (
          <ul className='header__menu--list'>
            <li>
              <Link className='link' to='/login'>
                Iniciar sesión
              </Link>
            </li>
            <li>
              <Link className='link' to='/register'>
                Registrarse
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

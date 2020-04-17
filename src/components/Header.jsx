import React from 'react';

import logoVentus from '../assets/static/logoVentus.png';

const Header = () => (
  <header className='header'>
    <div className='header__logo'>
      <img className='header__logo--img' src={logoVentus} alt='logoVentus' />
      <p className='header__logo--p'>@ventus</p>
    </div>
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <i className='fas fa-volleyball-ball'></i>
        <p>Perfil</p>
      </div>
      <ul className='header__menu--list'>
        <li>
          <a href='#'>Iniciar sesión</a>
        </li>
        <li>
          <a href='#'>Registrarse</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;

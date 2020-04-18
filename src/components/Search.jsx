import React from 'react';
import { connect } from 'react-redux';
import className from 'classname';
import { searchRequest } from '../actions/index';

const Search = ({ isHome, searchRequest }) => {
  const inputStyle = className('search__input', {
    isHome,
  });

  searchRequest('');

  const handleChange = (e) => {
    searchRequest(e.target.value);
  };

  return (
    <section className='search'>
      <h2 className='search__title'>Nombre del jugador</h2>
      <input
        id='input'
        className={inputStyle}
        type='text'
        placeholder='Buscar...'
        onChange={handleChange}
      />
    </section>
  );
};

const mapDispatchToProps = {
  searchRequest,
};

export default connect(null, mapDispatchToProps)(Search);

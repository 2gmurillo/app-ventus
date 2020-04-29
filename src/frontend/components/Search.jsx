import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import className from 'classname';
import { searchRequest } from '../actions/index';

const Search = (props) => {
  const { isHome } = props;
  const inputStyle = className('search__input', {
    isHome,
  });

  props.searchRequest('');

  const handleChange = (e) => {
    props.searchRequest(e.target.value);
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

Search.propTypes = {
  isHome: PropTypes.bool,
  searchRequest: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Search);

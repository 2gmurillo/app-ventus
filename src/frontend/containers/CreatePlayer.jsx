import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPlayerAction } from '../actions/index';

const CreatePlayer = (props) => {
  const [form, setValues] = useState({
    cover: '',
    name: '',
    position: '',
    height: 0,
    saque: 0,
    rece: 0,
    levante: 0,
    ataque: 0,
    bloque: 0,
    defensa: 0,
    tags: [],
  });

  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleTags = (e, i) => {
    const { tags } = form;
    tags[i] = e.target.value;
    setValues({ ...form, tags });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createPlayerAction(form, '/');
  };

  return (
    <section className='createPlayer'>
      <section className='createPlayer__container'>
        <h1>Create a player</h1>
        <form className='createPlayer__container--form' onSubmit={handleSubmit}>
          <input
            className='input'
            name='cover'
            type='text'
            placeholder='Imagen'
            onChange={handleInput}
            required
          />
          <input
            className='input'
            name='name'
            type='text'
            placeholder='Nombre'
            onChange={handleInput}
            required
          />
          <input
            className='input'
            name='position'
            type='text'
            placeholder='Posición'
            onChange={handleInput}
            required
          />
          <input
            className='input'
            name='height'
            type='number'
            step='any'
            placeholder='Estatura'
            onChange={handleInput}
            required
          />
          <input
            className='input'
            name='saque'
            type='number'
            placeholder='Saque'
            onChange={handleInput}
            required
          />
          <input
            className='input'
            name='rece'
            type='number'
            placeholder='Rece'
            onChange={handleInput}
            required
          />
          <input
            className='input'
            name='levante'
            type='number'
            placeholder='Levante'
            onChange={handleInput}
            required
          />
          <input
            className='input'
            name='ataque'
            type='number'
            placeholder='Ataque'
            onChange={handleInput}
            required
          />
          <input
            className='input'
            name='bloque'
            type='number'
            placeholder='Bloque'
            onChange={handleInput}
            required
          />
          <input
            className='input'
            name='defensa'
            type='number'
            placeholder='Defensa'
            onChange={handleInput}
            required
          />
          <input
            className='input'
            name='category'
            type='text'
            placeholder='Categoría'
            onChange={(event) => handleTags(event, 1)}
            required
          />
          <input
            className='input'
            name='sexo'
            type='text'
            placeholder='Sexo'
            onChange={(event) => handleTags(event, 0)}
            required
          />
          <button type='submit' className='button'>
            Create
          </button>
        </form>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  createPlayerAction,
};

// CreatePlayer.propTypes = {
//   form: PropTypes.arrayOf(
//     PropTypes.shape({
//       cover: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       position: PropTypes.string.isRequired,
//       height: PropTypes.number.isRequired,
//       saque: PropTypes.number.isRequired,
//       rece: PropTypes.number.isRequired,
//       levante: PropTypes.number.isRequired,
//       ataque: PropTypes.number.isRequired,
//       bloque: PropTypes.number.isRequired,
//       defensa: PropTypes.number.isRequired,
//       tags: PropTypes.array.isRequired,
//     }).isRequired).isRequired,
//     createPlayerAction: PropTypes.func,
// };

// CreatePlayer.propTypes = {
//   cover: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   position: PropTypes.string.isRequired,
//   height: PropTypes.number.isRequired,
//   saque: PropTypes.number.isRequired,
//   rece: PropTypes.number.isRequired,
//   levante: PropTypes.number.isRequired,
//   ataque: PropTypes.number.isRequired,
//   bloque: PropTypes.number.isRequired,
//   defensa: PropTypes.number.isRequired,
//   tags: PropTypes.array.isRequired,
//   createPlayerAction: PropTypes.func,
// };

CreatePlayer.propTypes = {
  createPlayerAction: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(CreatePlayer);

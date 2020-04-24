import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { createPlayer } from '../actions/index';

const CreatePlayer = (props) => {
  const [form, setValues] = useState({
    name: '',
    position: '',
    height: '',
    cover: '',
    saque: '',
    rece: '',
    levante: '',
    ataque: '',
    bloque: '',
    defensa: '',
    tags: [],
  });

  const handleInput = (e) => {
    console.log(e);
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.createPlayer(form, '/');
  };

  return (
    <section className='createPlayer'>
      <h2>Create a player</h2>
      <form onSubmit={handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='Nombre'
          onChange={handleInput}
          required
        />
        <input
          name='position'
          type='text'
          placeholder='Posición'
          onChange={handleInput}
          required
        />
        <input
          name='heught'
          type='number'
          placeholder='Estatura'
          onChange={handleInput}
          required
        />
        <input
          name='cover'
          type='text'
          placeholder='Imagen'
          onChange={handleInput}
          required
        />
        <input
          name='saque'
          type='number'
          placeholder='Saque'
          onChange={handleInput}
          required
        />
        <input
          name='rece'
          type='number'
          placeholder='Rece'
          onChange={handleInput}
          required
        />
        <input
          name='levante'
          type='number'
          placeholder='Levante'
          onChange={handleInput}
          required
        />
        <input
          name='ataque'
          type='number'
          placeholder='Ataque'
          onChange={handleInput}
          required
        />
        <input
          name='bloque'
          type='number'
          placeholder='Bloque'
          onChange={handleInput}
          required
        />
        <input
          name='defensa'
          type='number'
          placeholder='Defensa'
          onChange={handleInput}
          required
        />
        <input
          name='categoria'
          type='text'
          placeholder='Categoría'
          onChange={handleInput}
          required
        />
        <input
          name='sexo'
          type='text'
          placeholder='Sexo'
          onChange={handleInput}
          required
        />
        <button type='submit' className='button'>
          Create
        </button>
      </form>
    </section>
  );
};

const mapDispatchToProps = {
  // createPlayer,
};

CreatePlayer.propTypes = {
  // createPlayer: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(CreatePlayer);

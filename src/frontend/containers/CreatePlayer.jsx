import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPlayerAction } from '../actions/index';

const CreatePlayer = (props) => {
  const [form, setValues] = useState({
    cover: '',
    name: '',
    position: '',
    height: '',
    saque: '',
    rece: '',
    levante: '',
    ataque: '',
    bloque: '',
    defensa: '',
    tags: [],
  });

  const handleInput = (e, i) => {
    // const { tags } = form;
    // tags[i] = e.target.value;
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
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
            onChange={(event) => handleInput(event)}
            required
          />
          <input
            className='input'
            name='name'
            type='text'
            placeholder='Nombre'
            onChange={(event) => handleInput(event)}
            required
          />
          <input
            className='input'
            name='position'
            type='text'
            placeholder='Posición'
            onChange={(event) => handleInput(event)}
            required
          />
          <input
            className='input'
            name='height'
            type='number'
            step='any'
            placeholder='Estatura'
            onChange={(event) => handleInput(event)}
            required
          />
          <input
            className='input'
            name='saque'
            type='number'
            placeholder='Saque'
            onChange={(event) => handleInput(event)}
            required
          />
          <input
            className='input'
            name='rece'
            type='number'
            placeholder='Rece'
            onChange={(event) => handleInput(event)}
            required
          />
          <input
            className='input'
            name='levante'
            type='number'
            placeholder='Levante'
            onChange={(event) => handleInput(event)}
            required
          />
          <input
            className='input'
            name='ataque'
            type='number'
            placeholder='Ataque'
            onChange={(event) => handleInput(event)}
            required
          />
          <input
            className='input'
            name='bloque'
            type='number'
            placeholder='Bloque'
            onChange={(event) => handleInput(event)}
            required
          />
          <input
            className='input'
            name='defensa'
            type='number'
            placeholder='Defensa'
            onChange={(event) => handleInput(event)}
            required
          />
          <input
            className='input'
            name='category'
            type='text'
            placeholder='Categoría'
            onChange={(event) => handleInput(event, 1)}
            required
          />
          <input
            className='input'
            name='sexo'
            type='text'
            placeholder='Sexo'
            onChange={(event) => handleInput(event, 0)}
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

CreatePlayer.propTypes = {
  createPlayerAction: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(CreatePlayer);

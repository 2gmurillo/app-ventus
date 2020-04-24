import React from 'react';
// import {useState} from 'react'
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { createPlayer } from '../actions/index';

const CreatePlayer = (props) => {
  // const [form, setValues] = useState({
  // });

  const handleInput = (e) => {
    // setValues({
    //   ...form,
    //   [e.target.name]: e.target.value,
    // });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // props.createPlayer(form, '/');
  };

  return (
    <section className='createPlayer'>
      <section className='createPlayer__container'>
        <h1>Create a player</h1>
        <form className='createPlayer__container--form' onSubmit={handleSubmit}>
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
            name='position'
            type='text'
            placeholder='Posición'
            onChange={handleInput}
            required
          />
          <input
            className='input'
            name='heught'
            type='number'
            placeholder='Estatura'
            onChange={handleInput}
            required
          />
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
            name='categoria'
            type='text'
            placeholder='Categoría'
            onChange={handleInput}
            required
          />
          <input
            className='input'
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

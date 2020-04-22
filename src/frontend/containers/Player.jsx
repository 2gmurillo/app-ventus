import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPlayerSource } from '../actions/index';
import NotFound from './NotFound';

const Player = (props) => {
  const { match, playing } = props;
  const { id } = match.params;
  const hasPlaying = Object.keys(playing).length > 0;
  useEffect(() => {
    props.getPlayerSource(id);
  }, []);

  const saque = [];
  for (let index = 0; index < playing.saque; index++) {
    saque.push(<span key={index} />);
  }
  const rece = [];
  for (let index = 0; index < playing.rece; index++) {
    rece.push(<span key={index} />);
  }
  const levante = [];
  for (let index = 0; index < playing.levante; index++) {
    levante.push(<span key={index} />);
  }
  const ataque = [];
  for (let index = 0; index < playing.ataque; index++) {
    ataque.push(<span key={index} />);
  }
  const bloque = [];
  for (let index = 0; index < playing.bloque; index++) {
    bloque.push(<span key={index} />);
  }
  const defensa = [];
  for (let index = 0; index < playing.defensa; index++) {
    defensa.push(<span key={index} />);
  }

  return hasPlaying ? (
    <div className='player'>
      <h1 className='player__name'>{playing.name.toUpperCase()}</h1>
      <div className='player__details'>
        <div className='player__image'>
          <img src={playing.cover} alt='' />
        </div>
        <div className='player__skills'>
          <div id='saque' className='player__skills--attibute'>
            <p>Saq</p>
            {saque}
          </div>
          <div id='rece' className='player__skills--attibute'>
            <p>Rec</p>
            {rece}
          </div>
          <div id='levante' className='player__skills--attibute'>
            <p>Lev</p>
            {levante}
          </div>
          <div id='ataque' className='player__skills--attibute'>
            <p>Ata</p>
            {ataque}
          </div>
          <div id='bloque' className='player__skills--attibute'>
            <p>Blo</p>
            {bloque}
          </div>
          <div id='defensa' className='player__skills--attibute'>
            <p>Def</p>
            {defensa}
          </div>
        </div>
      </div>
      <button
        className='button'
        type='button'
        onClick={() => props.history.goBack()}
      >
        Regresar
      </button>
    </div>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getPlayerSource,
};

Player.propTypes = {
  getVideoSource: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);

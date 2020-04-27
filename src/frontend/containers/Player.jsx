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
    let spanColor = 'patino';
    switch (playing.saque) {
      case 1:
      case 2:
        spanColor = 'platino';
        break;
      case 3:
      case 4:
        spanColor = 'platino-oro';
        break;
      case 5:
      case 6:
        spanColor = 'oro';
        break;
      case 7:
      case 8:
        spanColor = 'oro-elit';
        break;
      case 9:
      case 10:
        spanColor = 'elit';
        break;

      default:
        spanColor = 'platino';
        break;
    }
    saque.push(<span key={index} className={spanColor} />);
  }
  const rece = [];
  for (let index = 0; index < playing.rece; index++) {
    let spanColor = 'patino';
    switch (playing.rece) {
      case 1:
      case 2:
        spanColor = 'platino';
        break;
      case 3:
      case 4:
        spanColor = 'platino-oro';
        break;
      case 5:
      case 6:
        spanColor = 'oro';
        break;
      case 7:
      case 8:
        spanColor = 'oro-elit';
        break;
      case 9:
      case 10:
        spanColor = 'elit';
        break;

      default:
        spanColor = 'ventus';
        break;
    }
    rece.push(<span key={index} className={spanColor} />);
  }
  const levante = [];
  for (let index = 0; index < playing.levante; index++) {
    let spanColor = 'patino';
    switch (playing.levante) {
      case 1:
      case 2:
        spanColor = 'platino';
        break;
      case 3:
      case 4:
        spanColor = 'platino-oro';
        break;
      case 5:
      case 6:
        spanColor = 'oro';
        break;
      case 7:
      case 8:
        spanColor = 'oro-elit';
        break;
      case 9:
      case 10:
        spanColor = 'elit';
        break;

      default:
        spanColor = 'ventus';
        break;
    }
    levante.push(<span key={index} className={spanColor} />);
  }
  const ataque = [];
  for (let index = 0; index < playing.ataque; index++) {
    let spanColor = 'patino';
    switch (playing.ataque) {
      case 1:
      case 2:
        spanColor = 'platino';
        break;
      case 3:
      case 4:
        spanColor = 'platino-oro';
        break;
      case 5:
      case 6:
        spanColor = 'oro';
        break;
      case 7:
      case 8:
        spanColor = 'oro-elit';
        break;
      case 9:
      case 10:
        spanColor = 'elit';
        break;

      default:
        spanColor = 'ventus';
        break;
    }
    ataque.push(<span key={index} className={spanColor} />);
  }
  const bloque = [];
  for (let index = 0; index < playing.bloque; index++) {
    let spanColor = 'patino';
    switch (playing.bloque) {
      case 1:
      case 2:
        spanColor = 'platino';
        break;
      case 3:
      case 4:
        spanColor = 'platino-oro';
        break;
      case 5:
      case 6:
        spanColor = 'oro';
        break;
      case 7:
      case 8:
        spanColor = 'oro-elit';
        break;
      case 9:
      case 10:
        spanColor = 'elit';
        break;

      default:
        spanColor = 'ventus';
        break;
    }
    bloque.push(<span key={index} className={spanColor} />);
  }
  const defensa = [];
  for (let index = 0; index < playing.defensa; index++) {
    let spanColor = 'patino';
    switch (playing.defensa) {
      case 1:
      case 2:
        spanColor = 'platino';
        break;
      case 3:
      case 4:
        spanColor = 'platino-oro';
        break;
      case 5:
      case 6:
        spanColor = 'oro';
        break;
      case 7:
      case 8:
        spanColor = 'oro-elit';
        break;
      case 9:
      case 10:
        spanColor = 'elit';
        break;

      default:
        spanColor = 'ventus';
        break;
    }
    defensa.push(<span key={index} className={spanColor} />);
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
  getPlayerSource: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);

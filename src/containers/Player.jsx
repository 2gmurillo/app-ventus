import React, { useEffect } from 'react';
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

  return hasPlaying ? (
    <div className='player'>
      <h1 className='player__name'>{playing.name.toUpperCase()}</h1>
      <div className='player__image'>
        <img src={playing.cover} alt='' />
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

export default connect(mapStateToProps, mapDispatchToProps)(Player);

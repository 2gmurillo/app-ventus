import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions/index';

const CarouselItem = (props) => {
  const { id, cover, name, position, height, isList, favorites } = props;

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      name,
      position,
      height,
    });
  };
  const isFavorite = favorites.find((item) => item.id === id);
  let heart;
  if (isFavorite) {
    heart = 'fas';
  } else {
    heart = 'far';
  }
  return (
    <div className='gallery-item'>
      <img className='gallery-item__image' src={cover} alt={name} />
      <div className='gallery-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <i className='fas fa-eye' />
          </Link>
          {isList ? (
            <i
              role='button'
              aria-label='Delete'
              tabIndex={0}
              className='fas fa-trash-alt'
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <i
              id={id}
              role='button'
              aria-label='Add'
              tabIndex={0}
              className={`${heart} fa-heart`}
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className='gallery-item__details--title'>{name}</p>
        <p className='gallery-item__details--subtitle'>
          {`${position} | ${height.toFixed(2)}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  height: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);

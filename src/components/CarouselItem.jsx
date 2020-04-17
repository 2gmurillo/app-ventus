import React from 'react';
import PropTypes from 'prop-types';

const CarouselItem = ({ cover, name, position, height }) => (
  <div className='gallery-item'>
    <img className='gallery-item__image' src={cover} alt={name} />
    <div className='gallery-item__details'>
      <div>
        <a href='/'>
          <i className='fas fa-eye'></i>
        </a>
        <i className='far fa-heart'></i>
      </div>
      <p className='gallery-item__details--title'>{name}</p>
      <p className='gallery-item__details--subtitle'>
        {`${position} | ${height.toFixed(2)}`}
      </p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  height: PropTypes.number,
};

export default CarouselItem;

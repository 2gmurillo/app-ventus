import React from 'react';

const Carousel = ({ children, title }) => (
  <section className='carousel'>
    <h3 className='carousel__title'>{title}</h3>
    <div className='gallery'>
      <div className='gallery__container'>{children}</div>
    </div>
  </section>
);

export default Carousel;

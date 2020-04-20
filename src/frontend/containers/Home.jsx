import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = ({ favorites, female, male, search }) => {
  if (search.length > 0) {
    var myFavorites = null,
      femalePlayers = null,
      malePlayers = null;
  } else {
    var myFavorites = favorites.length > 0 && (
      <Carousel title='Favoritos'>
        {favorites.map((item) => (
          <CarouselItem key={item.id} {...item} isList={true} />
        ))}
      </Carousel>
    );

    var femalePlayers = (
      <Carousel title='Jugadoras Femeninas'>
        {female.map((item) => (
          <CarouselItem key={item.id} {...item} isCategorized />
        ))}
      </Carousel>
    );

    var malePlayers = (
      <Carousel title='Jugadores Masculinos'>
        {male.map((item) => (
          <CarouselItem key={item.id} {...item} isCategorized />
        ))}
      </Carousel>
    );
  }

  return (
    <div className='home'>
      <Search isHome />
      <Categories>
        {search.length > 0 && (
          <Carousel title='Búsqueda'>
            {search.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        )}
        {myFavorites}
        {femalePlayers}
        {malePlayers}
      </Categories>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    search: state.search,
    female: state.female,
    male: state.male,
  };
};

export default connect(mapStateToProps, null)(Home);

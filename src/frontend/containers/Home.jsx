import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = ({ favorites, female, male, search }) => {
  let myFavorites,
    femalePlayers,
    malePlayers = null;

  if (search.length <= 0) {
    myFavorites = favorites.length > 0 && (
      <Carousel title='Favoritos'>
        {favorites.map((item) => (
          <CarouselItem
            key={item.id}
            id={item.id}
            name={item.name}
            position={item.position}
            height={item.height}
            cover={item.cover}
            isList={true}
          />
        ))}
      </Carousel>
    );

    femalePlayers = (
      <Carousel title='Jugadoras Femeninas'>
        {female.map((item) => (
          <CarouselItem
            key={item._id}
            id={item._id}
            name={item.name}
            position={item.position}
            height={item.height}
            cover={item.cover}
          />
        ))}
      </Carousel>
    );

    malePlayers = (
      <Carousel title='Jugadores Masculinos'>
        {male.map((item) => (
          <CarouselItem
            key={item._id}
            id={item._id}
            name={item.name}
            position={item.position}
            height={item.height}
            cover={item.cover}
          />
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
              <CarouselItem
                key={item._id}
                id={item._id}
                name={item.name}
                position={item.position}
                height={item.height}
                cover={item.cover}
              />
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

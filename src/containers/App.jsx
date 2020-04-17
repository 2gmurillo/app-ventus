import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);

  return (
    <div className='App'>
      <Header />
      <Search />
      <Categories>
        {initialState.favorites?.length > 0 && (
          <Carousel title='Favoritos'>
            {initialState.favorites?.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        )}
        <Carousel title='Jugadoras Femeninas'>
          {initialState.female?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
        <Carousel title='Jugadores Masculinos'>
          {initialState.male?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;

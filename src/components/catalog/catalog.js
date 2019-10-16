import React from 'react';
import CardFilm from "../card-film";
import GenresList from "../genres-list";

const Catalog = () => {
  return <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    <GenresList />

    <div className="catalog__movies-list">
      <CardFilm />
    </div>

    <div className="catalog__more">
      <button className="catalog__button" type="button">Show more</button>
    </div>
  </section>;
};


export default Catalog;

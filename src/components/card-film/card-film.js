import React from 'react';

const CardFilm = () => {
  return <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">Macbeth</a>
    </h3>
  </article>;
};

export default CardFilm;

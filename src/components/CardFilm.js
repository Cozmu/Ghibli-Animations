import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { HiHeart } from 'react-icons/hi';
import { FilmsContext } from '../context/FilmsContext';

function CardFilm({ fav, image, title, description, toggleFavorite }) {
  const { favoriteFilms } = useContext(FilmsContext);

  const toggleIcone = () => {
    const verificacao = favoriteFilms.find((e) => e.id === fav.id);
    if (verificacao) {
      return <HiHeart className="coracao-favoritado" />;
    }
    return <HiHeart className="coracao" />;
  };

  return (
    <section className="films">
      <button
        className="button-favorite"
        type="button"
        onClick={ () => toggleFavorite(fav) }
      >
        {toggleIcone()}
      </button>
      <div
        className="nao"
        onFocus={ () => {} }
        onMouseOver={ ({ target }) => {
          target.style.zIndex = 2;
        } }
      >
        <img
          className="img-container"
          src={ image }
          alt={ title }
          width="350"
        />
      </div>
      <div
        onBlur={ () => {} }
        onMouseOut={ ({ target }) => {
          const parent = target.parentNode;
          if (parent.className === 'text-container') {
            const parenteCerto = parent.parentNode.firstChild.nextSibling.firstChild;
            parenteCerto.style.zIndex = 4;
          }
          if (parent.className === 'films') {
            const parenteCertoDois = parent.firstChild.nextSibling.firstChild;
            parenteCertoDois.style.zIndex = 4;
          }
        } }
        className="text-container"
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
}

CardFilm.propTypes = {
  description: PropTypes.string,
  fav: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  toggleFavorite: PropTypes.func,
}.isRequired;

export default CardFilm;

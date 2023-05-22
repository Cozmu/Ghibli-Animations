import PropTypes from 'prop-types';
import { createContext, useMemo, useState } from 'react';

export const FilmsContext = createContext();

function FilmsProvider({ children }) {
  const [films, setFilms] = useState([]);
  const [favoriteFilms, setFavoriteFilms] = useState([]);

  const toggleFavorite = (movie) => {
    console.log(movie);
    const isFavorite = favoriteFilms.find((e) => e.id === movie.id);
    if (isFavorite) {
      const newFavorite = favoriteFilms.filter((e) => e.id !== movie.id);
      setFavoriteFilms(newFavorite);
    } else {
      setFavoriteFilms([...favoriteFilms, movie]);
    }
  };

  const fetchFilms = async () => {
    try {
      const endPoint = 'http://localhost:3001/films';
      const response = await fetch(endPoint);
      const data = await response.json();
      setFilms(data);
    } catch (error) {
      console.log(error);
    }
  };

  const values = useMemo(() => ({
    films, setFilms, fetchFilms, toggleFavorite, favoriteFilms,
  }), [films, favoriteFilms]);

  return (
    <FilmsContext.Provider value={ values }>
      { children }
    </FilmsContext.Provider>
  );
}

FilmsProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default FilmsProvider;

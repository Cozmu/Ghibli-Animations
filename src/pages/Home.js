import { useContext, useEffect, useState } from 'react';
import CardFilm from '../components/CardFilm';
import Header from '../components/Header';
import { FilmsContext } from '../context/FilmsContext';
import '../style/Films.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { fetchFilms, films, toggleFavorite } = useContext(FilmsContext);

  useEffect(() => {
    fetchFilms();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <main>
      <Header />
      <h1 className="title">Films</h1>
      <div className="films-container">
        { films.map((movie) => (
          <CardFilm
            key={ movie.id }
            { ...movie }
            fav={ movie }
            toggleFavorite={ toggleFavorite }
          />
        )) }
      </div>
    </main>
  );
}

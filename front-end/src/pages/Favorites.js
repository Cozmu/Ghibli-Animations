import { useContext } from 'react';
import Header from '../components/Header';
import { FilmsContext } from '../context/FilmsContext';
import '../style/Films.css';
import CardFilm from '../components/CardFilm';

export default function Favorites() {
  const { favoriteFilms, toggleFavorite } = useContext(FilmsContext);
  return (
    <main>
      <Header />
      <h1 className="title">Favorites</h1>
      <div className="films-container">
        {favoriteFilms.map((fav) => (
          <CardFilm
            key={ fav.id }
            { ...fav }
            fav={ fav }
            toggleFavorite={ toggleFavorite }
          />
        ))}
      </div>
    </main>
  );
}

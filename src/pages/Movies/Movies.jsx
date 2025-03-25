import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/api';
import styles from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (query) {
      searchMovies(query).then(data => setMovies(data.results));
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();
    if (value) setSearchParams({ query: value });
  };

  return (
    <div className={styles.movies}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search movies..."
          className={styles.input}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>

      <ul className={styles.movieList}>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;

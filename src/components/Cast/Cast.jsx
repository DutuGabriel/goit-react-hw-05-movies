import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  if (!cast.length) return <p>No cast info available.</p>;

  return (
    <ul>
      {cast.map(({ cast_id, name, character }) => (
        <li key={cast_id}>
          <strong>{name}</strong> as {character}
        </li>
      ))}
    </ul>
  );
};

export default Cast;

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../services/api';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  if (!reviews.length) return <p>No reviews yet.</p>;

  return (
    <ul className={styles.reviews}>
      {reviews.map(({ id, author, content }) => (
        <li key={id} className={styles.reviewItem}>
          <strong>{author}</strong>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;

import React from 'react';
import { Link } from 'react-router-dom';

function Movie({ Poster, Title, imdbID }) {
  return (
    <div className='movie-container'>
      <img src={Poster} alt='movie name' className='movie-img' />
      <div className='info'>
        <p>{Title}</p>
        <Link to={`/movie/${imdbID}`} className='btn'>
          See details
        </Link>
      </div>
    </div>
  );
}

export default Movie;

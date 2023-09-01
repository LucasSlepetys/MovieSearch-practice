import React from 'react';
import { Link } from 'react-router-dom';

function Movie({ Poster, Title, imdbID }) {
  return (
    <div className='movie-container'>
      <div className='img-container'>
        <img src={Poster} alt='movie name' />
      </div>
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

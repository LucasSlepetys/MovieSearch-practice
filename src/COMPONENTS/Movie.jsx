import React from 'react';

function Movie({ Poster, Title }) {
  return (
    <div className='movie-container'>
      <img src={Poster} alt='movie name' className='movie-img' />
      <div className='info'>
        <p>{Title}</p>
        <button className='btn' type='button'>
          See More
        </button>
      </div>
    </div>
  );
}

export default Movie;

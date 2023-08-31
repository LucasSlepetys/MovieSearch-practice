import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import Movie from './Movie';

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || 'marvel';

  const { data } = await axios.get(
    `http://www.omdbapi.com/?apikey=d26fd309&s=${searchTerm}&page=1`
  );

  return { data };
};

const Movies = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div className='movies'>
      {data.Search.map((movie) => {
        return <Movie key={movie.imdbID} {...movie} />;
      })}
    </div>
  );
};

export default Movies;

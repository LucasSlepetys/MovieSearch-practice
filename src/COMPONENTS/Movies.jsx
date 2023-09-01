import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import axios from 'axios';
import Movie from './Movie';

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || 'marvel';

  const response = await axios.get(
    `http://www.omdbapi.com/?apikey=d26fd309&s=${searchTerm}&page=1`
  );

  return { movies: response.data.Search };
};

const Movies = () => {
  const navigation = useNavigation();
  const { movies } = useLoaderData();

  //check if page HomeLayout or its children are being loaded
  const isPageLoading = navigation.state === 'loading';

  if (isPageLoading) return <h1>Loading...</h1>;

  return (
    <div className='movies'>
      {movies.map((movie) => {
        return <Movie key={movie.imdbID} {...movie} />;
      })}
    </div>
  );
};

export default Movies;

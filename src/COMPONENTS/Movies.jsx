import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import axios from 'axios';
import Movie from './Movie';
import { useQuery } from '@tanstack/react-query';

const searchMovie = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=d26fd309&s=${searchTerm}&page=1`
        );
        return { movies: response.data.Search };
      } catch (error) {
        return { movies: null };
      }
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search') || 'marvel';

    await queryClient.ensureQueryData(searchMovie(searchTerm));

    return searchTerm;
  };

const Movies = () => {
  const navigation = useNavigation();
  const searchTerm = useLoaderData();
  const { data } = useQuery(searchMovie(searchTerm));
  const movies = data.movies;

  //check if page HomeLayout or its children are being loaded
  const isPageLoading = navigation.state === 'loading';

  if (isPageLoading) return <h1>Loading...</h1>;

  return (
    <div className='movies'>
      {movies ? (
        movies.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />;
        })
      ) : (
        <h4>This search does not contain any movies...</h4>
      )}
    </div>
  );
};

export default Movies;

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';

const searchId = (id) => {
  return {
    queryKey: ['id', id],
    queryFn: async () => {
      const response =
        await axios.get(`http://www.omdbapi.com/?apikey=d26fd309&i=${id}
  `);
      return { movie: response.data };
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params, request }) => {
    await queryClient.ensureQueryData(searchId(params.id));
    return params.id;
  };

const MoviePage = () => {
  const id = useLoaderData();
  console.log(id);
  const { data } = useQuery(searchId(id));
  const movie = data.movie;

  const navigation = useNavigation();
  const navigate = useNavigate();
  const loading = navigation.state === 'loading';

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <FaArrowLeft
        className='arrow'
        onClick={() => {
          navigate(-1);
        }}
      />
      <div className='extra-info'>{movie.Plot}</div>
    </div>
  );
};

export default MoviePage;

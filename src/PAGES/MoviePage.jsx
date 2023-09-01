import axios from 'axios';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';

export const loader = async ({ params, request }) => {
  const response =
    await axios.get(`http://www.omdbapi.com/?apikey=d26fd309&i=${params.id}
  `);

  return { movie: response.data };
};

const MoviePage = () => {
  const { movie } = useLoaderData();

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

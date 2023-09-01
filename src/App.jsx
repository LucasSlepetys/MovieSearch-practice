import Hero from './PAGES/Hero';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MoviePage, { loader as idLoader } from './PAGES/MoviePage';
import Movies, { loader as movieLoader } from './COMPONENTS/Movies';
import Error from './COMPONENTS/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Hero />,
    children: [
      {
        index: true,
        element: <Movies />,
        loader: movieLoader,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: '/movie/:id',
    element: <MoviePage />,
    loader: idLoader,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

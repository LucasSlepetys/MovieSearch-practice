import Hero from './PAGES/Hero';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MoviePage from './PAGES/MoviePage';
import Movies, { loader as movieLoader } from './COMPONENTS/Movies';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Hero />,
    children: [
      {
        index: true,
        element: <Movies />,
        loader: movieLoader,
      },
    ],
  },
  {
    path: '/movie/:id',
    element: <MoviePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

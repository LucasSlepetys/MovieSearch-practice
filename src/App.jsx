import Hero from './PAGES/Hero';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MoviePage, { loader as idLoader } from './PAGES/MoviePage';
import Movies, { loader as movieLoader } from './COMPONENTS/Movies';
import Error from './COMPONENTS/Error';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Hero />,
    children: [
      {
        index: true,
        element: <Movies />,
        loader: movieLoader(queryClient),
        errorElement: <Error />,
      },
    ],
  },
  {
    path: '/movie/:id',
    element: <MoviePage />,
    loader: idLoader(queryClient),
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  );
}

export default App;

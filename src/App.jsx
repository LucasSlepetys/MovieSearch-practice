import { RouterProvider, createBrowserRouter, Form } from 'react-router-dom';

export const actionForm = async ({ request }) => {
  alert(1);
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data.search);
  } catch (error) {
    console.log(error);
  }
};

const Hero = () => {
  return (
    <>
      <div className='nav-bar'>
        <div className='app-title'>Movie Search</div>
        <Form className='search-container'>
          <input type='text' name='search' id='search' />
          <button type='submit' className='btn search'>
            search
          </button>
        </Form>
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    action: actionForm,
    element: <Hero />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

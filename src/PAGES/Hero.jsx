import { Outlet } from 'react-router-dom';
import { NavBar } from '../COMPONENTS/NavBar';

const Hero = () => {
  return (
    <div className='section'>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Hero;

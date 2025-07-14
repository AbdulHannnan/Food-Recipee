
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // adjust path as needed
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;

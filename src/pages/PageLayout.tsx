import { Outlet, ScrollRestoration } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function PageLayout() {
  return (
    <div className="flex flex-col min-h-screen big-screen:mx-24">
      <ScrollRestoration />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

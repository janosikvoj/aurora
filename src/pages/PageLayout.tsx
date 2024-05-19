import { Outlet } from 'react-router-dom';

import NavBar from '../components/NavBar';
import MainContainer from '../components/MainContainer';
import Footer from '../components/Footer';

import { changeTheme } from '../lib/theme';

export default function PageLayout() {
  changeTheme(Math.floor(Math.random() * 30)); //Changes theme after new page render

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <MainContainer>
          <Outlet />
        </MainContainer>
        <Footer />
      </div>
    </>
  );
}

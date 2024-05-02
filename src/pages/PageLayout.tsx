import { Outlet } from 'react-router-dom';

import NavBar from "../components/NavBar";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";

export default function PageLayout() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <NavBar />
        <MainContainer>
            <Outlet />
        </MainContainer>
        <Footer />
      </div>
    </>
  )
}
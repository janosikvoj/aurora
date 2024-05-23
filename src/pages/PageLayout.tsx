import { Outlet } from 'react-router-dom';

import NavBar from '../components/NavBar';
import MainContainer from '../components/MainContainer';
import Footer from '../components/Footer';

import { changeTheme } from '../lib/theme';
import { motion } from 'framer-motion';

export default function PageLayout() {
  setTimeout(() => changeTheme(Math.floor(Math.random() * 30)), 3000); //Changes theme after new page render
  // setInterval(() => changeTheme(Math.floor(Math.random() * 30)), 3500);

  return (
    <div className="flex flex-col min-h-screen">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 3, delay: 1 }}
      >
        <NavBar />
        <MainContainer>
          <Outlet />
        </MainContainer>
        <Footer />
      </motion.div>
    </div>
  );
}

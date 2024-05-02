import React from 'react';

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <main className="bg-gray-2 rounded-3xl flex flex-col grow overflow-hidden">
      {children}
    </main>
  );
};

export default MainContainer;

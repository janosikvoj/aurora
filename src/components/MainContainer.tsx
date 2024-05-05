import React from 'react';

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <main className="bg-theme-2 rounded-3xl flex flex-col grow overflow-hidden min-h-[calc(100vh-2.5rem)]">
      {children}
    </main>
  );
};

export default MainContainer;

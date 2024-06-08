import React from 'react';
import HomeComponents from '@/components/homePage/';
import Opening from '@/animations/opening';

const HomePage: React.FC = () => {

  return (
    <main>
      <Opening />
      <HomeComponents />
    </main >
  );
}

export default HomePage;

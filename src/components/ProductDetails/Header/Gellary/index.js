import React from 'react';
import HeroImage from './HeroImage';
import Bar from './Bar';

const Gellary = () => {

  return (
    <div className="p-2 sm:p-4 md:flex flex-row-reverse justify-center">
      <HeroImage />
      <Bar />
    </div>
  );
};

export default Gellary;

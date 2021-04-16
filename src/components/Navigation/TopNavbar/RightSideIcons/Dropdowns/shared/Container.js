import React from 'react';

const Container = ({ children, classes }) => {
  // it maight be a container for all screens by the way
  return (
    <div className={`${classes} sm:mt-1 sm:max-w-sm sm:rounded-xl sm:shadow-md sm:ring-1 ring-black ring-opacity-5 bg-white`}>
      {children}
    </div>
  );
};

export default Container;

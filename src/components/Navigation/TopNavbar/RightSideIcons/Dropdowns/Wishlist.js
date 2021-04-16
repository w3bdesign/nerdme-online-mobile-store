import React from 'react';
import Container from './shared/Container';
import Header from './shared/Header';
import Title from './shared/Title';

const Wishlist = () => {

  return (
    <Container classes="w-72">
      <Header>
        <svg className="mx-auto h-16 text-gray-600" fill="none" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M4.611 6.611a5.5 5.5 0 000 7.778l9.39 9.39 9.388-9.39a5.5 5.5 0 00-7.778-7.778L14 8.221l-1.612-1.61a5.5 5.5 0 00-7.778 0v0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M8.563 10.925s.879 1.145 1.72 1.145c.84 0 1.639-1.145 1.639-1.145M15.98 10.925s.878 1.145 1.72 1.145c.84 0 1.638-1.145 1.638-1.145M12.272 17.155a3.422 3.422 0 011.719-.667 3.026 3.026 0 011.642.667" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M18.23 14.365s-.622 1.139-.333 1.384a.58.58 0 00.333.189.524.524 0 00.32-.189c.256-.217-.32-1.384-.32-1.384z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
        <Title>Your Wishlist is Empty!</Title>
        {/* meant to be for all screens */}
        <button className="mt-2 sm:hidden text-blue-900 font-medium focus:outline-none">Continue shopping</button>
      </Header>
    </Container>
  );
};



export default Wishlist;

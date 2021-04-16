import React from 'react';
import Container from './shared/Container';
import Header from './shared/Header';
import Title from './shared/Title';

const Cart = () => {

    return (
        <Container classes="w-72">
            <Header>
                <svg className="mx-auto h-14 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 3h2l.4 2L7 13m0 0h10l4-8M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0zm4-17c1.546-.025 2.47 1.458 2.586 3 .127 1.695-.887 3.528-2.586 3.5-1.68-.026-2.625-1.825-2.5-3.5.114-1.52.975-2.974 2.5-3z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                <Title>Your Shopping Cart is Empty!</Title>
                {/* meant to be for all screens */}
                <button className="sm:hidden mt-2 font-medium text-blue-900 focus:outline-none">Continue shopping</button>
            </Header>
        </Container>
    );
}


export default Cart;

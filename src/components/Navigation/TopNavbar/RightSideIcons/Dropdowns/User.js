import React from 'react';
import Container from './shared/Container';
import Header from './shared/Header';
import Title from './shared/Title';
import Guide from './shared/Guide';
import Links from './shared/Links';
import { USER_DROPDOWN_LINKS } from '../../../state/constants'


const User = () => {

  return (
    <Container classes="w-80">
      <Header>
        <Title>Hi Guest!</Title>
        <Guide>For Personalized Offers and to Manage Your Orders</Guide>
        <a className="mt-3 inline-block px-8 py-1.5 border border-gray-500 rounded text-gray-800" href="/">Log in</a>
        <a className="ml-2 mt-3 inline-block px-8 py-1.5 border border-gray-500 rounded text-gray-100 bg-gray-800" href="/">Sign up</a>
      </Header>
      <hr />
      <Links links={USER_DROPDOWN_LINKS} />
    </Container>
  );
}


export default User;

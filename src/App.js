import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails'
import Navigation from './components/Navigation'
import Slider from './components/Slider'
 

function App() {
  return (
    <Router>
      <div className='bg-gray-50'>
        <Navigation />
        <Route path='/' exact component={Slider} />
        <Route path='/:anything'  component={ProductDetails} />
        {/* <Slider /> */}
        {/* <ProductDetails /> */}
      </div>
    </Router>
  );
}

export default App;

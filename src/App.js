import React, { Fragment } from 'react';

import './App.css';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart />
    <Header />
    </Fragment>
  );
}

export default App;

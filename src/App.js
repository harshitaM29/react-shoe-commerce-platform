import React, {  useState } from 'react';

import './App.css';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Shoe from './components/ShoeProduct/Shoe';
import ShoeCartContextProvider from './store/ShoeCartContextProvider';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    setIsOpen(true);
  }

  const closeCart = () => {
    setIsOpen(false);
  }
   return (
    <ShoeCartContextProvider>
      {isOpen && <Cart onClose={closeCart}/>}
    <Header onOpen={openCart}/>
    <main>
      <Shoe />
    </main>
    </ShoeCartContextProvider>
  );
}

export default App;

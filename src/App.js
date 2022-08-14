import React, { useState } from 'react'
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import MealsContent from './components/MealsContent/MealsContent';

function App() {
  // Setting APp State
  const [showCart, setShowCart] = useState(false)

  // Function Handler to Display/Hide Cart
  const showCartHandler = () => {
    setShowCart(true)
  }
  const hideCartHandler = () => {
    setShowCart(false)
  }

  return (
    <>
      {showCart && <Cart />}
      <Header />
      <main>
        <MealsContent />
      </main>
    </>
  );
}

export default App;

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Routes>
          {/* <Route exact path="/" element={<Header />} /> */}
          <Route exact path="/meals" element={<Meals />} />
        </Routes>
      </main>
    </CartProvider>
  );
}

export default App;

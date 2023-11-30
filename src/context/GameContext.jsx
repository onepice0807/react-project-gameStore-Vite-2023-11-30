/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <GameContext.Provider value={{ wishlist, setWishlist, cart, setCart }}>
      {children}
    </GameContext.Provider>
  );
};

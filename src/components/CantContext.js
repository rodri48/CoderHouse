import React, { useState } from "react";

export const CantContext = React.createContext();

export const Cantidad = ({ children }) => {
  const [cantidad, setCantidad] = useState(0);
  const [cantidadFinal, setCantidadFinal] = useState([]);
  const [addToCart, setAddToCart] = useState(false);
  const [idCart, setCart] = useState([]);

  return (
    <CantContext.Provider
      value={{
        canti: [cantidad, setCantidad],
        finalCounter: [cantidadFinal, setCantidadFinal],
        booleano: [addToCart, setAddToCart],
        idCarrito: [idCart, setCart],
      }}
    >
      {children}
    </CantContext.Provider>
  );
};

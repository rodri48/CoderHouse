import { CantContext } from "./CantContext";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import ItemCounter from "./ItemCounter";

function Counter({ coco }) {
  const { canti, finalCounter } = useContext(CantContext);
  const [cantidad, setCantidad] = canti;
  const [cantidadFinal, setCantidadFinal] = finalCounter;

  console.log(cantidad, "cantidad");

  //funcion para pasar la infor al carrito!!
  function InformationCart() {
    setCantidadFinal(cantidad);
  }

  //add to cart
  const [addToCart, setAddToCart] = useState(false);
  console.log(`Add to cart button click ? ${addToCart}`);

  //add to cart
  /*   function handleClick(e) {
    e.preventDefault();
    setAddToCart((addToCart) => (addToCart = true));
  } */

  function handlePlus() {
    setCantidad(cantidad + 1);
  }
  function handleMinus() {
    setCantidad(cantidad - 1);
  }

  return (
    <div>
      <button
        style={{
          marginRight: "5PX",
          padding: "10PX",
        }}
        onClick={handleMinus}
      >
        -
      </button>

      <h7>{cantidad} </h7>

      <button
        style={{
          marginLeft: "5PX",
          padding: "10PX",
        }}
        onClick={handlePlus}
      >
        +
      </button>
      <div>
        <Button
          onClick={InformationCart}
          variant="primary"
          style={{ marginTop: "5px", padding: "10px" }}
          addToCart={addToCart}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}

export default Counter;

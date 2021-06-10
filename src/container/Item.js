import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CantContext } from "../components/CantContext";

//import ItemCounter from "../components/ItemCounter";

const Item = ({ id, imagen, articulo, Marca, price, contador }) => {
  const { canti, finalCounter, booleano, idCarrito } = useContext(CantContext);
  // eslint-disable-next-line no-unused-vars
  const [cantidad, setCantidad] = canti;
  const [cantidadFinal, setCantidadFinal] = finalCounter;
  // eslint-disable-next-line no-unused-vars
  const [addToCart, setAddToCart] = booleano;
  const [idCart, setCart] = idCarrito;
  const [state, setstate] = useState(0);
  const [cuentaArticulo, setcuentaArticulo] = useState({
    id: 0,
    cuenta: 0,
  });

  // eslint-disable-next-line no-unused-vars
  const [producto, setproducto] = useState({
    id,
    imagen,
    articulo,
    Marca,
    price,
    contador,
  });

  const obj = Object.assign(producto, cuentaArticulo);

  console.log(obj, "fusionando 2 objetos");

  function handleClick(product) {
    setAddToCart((addToCart) => (addToCart = true));

    setCantidadFinal([...cantidadFinal, producto]);

    setCantidad((cuenta) => cuenta + state);

    setCart([...idCart, cuentaArticulo]);
    setstate(0);
  }

  function handlePlus(id) {
    setstate(state + 1);

    setcuentaArticulo({ id: id, cuenta: cuentaArticulo.cuenta + 1 });
  }
  function handleMinus() {
    if (state === 0) {
      setstate(state);
    } else {
      setstate(state - 1);
    }
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col my-4">
          <Card>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
              <Card.Title>{Marca}</Card.Title>
              <Card.Text>
                {articulo} {price}
              </Card.Text>

              <button
                style={{
                  marginRight: "5PX",
                  padding: "10PX",
                }}
                onClick={handleMinus}
              >
                -
              </button>

              <h7>{state} </h7>

              <button
                style={{
                  marginLeft: "5PX",
                  padding: "10PX",
                }}
                onClick={() => handlePlus(id)}
              >
                +
              </button>
              <div>
                <Button
                  onClick={() => handleClick(producto)}
                  variant="primary"
                  style={{ marginTop: "5px", padding: "10px" }}
                >
                  Agregar al carrito
                </Button>
              </div>
            </Card.Body>
            <div
              style={{
                marginBottom: "10PX",
              }}
            >
              <Link to={`/itemdetails/${id}`}>Detalle</Link>
              <br></br>
              <br></br>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Item;

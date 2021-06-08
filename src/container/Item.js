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
  const [cuentaCarrro, setcuentaCarrro] = useState({ contador: 0 });

  const [id1, setid1] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [producto, setproducto] = useState({
    id,
    imagen,
    articulo,
    Marca,
    price,
    contador,
  });
  /* 
  console.log(state, "state");
  console.log(id1, "el id papu");
  console.log(cuentaCarrro);
 */
  console.log(cantidadFinal, "objeto con productos");

  console.log("cantidad ", cantidad);

  // Cantidad carrito

  /*   let totalProducto = [];

  for (let i = 0; i < cantidadFinal.length; i++) {
    totalProducto = totalProducto.push(cantidadFinal);
  }

  console.log(totalProducto, "total"); */

  function handleClick(product) {
    setAddToCart((addToCart) => (addToCart = true));
    //cantidad individual carrito
    //setCantidadFinal(totalProducto);

    setCantidadFinal([...cantidadFinal, producto]);

    setCart(id1);
    setCantidad((cuenta) => cuenta + state);
    setstate(0);
  }

  function handlePlus(id) {
    setstate(state + 1);
    setid1(id);
    setcuentaCarrro({ contador: cuentaCarrro.contador + 1 });
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

import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CantContext } from "../components/CantContext";
import Modal from "react-bootstrap/Modal";

//import ItemCounter from "../components/ItemCounter";

const Item = ({ id, imagen, articulo, Marca, price, contador, stock }) => {
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
    stock,
  });

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(show, "show");

  const obj = Object.assign(producto, cuentaArticulo);

  function handleClick(product) {
    setAddToCart((addToCart) => (addToCart = true));

    setCantidadFinal([...cantidadFinal, producto]);

    setCantidad((cuenta) => cuenta + state);

    setCart([...idCart, cuentaArticulo]);
    setstate(0);
  }

  function handlePlus(id) {
    if (producto.stock === state) {
      return state && setShow(true);
    } else {
      setstate(state + 1);
    }

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

              {producto.stock === state ? <h7>{state} </h7> : <h7>{state} </h7>}
              {producto.stock === state && (
                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Atencion!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Hemos alcanzado el numero de productos en stock disponibles
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      De acuerdo
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}

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

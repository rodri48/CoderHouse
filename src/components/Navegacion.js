import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { CantContext } from "./CantContext";
import { Link } from "react-router-dom";
/* 
const circle = () => {
  const [cantidad, setCantidad] = useContext(CantContext);
  return <span className="circle">{cantidad}</span>;
}; */

function Navegacion() {
  const { canti, booleano } = useContext(CantContext);
  // eslint-disable-next-line no-unused-vars
  const [cantidad, setCantidad] = canti;

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">E-commerce</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Form inline>
          <Link to="/Cart">
            <i
              class="fas fa-shopping-cart fa-3x"
              style={{ marginRight: "5px", color: "black" }}
            ></i>
            <span
              className="circle"
              style={{ fontSize: "30px", marginRight: "5px", color: "black" }}
            >
              {cantidad}
            </span>
          </Link>

          {booleano === true ? <h3> {cantidad} </h3> : null}
          {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button> */}
          <h4 style={{ marginLeft: "10px" }}> Carrito de compras</h4>
        </Form>
      </Navbar>
    </>
  );
}

export default Navegacion;

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Tienda from "../assets/Tienda.png";
//import Portada from "../assets/portada.jpg";
import Button from "react-bootstrap/Button";

export default function Carousel1() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Tienda}
            alt="First slide"
            height="700px"
          />
          <Carousel.Caption>
            <h3>Tienda de Comida</h3>
            <p style={{ color: "black" }}>
              {" "}
              los mejores Alfajores y Dulce de leche
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.clarin.com/1969/12/31/dulce-de-leche___SymU8z3KNx_1256x620__1.jpg"
            alt="Second slide"
            height="700px"
          />

          <Carousel.Caption>
            <h3 style={{ color: "white" }}>Contactate</h3>
            <p>si tenes alguna duda contactanos</p>
            <Button href="/home">Apreta aqui</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

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
            <p>Alfajores, Dulce de leche, yerba mate</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.misionesonline.news/wp-content/uploads/2018/10/0029473993-3l84uqj2rp7g.jpg"
            alt="Second slide"
            height="700px"
          />

          <Carousel.Caption>
            <h3>Contactate</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button href="/home">Apreta aqui</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

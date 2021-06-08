import React, { useState, useContext } from "react";
import Lapataia from "../assets/Lapataia.webp";
import Portezuelo from "../assets/Portezuelo.jpg";
import Triple from "../assets/Triple.jpg";
import blanco from "../assets/blanco.jpg";
import { useParams } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { CantContext } from "../components/CantContext";

const IteamDetails = () => {
  const { canti, finalCounter, booleano } = useContext(CantContext);
  const [cantidad, setCantidad] = canti;
  const [cantidadFinal, setCantidadFinal] = finalCounter;
  // eslint-disable-next-line no-unused-vars
  const [addToCart, setAddToCart] = booleano;

  function handleClick(product) {
    setAddToCart((addToCart) => (addToCart = true));

    setCantidadFinal([...cantidadFinal, state]);
    setCantidad(cantidadPro + 1);
  }

  const [cantidadPro, setcantidadPro] = useState(0);

  const { id } = useParams();
  console.log(id, "id use params");

  const productos = [
    {
      id: 1,
      articulo: "Dulce de leche",
      Marca: "La pataia",
      price: 17.99,
      imagen: Lapataia,
      stock: 4,
    },
    {
      id: 2,
      articulo: "Alfajor de chocolate y dulce de leche",
      Marca: "Portezuelo",
      price: 20.99,
      imagen: Portezuelo,
      stock: 4,
    },
    {
      id: 3,
      articulo: "Alfajor de Chocolate",
      Marca: "Portezuelo",
      price: 15.99,
      imagen: blanco,
      stock: 4,
    },

    {
      id: 4,
      articulo: "Alfajor triple de chocolate",
      Marca: "Portezuelo",
      price: 15.99,
      imagen: Triple,
      stock: 4,
    },
    {
      id: 5,
      articulo: "Dulce de leche",
      Marca: "conaprole",
      price: 15.99,
      imagen:
        "https://cdn.webshopapp.com/shops/94236/files/361920988/660x660x2/dulce-de-leche-450g.jpg",
      stock: 4,
    },
    {
      id: 6,
      articulo: "Dulce de leche",
      Marca: "Devoto",
      price: 15.99,
      imagen:
        "https://geant.vteximg.com.br/arquivos/ids/223148-1000-1000/220392.jpg?v=636770229085070000",
      stock: 4,
    },
    {
      id: 7,
      articulo: "Dulce de leche",
      Marca: "Havana",
      price: 15.99,
      imagen:
        "https://cdn.webshopapp.com/shops/94236/files/361944667/660x660x2/dulce-de-leche-250g-argentina.jpg",
      stock: 4,
    },
  ];

  console.log(productos, " productos nuevo");
  //console.log(items[id - 1], "rodri aca");

  const id1 = productos.findIndex((o) => {
    console.log(o.id, id);

    return o.id.toString() === id;
  });

  console.log(id1, "aca");

  // eslint-disable-next-line no-unused-vars
  const [state, setstate] = useState(productos[id1]);

  return (
    <div>
      <Jumbotron>
        <h1>{state.articulo}</h1>

        <p>{state.Marca}</p>
        <p>{state.price}</p>
        <img src={state.imagen} alt="Dulce" style={{ height: "400px" }}></img>
        <p>
          <Button onClick={() => handleClick(state)} variant="primary">
            Comprar
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default IteamDetails;

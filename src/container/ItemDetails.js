import React from "react";
import Lapataia from "../assets/Lapataia.webp";
import Portezuelo from "../assets/Portezuelo.jpg";
import Surprise from "../assets/Surprise.jpeg";
import Triple from "../assets/Triple.jpg";
import { useParams } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const IteamDetails = () => {
  const { id } = useParams();
  console.log(id);

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
      imagen: Surprise,
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

  return (
    <div>
      <Jumbotron>
        <h1>{productos[id - 1].articulo}</h1>

        <p>{productos[id - 1].Marca}</p>
        <p>{productos[id - 1].price}</p>
        <img src={productos[id - 1].imagen} alt="Girl in a jacket"></img>
        <p>
          <Button variant="primary">Comprar</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default IteamDetails;

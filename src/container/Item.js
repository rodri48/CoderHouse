import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Item = ({ id, img, articulo, marca, precio }) => {
  console.log(marca, "marca");
  const [count, setCount] = useState(0);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{marca}</Card.Title>
          <Card.Text>
            {articulo} {precio}{" "}
          </Card.Text>
          <div>
            <button
              style={{
                marginRight: "5PX",
                padding: "10PX",
              }}
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
            <h7>{count} </h7>
            <button
              style={{
                marginLeft: "5PX",
                padding: "10PX",
              }}
              onClick={() => setCount(count + 1)}
            >
              +
            </button>{" "}
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
          <Button variant="primary">Comprar</Button>
        </div>
      </Card>
    </div>
  );
};

export default Item;

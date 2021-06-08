import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Spinner from "react-bootstrap/Spinner";
import { getFirestore } from "../firebase";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    const ProductCollection = db.collection("productos");

    ProductCollection.get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No hay items!");
        }
        const productos = querySnapshot.docs.map((doc) => doc.data());
        setItems(productos);
      })
      .catch((err) => console.log(err))

      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1> Productos </h1>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <ItemList data={items} />
      )}
    </div>
  );
}

export default ItemListContainer;

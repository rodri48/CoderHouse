import React from "react";
import Item from "./Item";

const ItemList = ({ data }) => {
  console.log(data, "productos , itemlist");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row  ",
        justifyContent: "center",
        margin: "20px",
      }}
    >
      {data.map((dato, idx) => {
        return (
          <div>
            <Item
              style={{
                margin: "20px",
                paddign: "10px",

                height: "50px",
              }}
              key={idx}
              img={dato.imagen}
              articulo={dato.articulo}
              marca={dato.Marca}
              precio={dato.price}
              id={dato.id}
            ></Item>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

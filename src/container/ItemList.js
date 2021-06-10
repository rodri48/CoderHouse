import Item from "./Item";

const ItemList = ({ data }) => {
  console.log(data, "data");
  return (
    <div className="items">
      {data.map((dato, idx) => {
        return (
          <Item
            key={idx}
            imagen={dato.imagen}
            articulo={dato.articulo}
            Marca={dato.Marca}
            price={dato.price}
            id={dato.id}
            contador={dato.cuenta}
            stock={dato.stock}
          ></Item>
        );
      })}
    </div>
  );
};

export default ItemList;

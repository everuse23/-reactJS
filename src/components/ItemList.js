import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <section className="products">
      {productos.map((producto, id) => {
        return <Item key={id} producto={producto} />;
      })}
    </section>
  );
};

export default ItemList;

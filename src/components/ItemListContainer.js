const ItemListContainer = (props) => {
  console.log(props.nombre);

  return (
    <main className="container">
      <p className="parrafito">{props.mensaje}</p>
    </main>
  );
};

export default ItemListContainer;

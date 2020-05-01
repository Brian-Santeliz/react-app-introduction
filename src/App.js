import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

import "./style/main.css";

function App() {
  //productos listados
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Franela ReactJS", Precio: 90 },
    { id: 2, nombre: "Franela Angular", Precio: 45 },
    { id: 3, nombre: "Franela VueJS", Precio: 80 },
    { id: 4, nombre: "Franela NodeJS", Precio: 95 },
  ]);

  //State para el carrito
  const [carrito, setCarrito] = useState([]);

  //obtener fecha
  const año = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo={"Tienda Virtual desde el Props"} />

      <h1 className="titulo">Lista de Productos:</h1>
      {/* recorriendo los productos e imprimiendo en el componente. */}
      <div className="contenedor">
        {productos.map((producto) => (
          <Producto
            key={producto.id}
            productos={productos}
            producto={producto}
            carrito={carrito}
            setCarrito={setCarrito}
          />
        ))}
      </div>
      <Carrito
        carrito={carrito}
        setCarrito={setCarrito}
        tituloCarrito="Carrito de compras"
      />

      <Footer año={año} />
    </Fragment>
  );
}

export default App;

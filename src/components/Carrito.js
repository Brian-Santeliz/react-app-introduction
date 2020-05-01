import React from "react";
import "../style/carrito.css";
import Producto from "./Producto";

const Carrito = ({ carrito, setCarrito, tituloCarrito }) => (
  <div className="padre">
    <div className="carrito">
      <h2>{tituloCarrito}</h2>

      {/* recorre los elementos del carrito y lo renderiza con el componente
    producto */}
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        carrito.map((producto) => (
          <Producto
            key={producto.id}
            producto={producto}
            carrito={carrito}
            setCarrito={setCarrito}
          />
        ))
      )}
    </div>
  </div>
);

export default Carrito;


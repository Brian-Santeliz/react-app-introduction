import React, { Fragment } from "react";
import "../style/producto.css";

const Producto = ({ producto, carrito, setCarrito, productos }) => {
  const { id, nombre, Precio } = producto;
  //Función para agregar productos al carrito.
  const boton = (id) => {
    //recorre el arreglo de objetos de productos y...
    //devuleve un nuevo arreglo con el id del producto selecionado en el indice 0
    const productoCarrito = productos.filter((producto) => producto.id === id);
    // modifica el state y lo agrega al nuevo arreglo de carrito.
    setCarrito([...carrito, ...productoCarrito]);
  };
  //funcion para eliminar un producto del state por su id.

  const eliminarProducto = (id) => {
    const productosParaEliminar = carrito.filter(
      (producto) => producto.id !== id
    );

    //funcion para colocar los productos en el state no es necesario...
    //colocar el arreglo porque .filter me devulve el arreglo.
    setCarrito(productosParaEliminar);
  };

  return (
    <Fragment>
      <div className="lista">
        <h1>{nombre}</h1>
        <p>${Precio}</p>
      </div>
      <span className="contenedor">
        {productos ? (
          <button className="boton" type="button" onClick={() => boton(id)}>
            Comprar
          </button>
        ) : (
          <button
            className="boton"
            type="button"
            onClick={() => eliminarProducto(id)}
          >
            ELiminar
          </button>
        )}
      </span>
    </Fragment>
  );
};

export default Producto;

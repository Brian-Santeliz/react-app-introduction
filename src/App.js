import React, { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  //obtener fecha
  const año = new Date().getFullYear();
  
  return (
    <Fragment>
      <Header
        titulo={'Tienda Virtual desde el Props'}
        
      />

      <Footer 
        año={año}
      />
    </Fragment>
  );
}

export default App;

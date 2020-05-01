import React from "react";
import '../style/footer.css'

const Footer = ({ año }) => {

    return (
    <span className="contenedor2">
<footer className="footer">
      <p>todos los derechos reservados &copy; {año}</p>
    </footer>
    </span>
  );
};

export default Footer;

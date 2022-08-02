import React from "react";
import PropTypes from "prop-types";
import Contacto from "../../class/Contacto.class";

function ContactosComponente({ contacto }) {
  return (
    <div>
      <h2>Nombre: {contacto.nombre}</h2>
      <h2>Apellidos: {contacto.apellido}</h2>
      <h2>Email: {contacto.email}</h2>
      <h2>Estado: {contacto.conectado ? "En Línea" : "Desconectado"}</h2>
    </div>
  );
}

ContactosComponente.propTypes = {
  Contacto: PropTypes.instanceOf(Contacto),
};

export default ContactosComponente;

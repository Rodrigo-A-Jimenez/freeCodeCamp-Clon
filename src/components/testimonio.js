/* eslint-disable react/prop-types */
import React from 'react';
import testimonioEmma from '../images/testimonioEmma Bostian.png';
import '../styles/testimonio.css';

function Testimonio(props) {
  const {
    nombre, pais, cargo, empresa, testimonio,
  } = props;
  return (
    <div className="testimonio">
      <img
        className="imagen-testimonio"
        src={testimonioEmma}
        alt="Foto de Emma"
      />

      <div className="contenedor-texto-testimonio">
        <p className="testimonio-nombre">
          <strong>{nombre}</strong> en {pais}
        </p>
        <p className="testimonio-cargo">
          {cargo} en {empresa}
        </p>
        <p className="testimonio-texto">
          {testimonio}
        </p>
      </div>
    </div>
  );
}

export default Testimonio;

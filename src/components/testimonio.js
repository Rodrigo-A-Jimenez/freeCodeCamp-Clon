import React from 'react';
import testimonioEmma from '../images/testimonioEmma.png';
import '../styles/testimonio.css';

function Testimonio(props) {
  return (
    <div className="testimonio">
      <img
        className="imagen-testimonio"
        src={testimonioEmma}
        alt="Foto de Emma"
      />

      <div className="contenedor-texto-testimonio">
        <p className="testimonio-nombre">
          {props.nombre}
          en
          {props.pais}
        </p>
        <p className="testimonio-cargo">
          {props.cargo}
          en
          {props.empresa}
        </p>
        <p className="testimonio-texto">
          {props.testimonio}
        </p>
      </div>
    </div>
  );
}
export default Testimonio;

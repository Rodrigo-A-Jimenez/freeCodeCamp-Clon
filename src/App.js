import React from 'react';
import logo from './logo.svg';
import './App.css';
import Testimonio from './components/testimonio';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre="Emma"
          pais="España"
          cargo="Front-end developer"
          empresa="FreeCodeCamp"
          testimonio="sacará una gran parte de su tiempo en el curso, y en la práctica."
        />
      </div>
    </div>
  );
}
export default App;

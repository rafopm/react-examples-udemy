import React from "react";

function EjemplosInicio() {
  const element = <h3>{2 + 2}</h3>;

  const numeros = [1, 1, 3, 5, 7];

  function multiplicar(a, b) {
    return a * b;
  }

  const btnPulsado = () => {
    alert("hola");
  };

  return (
    <div>
      <hr></hr>
      <h2>Ejemplos de Inicio</h2>
      <p>Suma: {element}</p>
      <p>Multiplicar: {multiplicar(2, 3)}</p>
      <button onClick={btnPulsado}>Púlsame</button>
      <p>Recorriendo Array</p>
      {numeros.map((n, key) => {
        return <p key={key}>Array {key}: {n}</p>;
      })}
    </div>
  );
}

export default EjemplosInicio;

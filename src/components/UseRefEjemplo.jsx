import React, { useRef } from "react";
import './useRefEjemplo.css'

function UseRefEjemplo() {
  const firstNumRef = useRef(null);
  const secondNumRef = useRef(null);
  const resultadoRef = useRef(null);

  const procesar = () => {
    resultadoRef.current.innerHTML = firstNumRef.current.value *secondNumRef.current.value;
  };

  return (
    <div>
      <hr></hr>
      <h2>Ejemplo de useRef</h2>
      <label htmlFor="num1">Número 1: </label>
      <input id="num1" type="number" ref={firstNumRef} />
      <br></br>
      <label htmlFor="num2">Número 2: </label>
      <input id="num2" type="number" ref={secondNumRef} />
      <br></br>
      <button onClick={procesar}>Calcular área</button>
      <div className="areaCuadrado"><div>Area: </div><div ref={resultadoRef}></div></div>
    </div>
  );
}

export default UseRefEjemplo;

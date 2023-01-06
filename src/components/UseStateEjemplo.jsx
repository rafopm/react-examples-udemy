import React, { useState, useEffect } from "react";
import "./useStateEjemplo.css";

function UseStateEjemplo() {
  const fotos = [
    "https://images.dog.ceo/breeds/sharpei/noel.jpg",
    "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_14794.jpg",
    "https://images.dog.ceo/breeds/terrier-kerryblue/n02093859_2202.jpg",
  ];

  const [imagen, setImagen] = useState(fotos[0]);
  const [inputText, setInputText] = useState("");
  const [mensaje, setMensaje] = useState("Se mostró el perrito")

  function mostrarImagen1() {
    setImagen(fotos[0]);
  }

  function mostrarImagen2() {
    setImagen(fotos[1]);
  }

  function mostrarImagen3() {
    setImagen(fotos[2]);
  }

useEffect(() => {
  setMensaje(`La nueva ruta de la imagen del perrito es: ${imagen}`)
  return () => {
    setMensaje("Cargando información de la imagen del perrito")
  }
}, [imagen])


  return (
    <div className="App">
      <hr></hr>
      <h2>Ejemplos de useState y useEffect</h2>
      <input type="text" onChange={(e) => setInputText(e.target.value)} placeholder="Escribe aquí"/>
      <div>Resultado: {inputText}</div>
      <div>
        {imagen !== fotos[0] && (
          <button onClick={() => mostrarImagen1()}>Sharpei</button>
        )}
        {imagen !== fotos[1] && (
          <button onClick={() => mostrarImagen2()}>Cocker</button>
        )}
        {imagen !== fotos[2] && (
          <button onClick={() => mostrarImagen3()}>Terrier</button>
        )}
      </div>

      <img src={imagen} className="perritos" alt="Imagen de Perro" srcset="" />
      <div>{mensaje}</div>
    </div>
  );
}

export default UseStateEjemplo;

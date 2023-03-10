import React, { useState, useEffect } from "react";
import "./useStateEjemplo.css";
import img from "../assets/img"

function UseStateEjemplo() {
  const [imagen, setImagen] = useState(img[0].ruta);
  const [inputText, setInputText] = useState("");
  const [mensaje, setMensaje] = useState("Se mostró el perrito")

  function mostrarImagen1() {
    setImagen(img[0].ruta);
  }

  function mostrarImagen2() {
    setImagen(img[1].ruta);
  }

  function mostrarImagen3() {
    setImagen(img[2].ruta);
  }

useEffect(() => {
  setMensaje(`La nueva ruta de la imagen del perrito es: ${imagen}`)
  return () => {
    setMensaje("Cargando información de la imagen del perrito")
  }
}, [imagen])


  return (
    <div className="container-sm">
      <hr></hr>
      <h2>Ejemplos de useState y useEffect</h2>
      <input type="text" onChange={(e) => setInputText(e.target.value)} placeholder="Escribe aquí"/>
      <div>Resultado: {inputText}</div>
      <hr></hr>
      <h2>Cambia de perro</h2>
      <div>
        {imagen !== img[0].ruta && (
          <button onClick={() => mostrarImagen1()} className="btn btn-primary">{img[0].nombre}</button>
        )}
        {imagen !== img[1].ruta && (
          <button onClick={() => mostrarImagen2()} className="btn btn-danger">{img[1].nombre}</button>
        )}
        {imagen !== img[2].ruta && (
          <button onClick={() => mostrarImagen3()} className="btn btn-warning">{img[2].nombre}</button>
        )}
      </div>
      <hr></hr>
      <img src={imagen} className="perritos" alt="Imagen de Perro"/>
      <div>{mensaje}</div>
    </div>
  );
}

export default UseStateEjemplo;

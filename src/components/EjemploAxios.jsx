import React, { useState, useEffect } from "react";
import axios from "axios";

const EjemploAxios = () => {
  const [result, setResult] = useState([]);
  const [poke, setPoke] = useState([]);
  const [load, setLoad] = useState("true");

  const arr = [];

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=50")
   // .then((response) => response.json())
      .then((data) => {
      //setPoke(data.data.results);
      setResult(
          
          data.data.results.map((item) => {
            setPoke(axios.get(item.url))
            axios.get(item.url)
              .then((allpokemon) => arr.push(allpokemon));
            setPoke(arr);
           }
         )
       ) }
      );
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/ditto`)
  //     .then((res) => {
  //       setName(res.data.name);
  //     })
  // }, []);

  setTimeout(() => {
    setLoad(false);
    console.log(poke)
  }, 1000);

  return (
    <div className="container">
      <h2>Ejemplo de Axios Anidado</h2>
      <p>Array de pokemons desde la PokeApi</p>
      <div className="row row-cols-1 row-cols-md-2" style={{ gap: "10px" }}>
        {load ? (
          <p>Loading...</p>
        ) : (
          poke.map((img, i) => (
            <div className="card" style={{ width: "10rem" }}>
              <div id={img.data.id} key={img.data.id}>
                <img
                  className="card-img-top"
                  src={img.data.sprites.other.dream_world.front_default}
                  alt="pokemon"
                />
                <div className="card-body">
                  <h5 className="card-text">{img.data.name}</h5>
                  <h6 className="text-muted">type: {img.data.types[0].type.name}</h6>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EjemploAxios;

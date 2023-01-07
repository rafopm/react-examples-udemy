import React, { useState, useEffect } from "react";

const EjemploFetch = () => {
  const [result, setResult] = useState([]);
  const [poke, setPoke] = useState([]);
  const [load, setLoad] = useState("true");

  const arr = [];

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=50")
      .then((response) => response.json())
      .then((data) =>
      
        setResult(

          data.results.map((item) => {
            console.log(data.results)
            fetch(item.url)
              .then((response) => response.json())
              .then((allpokemon) => arr.push(allpokemon));
            setPoke(arr);
          })
        )
      );
  }, []);

  setTimeout(() => {
    setLoad(false);
  }, 1000);

  return (
    <div className="container">
      <h2>Ejemplo de Fetch Anidado</h2>
      <p>Array de pokemons desde la PokeApi</p>
      <div className="row row-cols-1 row-cols-md-2" style={{ gap: "10px" }}>
        {load ? (
          <p>Loading...</p>
        ) : (
          poke.map((img, i) => (
            <div className="card" style={{ width: "10rem" }}>
              <div id={img.id} key={img.id}>
                <img
                  className="card-img-top"
                  src={img.sprites.other.dream_world.front_default}
                  alt="pokemon"
                />
                <div className="card-body">
                  <h5 className="card-text">{img.name}</h5>
                  <h6 className="text-muted">type: {img.types[0].type.name}</h6>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EjemploFetch;

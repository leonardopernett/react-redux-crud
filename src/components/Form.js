import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerWord,
  deleteJugadores,
} from "../redux/palabraDock";


export default function Form() {
  const [word, setWord] = useState("");

  //ejecutar las actions 
  const dispatch = useDispatch();

  //obtener data desde el store
  const jugadores = useSelector((store) => store.array.jugadores);
  const palabras = useSelector((store) => store.array.palabra);

  const getWord = () => {
    dispatch(obtenerWord(word));
    setWord("");
  };

  const removeJugador = (id) => {
    return dispatch(deleteJugadores(id));
  };

  return (
    <div>
        <h1>lista de jugadores </h1>
      {jugadores.map(({ nombre, id }) => (
        <ul key={id}>
          <li>
            {nombre}
            <button onClick={() => removeJugador(id)}>delete</button>
          </li>
        </ul>
      ))}
    
      <h3>agregar una palabra </h3>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={getWord}>save</button>
      {
        palabras.map((item, i)=>{
            return <ul key={i}>
                <li>{item}</li>
            </ul>
        })
      }
    </div>
  );
}

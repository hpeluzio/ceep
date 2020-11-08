import React, { Component } from "react";
import CardNota from "./CardNota/CardNota";

class ListaDeNotas extends Component {
  state = {};
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Prova", "Estudo").map((index, categoria) => {
          return (
            <li key={index}>
              <div>{categoria}</div>
              <CardNota></CardNota>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;

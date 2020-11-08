import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";

class CardNota extends Component {
  // constructor(props) {

  // }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.nota.titulo}</h3>
          {/* <img src={deleteSVG} alt=""/> */}
          <DeleteSVG
            onClick={() => {
              this.props.deletarNota(this.props.index);
            }}
          />
          <h4>{this.props.nota.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.nota.texto}</p>
      </section>
    );
  }
}

export default CardNota;

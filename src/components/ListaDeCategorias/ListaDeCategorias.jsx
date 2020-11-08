import React, { Component } from "react";
import "./style.css";

class ListaDeCategorias extends Component {

  constructor() {
    super()
    this.state = { categorias:[] }
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  _novasCategorias(categorias) {
    this.setState({...this.state, categorias})
    console.log("categori");
  }

  _handleEventoInput(e) {
    // console.log("EVENTO", e);
    if (e.key == "Enter") {
      console.log("ADD CATEGORIA");
      this.props.adicionarCategoria(e.target.value);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          <ul className="lista-categorias_lista">
            {this.state.categorias.map((categoria, index) => {
              return (
                <li key={index} className="lista-categorias_item">
                  {categoria}
                </li>
              );
            })}
          </ul>
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Inserir categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;

import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {
  constructor(props) {
    super(props);
    // this.notas = props.notas;
    this.state = { notas:[] }
    this._novasNotas = this._novasNotas.bind(this)
  }


  componentDidMount() {
    console.log('asdsa')
    this.props.notas.inscrever(this._novasNotas)
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasNotas)
  }
  
  _novasNotas(notas) {
    console.log('asdsa')
    this.setState({...this.state, notas})
  }


  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                index={index}
                deletarNota={this.props.deletarNota}
                nota={nota}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;

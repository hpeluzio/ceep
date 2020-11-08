import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor(props) {
    super();
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";
    this.state = { categorias:[] }

    this._novasCategorias = this._novasCategorias.bind(this)
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias)
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias)
  }

  _novasCategorias(categorias) {
    this.setState({...this.state, categorias})
  }

  handlerMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
    console.log("handlerMudancaCategoria: ", this.categoria);
  }

  handlerMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
    // console.log('handlerMudancaTitulo: ', this.titulo)
  }

  handlerMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
    // console.log('handlerMudancaTexto: ', this.texto)
  }

  criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    // console.log('Uma nova nota foi criada. ' + this.titulo + ' - ' + this.texto)
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro " onSubmit={this.criarNota.bind(this)}>
        <select
          className="form-cadastro_input"
          onChange={this.handlerMudancaCategoria.bind(this)}
        >
          <option defaultChecked={true}>Sem categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handlerMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this.handlerMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;

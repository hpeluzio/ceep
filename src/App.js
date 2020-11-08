import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
class App extends Component {
  constructor() {
    super();
    // this.notas = []
    this.state = {
      notas: [],
      categorias: ["Games", "Musica"],
    };
  }

  criarNota(titulo, texto, categoria) {
    // evento.preventDefault();
    // evento.stopPropagation();
    // console.log('Uma nova nota foi criada. ' + titulo + ' - ' + texto)

    //----------------------------
    // let novaNota = {titulo, texto}
    // console.log('novaNota: ',novaNota)
    // let novoArrayNotas = [...this.state.notas, novaNota]
    // console.log('novoArrayNotas: ',novoArrayNotas)
    // let novoEstado = {
    //   notas: novoArrayNotas
    // }
    // this.setState(novoEstado)

    //----------------------------
    const novaNota = { titulo, texto, categoria };
    // console.log('novaNota: ',novaNota)
    var novoArrayNotas = this.state.notas;
    novoArrayNotas.push(novaNota);
    // console.log('novoArrayNotas: ',novoArrayNotas)
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);

    // console.log('this.state', this.state);
  }

  deletarNota(index) {
    console.log("DELETAR! ");
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  adicionarCategoria(categoria) {
    // var todasCategorias = this.state.categorias;
    // todasCategorias.push(categoria);
    // const novoEstado = {
    //   categorias: todasCategorias,
    // };
    // this.setState(novoEstado);

    const arrayCategorias = [...this.state.categorias, categoria];
    const novoEstado = {
      categorias: arrayCategorias,
    };
    this.setState(novoEstado);

    console.log(this.state);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
          <ListaDeNotas
            deletarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;

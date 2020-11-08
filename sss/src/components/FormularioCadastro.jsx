import React, { Component } from "react";

class FormularioCadastro extends Component {
  state = {};
  render() {
    return (
      <form action="">
        <input type="text" placeholder="Título" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Título"
        ></textarea>
        <button>Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;

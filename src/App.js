import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias"
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";
import "./assets/bootstrap.css";
import ArrayNotas from "./Database/Notas"
import Categorias from "./Database/Categorias"

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.categorias.categorias} adicionarNota={this.notas.adicionarNota} />
        <main className="conteudo-principal">
          <ListaDeCategorias adicionarCategoria={this.categorias.categorias.adicionarCategoria} categorias={this.categorias.categorias} />
          <ListaDeNotas notas={this.notas.notas} deletarNota={this.notas.deletarNota} />
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;

import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./ListaDeCategorias";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";
import "./assets/bootstrap.css";
import { listaCategoriasMock, listaNotasMock } from "./Database/Database"

class App extends Component {

  constructor() {
    super();

    this.state = {
      notas: listaNotasMock,
      categorias: listaCategoriasMock,
    }
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(index) {
    const listaNotas = this.state.notas;
    listaNotas.splice(index, 1);
    const novoEstado = {
      notas: listaNotas
    }
    this.setState(novoEstado)
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = { ...this.state, categorias: novoArrayCategorias }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.state.categorias} criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias adicionarCategoria={this.adicionarCategoria.bind(this)} categorias={this.state.categorias} />
          <ListaDeNotas notas={this.state.notas} deletarNota={this.deletarNota.bind(this)} />
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;

import React, { Component } from "react";
import "./estilo.css";
class ListaDeCategorias extends Component {
  state = {};
  _handleEventoInput(e) {
    if (e.key === "Enter") {
        let valorCategoria = e.target.value;
        this.props.adicionarCategoria(valorCategoria)
        e.target.value = ""
    }
  }
  render() {
    return (
      <section>
        <div className="list-group p-2">
          {this.props.categorias.map((categoria, index) => {
            return (
              <button
                type="button"
                className="list-group-item list-group-item-action"
                key={index}
              >
                {categoria}
              </button>
            );
          })}
        </div>
        <input
          className="form-control mb-1"
          type="text"
          placeholder="Digite o nome da categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;

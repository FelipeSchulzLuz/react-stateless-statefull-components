import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as TrashSVG } from "../../assets/trash.svg";
class CardNota extends Component {
  deletar() {
    const index = this.props.indice;
    this.props.deletarNota(index);
  }
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h2 className="card-nota_titulo">{this.props.titulo}</h2>
          <TrashSVG
            id="delete-icon"
            width="20"
            onClick={this.deletar.bind(this)}
          />
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}
export default CardNota;

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
      <section className="card">
        <div className="card-header input-group d-flex">
          <h2 className="card-nota_titulo">{this.props.titulo}</h2>
          <TrashSVG
            id="delete-icon"
            width="20"
            onClick={this.deletar.bind(this)}
          />
        </div>
        <div className="card-body">{this.props.texto}</div>
        <div className="card-footer"><label>Categoria:</label> {this.props.categoria}</div>
      </section>
    );
  }
}
export default CardNota;

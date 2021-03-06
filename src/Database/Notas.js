export default class ArrayNotas {
    constructor() {
        this.notas = [];
        this._inscritos = [];
    }

    adicionarNota(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);
        this.notificar();
    }

    deletarNota(index) {
        this.notas.splice(index, 1);
        this.notificar();
    }
    
    desinscrever(func) {
        this._inscritos.filter(f => f !== func)
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    notificar() {
        this._inscritos.forEach(func => {
            func(this.notas);
        })
    }
}
class Nota {
    constructor(titulo, texto, categoria) {
        this.texto = texto;
        this.titulo = titulo;
        this.categoria = categoria;
    }
}
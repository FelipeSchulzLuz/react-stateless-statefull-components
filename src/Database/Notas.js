export default class ArrayNotas {
    constructor() {
        this.notas = [
            {
                texto: "first1.last1@mail.com",
                titulo: "First1 Last1",
                categoria: "$mockData1"
            },
            {
                texto: "first2.last2@mail.com",
                titulo: "First2 Last2",
                categoria: "$mockData2"
            },
            {
                texto: "first3.last3@mail.com",
                titulo: "First3 Last3",
                categoria: "$mockData3"
            },
            {
                texto: "first4.last4@mail.com",
                titulo: "First4 Last4",
                categoria: "$mockData4"
            },
            {
                texto: "first5.last5@mail.com",
                titulo: "First5 Last5",
                categoria: "$mockData5"
            },
            {
                texto: "first6.last6@mail.com",
                titulo: "First6 Last6",
                categoria: "$mockData6"
            },
            {
                texto: "first7.last7@mail.com",
                titulo: "First7 Last7",
                categoria: "$mockData7"
            },
            {
                texto: "first8.last8@mail.com",
                titulo: "First8 Last8",
                categoria: "$mockData8"
            },
            {
                texto: "first9.last9@mail.com",
                titulo: "First9 Last9",
                categoria: "$mockData9"
            },
            {
                texto: "first10.last10@mail.com",
                titulo: "First10 Last10",
                categoria: "$mockData10"
            },
            {
                texto: "first11.last11@mail.com",
                titulo: "First11 Last11",
                categoria: "$mockData11"
            },
            {
                texto: "first12.last12@mail.com",
                titulo: "First12 Last12",
                categoria: "$mockData12"
            },
            {
                texto: "first13.last13@mail.com",
                titulo: "First13 Last13",
                categoria: "$mockData13"
            },
            {
                texto: "first14.last14@mail.com",
                titulo: "First14 Last14",
                categoria: "$mockData14"
            },
            {
                texto: "first15.last15@mail.com",
                titulo: "First15 Last15",
                categoria: "$mockData15"
            },
            {
                texto: "first16.last16@mail.com",
                titulo: "First16 Last16",
                categoria: "$mockData16"
            },
            {
                texto: "first17.last17@mail.com",
                titulo: "First17 Last17",
                categoria: "$mockData17"
            },
            {
                texto: "first18.last18@mail.com",
                titulo: "First18 Last18",
                categoria: "$mockData18"
            },
            {
                texto: "first19.last19@mail.com",
                titulo: "First19 Last19",
                categoria: "$mockData19"
            },
            {
                texto: "first20.last20@mail.com",
                titulo: "First20 Last20",
                categoria: "$mockData20"
            },
            {
                texto: "first21.last21@mail.com",
                titulo: "First21 Last21",
                categoria: "$mockData21"
            },
            {
                texto: "first22.last22@mail.com",
                titulo: "First22 Last22",
                categoria: "$mockData22"
            },
            {
                texto: "first23.last23@mail.com",
                titulo: "First23 Last23",
                categoria: "$mockData23"
            },
            {
                texto: "first24.last24@mail.com",
                titulo: "First24 Last24",
                categoria: "$mockData24"
            },
            {
                texto: "first25.last25@mail.com",
                titulo: "First25 Last25",
                categoria: "$mockData25"
            }
        ]
        
    }

    adicionarNota(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota)
    }

    deletarNota(index) {
        this.notas.splice(index, 1);
    }

}

class Nota {
    constructor(titulo, texto, categoria) {
        this.texto = texto;
        this.titulo = titulo;
        this.categoria = categoria;
    }
}
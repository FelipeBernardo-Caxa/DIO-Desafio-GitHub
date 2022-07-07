"use strict";
const pessoa = {
    nome: "Mariana",
    idade: 20,
    profissao: "desenvolvedora"
};
pessoa.idade = 25;
const andre = {
    nome: "Andre",
    idade: 25,
    profissao: "pintor"
};
const paula = {
    nome: "Paula",
    idade: 25,
    profissao: "Desenvolvedora"
};
//Perceba que a profissao da "pessoa" é com "D" minúsculo, porém da "paula" é com "D" maiúsculo. 
//Para tratar isso usamos "enum"
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: "Maria",
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: "Jéssica",
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'Programação']
};
const monica = {
    nome: "Monica",
    idade: 28,
    materias: ['Matemática discreta', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log("- ", item);
    }
}
listar(monica.materias);

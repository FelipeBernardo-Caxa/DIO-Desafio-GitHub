"use strict";
var TiposProfissao;
(function (TiposProfissao) {
    TiposProfissao[TiposProfissao["Atriz"] = 0] = "Atriz";
    TiposProfissao[TiposProfissao["Padeiro"] = 1] = "Padeiro";
})(TiposProfissao || (TiposProfissao = {}));
let maria = {
    nome: "maria",
    idade: 29,
    profissao: TiposProfissao.Atriz
};
let roberto = {
    nome: "roberto",
    idade: 19,
    profissao: TiposProfissao.Padeiro
};
let laura = {
    nome: "laura",
    idade: 32,
    profissao: TiposProfissao.Atriz
};
let carlos = {
    nome: "carlos",
    idade: 19,
    profissao: TiposProfissao.Padeiro
};

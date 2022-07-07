enum TiposProfissao {
    Atriz,
    Padeiro
}

interface Ipessoa {
    nome: string,
    idade: number,
    profissao: TiposProfissao
}

let maria: Ipessoa ={
    nome: "maria",
    idade: 29,
    profissao: TiposProfissao.Atriz
}

let roberto: Ipessoa ={
    nome: "roberto",
    idade: 19,
    profissao: TiposProfissao.Padeiro
}

let laura: Ipessoa ={
    nome: "laura",
    idade: 32,
    profissao: TiposProfissao.Atriz
}

let carlos: Ipessoa ={
    nome: "carlos",
    idade: 19,
    profissao: TiposProfissao.Padeiro
}
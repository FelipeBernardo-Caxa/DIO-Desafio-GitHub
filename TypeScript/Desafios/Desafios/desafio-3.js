"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0;
//Função para limpar o Input.
function limparCampoInput() {
    if (soma) {
        soma.value = '';
    }
}
function somarAoSaldo(soma) {
    saldoTotal += soma;
    if (campoSaldo) {
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
function limparSaldo() {
    if (campoSaldo) {
        campoSaldo.innerHTML = '';
    }
    limparCampoInput();
    saldoTotal = 0;
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
        limparCampoInput();
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar    = document.getElementById('limpar-saldo')    as HTMLButtonElement;
let soma           = document.getElementById('soma')            as HTMLInputElement;
let campoSaldo     = document.getElementById('campo-saldo')     as HTMLSpanElement;

let saldoTotal:number = 0;

//Função para limpar o Input.
function limparCampoInput(){
    if (soma){
        soma.value = '';
    }    
}

function somarAoSaldo(soma:number):void {
    saldoTotal += soma;
    if (campoSaldo){
        campoSaldo.innerHTML = saldoTotal.toString();
    }    
}

function limparSaldo() {
    if (campoSaldo){
        campoSaldo.innerHTML = '';
    }
    
    limparCampoInput();
    saldoTotal = 0;
}

if (botaoAtualizar){
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
        limparCampoInput();
    });
}

if (botaoLimpar){
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}
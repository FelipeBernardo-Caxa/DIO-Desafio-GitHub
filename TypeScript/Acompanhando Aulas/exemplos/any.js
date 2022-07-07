"use strict";
let valorAny;
valorAny = 3;
valorAny = "Olá";
valorAny = true;
let valorString = "Teste";
//valorString = 3; --Isso dá um Erro porque estou tentando atribuir number para string.
//Porém ele aceita uma variável do tipo ANY.
valorString = valorAny;
let valorString2 = "Testão";
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);

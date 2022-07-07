let valorAny: any;
valorAny = 3;
valorAny = "Olá";
valorAny = true;

let valorString: string = "Teste";
//valorString = 3; --Isso dá um Erro porque estou tentando atribuir number para string.
//Porém ele aceita uma variável do tipo ANY.
valorString = valorAny;

let valorString2: string = "Testão";
valorString2 = valorAny;

function somarString(string1: string, string2: string){
    console.log(string1+ string2);
}

somarString(valorString, valorString2);
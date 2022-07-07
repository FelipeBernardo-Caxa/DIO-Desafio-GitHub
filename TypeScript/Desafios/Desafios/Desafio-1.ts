// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/*
let employee = {};
employee.code = 10;
employee.name = "John";
*/

//Tipo 1
interface Iemployee {
    code: number,
    name: string
}

const employee: Iemployee = {
    code: 10,
    name: "John"
}

//Tipo 2
const employee2: {code: number, name: string} = {
    code: 10,
    name: "John"
}
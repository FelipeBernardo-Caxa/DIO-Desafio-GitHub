let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'opa';
anyEstaDeVolta = true;

let stringTest: string = 'Verificar';
stringTest = anyEstaDeVolta; //Atribui um tipo BOOLEAN para um tipo STRING. O ANY permite isso.

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTest2: string = 'agora vai';
//stringTest2 = unknownValor; --Para o Unknown, ele recebe qualquer tipo, porém uma STRING não pode receber seu valor igual o ANY.
//Tem que tratar antes de atribuir.

if (typeof unknownValor === 'string'){
    stringTest2 = unknownValor;    
}

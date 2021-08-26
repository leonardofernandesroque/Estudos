

// Somando todos os valores (Reduce)
/*
const numeros = [5,10,50,60,2,3,7,9,8,44,69,33];

const total = numeros.reduce(function(acumulador, valor, incide, array){
    acumulador += valor;
    return acumulador;
});

console.log(total);
*/
//-----------------------------------------------------------------------
//Retornando array com os pares (Filter)
/*
const numeros = [5,10,50,60,2,3,7,9,8,44,69,33];

const total = numeros.reduce(function(acumulador, valor){
   if(valor % 2 ===0) acumulador.push(valor);
    return acumulador;
},[] );

console.log(total);
*/
//-----------------------------------------------------------------------

//Retornando array com o dobro de valores(Map)
/*
const numeros = [5,10,50,60,2,3,7,9,8,44,69,33];

const total = numeros.reduce(function(acumulador, valor){
   acumulador.push(valor * 2);
    return acumulador;
},[] );

console.log(total);
*/


const pessoas = [
    { nome : 'Pedro', idade : 25} ,
    { nome : 'Maria', idade : 18 },
    { nome : 'João', idade : 36},
    { nome : 'Rosana', idade : 59},
    { nome : 'Erick', idade : 29},
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);
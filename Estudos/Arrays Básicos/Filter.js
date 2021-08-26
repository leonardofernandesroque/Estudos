// filter -> Sempre retornar um array, com a mesma quantidade de elementos 
//ou menos.

// Retorne os números maiores que 10

//const numeros = [2, 5, 6, 4, 8, 9, 7, 10, 11, 65, 47, 99, 20, 13, 24, 44];
/*
function callbackFilter(valor, indice, array){
    if(valor >10 ){
        return true;
    }else{
        return false;
    }
}
*/

/*
function callbackFilter(valor){
    return valor > 10;
}
const numerosFiltrados = numeros.filter(callbackFilter);

*/

//const numerosFiltrados = numeros.filter(valor => valor > 10);

//console.log(numerosFiltrados);



const pessoas = [
    { nome : 'Pedro', idade : 25} ,
    { nome : 'Maria', idade : 18 },
    { nome : 'João', idade : 36},
    { nome : 'Rosana', idade : 59},
    { nome : 'Erick', idade : 29},
];

const pessoasComNomeGrande = pessoas.filter( obj => obj.nome.length >= 5 );
const pessoasComMaisDeCinquantaAnos = pessoas.filter(obj2 => obj2.idade > 30 );
const pessoasComNomeFinalA = pessoas.filter(obj3 => obj3.nome.toLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDeCinquantaAnos);
console.log(pessoasComNomeFinalA);
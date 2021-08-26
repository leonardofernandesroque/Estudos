//
/*
const numeros = [5,10,50,60,2,3,7,9,8,44,69,33];

const numerosEmDobro = numeros.map( valor => valor *2);

console.log(numerosEmDobro);
*/



const pessoas = [
    { nome: 'Leonardo' , idade: 26 },
    { nome: 'Maria' , idade: 18 },
    { nome: 'josé' , idade: 40 },
    { nome: 'Rosana' , idade: 70 },
    { nome: 'Wallace' , idade: 35 },
];



const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade}));

const ComIds= pessoas.map( function(obj, indice){
    const newobj = { ...obj };
    newobj.id = indice;
    return newobj;
});
console.log(ComIds);
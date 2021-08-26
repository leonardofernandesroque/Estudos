/*
const pessoas = {
    nome: 'Andre',
    sobrenome: 'Otávio'
};
const chave = 'nome'
console.log(pessoas[chave]);
console.log(pessoas.nome);
console.log(pessoas['nome']);
*/

/*
const pessoa1 = new Object();
pessoa1.nome = 'Andre';
pessoa1.sobrenome = 'Otávio';

console.log(pessoa1.nome);
*/


const pessoa1 = new Object();
pessoa1.nome = 'Andre';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30;
pessoa1.falarNome = function(){
    return (`${this.nome} está falando seu nome.`);
};

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());

for(let chave in pessoa1){
    console.log(pessoa1[chave]);
};

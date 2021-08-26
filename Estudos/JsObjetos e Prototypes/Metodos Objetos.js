/*
    Object.assign(des,any)
    Object.getOwnPropertyDescriptor(o, 'prop')
    ...(spread)

    //já foi revisado
    Object.keys (retorna as chaves)
    Object.freeze (congela o objeto)
    Object.defineProperties (define várias propriedades)
    Object.defineProperty (define uma propriedade)
*/


// Object Assign -------------------------------------------------
const produto = { nome: 'Caneca', preco: 1.9};
const caneca = Object.assign({}, produto, { material: 'porcelana' });
/*
const outraCoisa = {...produto,
    material: 'porcelana' };
*/


caneca.nome = 'Outro Produto';
caneca.preco = 3.5;

console.log(produto);
console.log(caneca);
//-----------------------------------------------------------------
//defineProperty - defineProperties

//definrProperty
/*
function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // Valor da chave
        writable: false, // Pode alterar o valor
        configurable: false, // Reconfigurar a chave
    });
}

const p1 = new Produto ('Camiseta', 20, 3);
console.log(p1);
*/

//defineProperties
function Produto (nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // Valor da chave
        writable: false, // Pode alterar o valor
        configurable: false, // Reconfigurar a chave
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: estoque, // Valor da chave
            writable: true, // Pode alterar o valor
            configurable: true, // Reconfigurar a chave

        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // Valor da chave
            writable: true, // Pode alterar o valor
            configurable: true, // Reconfigurar a chave


        },
    });



}

const p1 = new Produto ('Camiseta', 20, 3);
console.log(p1);

for(let chave in p1){
    console.log(chave);
}
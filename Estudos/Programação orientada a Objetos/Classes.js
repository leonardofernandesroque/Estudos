class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando.`);
    }
}


function pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

pessoa2.prototype.falar = function(){
 console.log(`${this.nome} está falando.`);
};




const p1 = new Pessoa('Miranha', 'Piter');
const p2 = new pessoa2('Venom', 'Extreme');
console.log(p1);
console.log(p2);
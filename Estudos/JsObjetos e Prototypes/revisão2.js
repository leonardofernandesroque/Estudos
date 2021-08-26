function criaPessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome, 
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}


const p1 = criaPessoa('leonardo', 'Fernandes');
console.log(p1.nomeCompleto());
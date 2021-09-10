class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    liga(){
        if(this.ligado){
            console.log(this.nome + 'já ligado');
            return;
        }

        this.ligado = true;
    }
    desligado(){
        if(!this.ligado){
            console.log(this.nome + 'já desligado');
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor){
        super(nome);
        this.cor = cor;
    }
}


class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    liga(){
        console.log('Oi, você alterou o método ligar');
    }

}

const s1 = new Smartphone('iphone');
const t1 = new Tablet('ipad', true);
t1.liga();
console.log(s1);
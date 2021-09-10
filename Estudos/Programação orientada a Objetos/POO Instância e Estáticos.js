class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    //Método de instância
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.voule -=2;
    }

    //Metodo estático

    static trocaPilha(){
        console.log('Hora de trocar pilha');
    }

}

const c1 = new ControleRemoto('Samsung');
c1.aumentarVolume();
c1.aumentarVolume();
console.log(c1);

ControleRemoto.trocaPilha();

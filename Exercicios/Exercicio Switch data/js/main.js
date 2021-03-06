const h1 = document.querySelector('.container h1');
const data = new Date();


function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;

    switch(diaSemana){

        case 0:
            diaSemanaTexto = 'domingo';
            return diaSemanaTexto;
        
        case 1:
            diaSemanaTexto = 'segunda';
            return diaSemanaTexto;

        case 2:
            diaSemanaTexto = 'terça';
            return diaSemanaTexto;

        case 3:
            diaSemanaTexto = 'quarta';
            return diaSemanaTexto;

        case 4:
            diaSemanaTexto = 'quinta';
            return diaSemanaTexto;

        case 5:
            diaSemanaTexto = 'sexta';
            return diaSemanaTexto;

        case 6:
            diaSemanaTexto = 'sábado';
            return diaSemanaTexto;

        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}


function getNomeMes(numeroMes){
    let mesTexto;


    switch(numeroMes){
        case 0:
            mesTexto = 'janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'março';
            return mesTexto;

        case 3:
            mesTexto = 'Abril';
            return mesTexto;

        case 4:
            mesTexto = 'maio';
            return mesTexto;

        case 5:
            mesTexto = 'junho';
            return mesTexto;

        case 6:
            mesTexto = 'julho';
            return mesTexto;

        case 7:
            mesTexto = 'agosto';
            return mesTexto;

        case 8:
            mesTexto = 'setembro';
            return mesTexto;

        case 9:
            mesTexto = 'outubro';
            return mesTexto;

        case 10:
            mesTexto = 'novembro';
            return mesTexto;

        case 11:
            mesTexto = 'dezembro';
            return mesTexto;

        default:
            mesTexto = '';
            return mesTexto;

    }

}

function zeroAEsquerda(num){
    return num>=10 ? num : `0${num}`;
}


function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()}` + 
        ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
        );
}

h1.innerHTML = criaData(data);
const h1 = document.querySelector('.container h1');

const data = new Date();

function getDiaSemanaTexto(diaSemana){
    const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado'];
    return diaSemana[diasSemana];
}

function getNomeMes(numeromes){
    const meses = ['janeiro', 'fevereiro','março','abril','maio','junho','julho', 
    'julho', 'agosto','setembro','outubro','novembro','dezembro'];
    return meses[numeroMes];
}



function ZeroAEsquerda(num){
    return num>=10 ? num : `0${num}`;
}

function criarData(data){
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
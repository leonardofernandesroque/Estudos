
const numeros = [3,2,4,8,9,50,60,20,55,77,46,58,29];

const numerosPares = numeros.filter(valor => valor % 2 === 0 ).map(valor => valor * 2).reduce((ac,valor) => ac+valor);

console.log(numerosPares);

// 2,  4,  8, 50, 60, 20, 46, 58
// 4,  8, 16, 100, 120, 40, 92, 116
// 496

  
  
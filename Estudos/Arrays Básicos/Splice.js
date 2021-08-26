const nomes = ['Maria', 'Joana', 'Eduarda', 'Gabriela', 'Josefa'];

//nomes.splice(íncide, delete, elem1, eleme2, elemen3);

const removidos = nomes.splice(4, 1, 'Luiz', 'Otávio');

console.log(nomes, removidos);

//pop
//const removidos = nomes.splice (-1, 1);

//shift
//const removidos = nomes.splice (0, 1);
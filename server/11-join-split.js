const elements = ["Fire", "Air", "Water"];

// let rtaFinal = '';
// const separator = '--';
// for (let index = 0; index < elements.length; index++) {
//   const element = elements[index];
//   rtaFinal = rtaFinal + element + separator;
// }
// console.log('for', rtaFinal);

console.log(elements.join());
// expected output "Fire,Air,Water"

console.log(elements.join(''));
// expected output "FireAirWater"

console.log(elements.join('-'));
// expected output "Fire-Air-Water"


const rta = elements.join('--')
console.log('join', rta);

const title = 'Curso de manipulación de arrays';

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);

/**
 * Y el método split() divide un objeto de tipo String en un array de cadenas mediante la separación de la cadena en sub-cadenas
 */
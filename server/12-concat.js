const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

// to avoid copy reference we need to use (spread operations)[...]
const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
  const element = othersElements[index];
  newArray.push(element);
}

const rta = elements.concat(othersElements);
const rta2 = [...elements, ...othersElements];
const rta3 = [...elements, ...'random'];
console.log('for', newArray);
console.log('concat', rta);
console.log('...', rta2);
console.log('rta3', rta3);
// It's necessary to put spread to join each element and not separately
elements.push(...othersElements);
console.log('elements', elements);
const numbers = [1, 3, 3, 4, 5, 7, 4, 1];

const uniqueNumbers = numbers.filter((number, idx, array) => array.indexOf(number) === idx);

console.log(uniqueNumbers);
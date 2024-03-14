const letters = ['a', 'b', 'c', 'd', 'e'];

const filteredLetters = letters.filter((_, idx) => idx % 2 === 0);

console.log(filteredLetters);
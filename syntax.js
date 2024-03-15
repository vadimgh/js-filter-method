const integers = [1, 2, 4, 7, 8, 10, 11];

const filteredIntegers = integers.filter(n => n % 2 === 0);

console.log(filteredIntegers);

const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

const filteredWords = words.filter(word => word.length > 3);

console.log(filteredWords);

const numbers = [2, 3, 6, 7, 9, 0, 2];

const filteredNumbers = numbers.filter(number => number > 9);

console.log(filteredNumbers);
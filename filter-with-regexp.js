const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function filterItems(arr, query) {
  return arr.filter(el => new RegExp(query, 'i').test(el));
}

console.log(filterItems(fruits, 'ap'));
console.log(filterItems(fruits, 'an'));
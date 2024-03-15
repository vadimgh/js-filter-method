const arrayLikeObject = {
  length: 5,
  0: 'apple',
  1: 'banana',
  2: 'orange',
  3: 'grape',
  4: 'melon'
};

const filteredArrayLikeObject = Array.prototype.filter.call(arrayLikeObject, el => el.length > 5);

console.log(filteredArrayLikeObject);
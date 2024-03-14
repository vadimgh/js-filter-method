const mixedArray = [0, 1, false, 2, '', 3, null, undefined, 4, NaN];

const filteredMixedArray = mixedArray.filter(Boolean);

console.log(filteredMixedArray);
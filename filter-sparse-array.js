const sparseArray = [1, , , 4, , 6];

const filteredSparseArray = sparseArray.filter(number => {
  console.log(`called for ${number}`);
  return number > 1;
});

console.log(filteredSparseArray);

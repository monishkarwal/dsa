const findSmallest = (arr) => {
  if (arr.length <= 1) {
    return arr[0];
  }

  // let smallest  = arr[0]
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
};

const arr = [-1, -9, -100, 9, 10, 11];

console.log(findSmallest(arr));

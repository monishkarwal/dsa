const findSecondLargest = (arr) => {
  if (arr.length < 2) {
    return null;
  }

  // largest => l1
  // second largest => l2
  let l1 = arr[0];
  let l2 = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > l1) {
      l2 = l1;
      l1 = arr[i];
    } else if (arr[i] > l2 && arr[i] !== l1) {
      // Check for duplicate elements
      l2 = arr[i];
    }
  }
  return [l1, l2];
};

const arr = [1, 5, 11, 13, 27, 6, 8, 3, -100, 1000, -11, -17, -1111, 90];
// const arr = []

console.log(findSecondLargest(arr));

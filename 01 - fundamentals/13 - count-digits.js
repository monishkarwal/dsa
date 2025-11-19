const countDigits = (num) => {
  // Handle negative numbers
  if (num < 0) {
    num = Math.abs(num);
  }
  if (num === 0) {
    return 1;
  }

  let count = 0;

  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
};

console.log(countDigits(-101011));
console.log(countDigits(10101));
console.log(countDigits(1010));
console.log(countDigits(100));
console.log(countDigits(0));
console.log(countDigits(1));
console.log(countDigits(-1));

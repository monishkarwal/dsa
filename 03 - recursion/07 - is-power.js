// https://leetcode.com/problems/power-of-two

const isPowerOfTwo = function (n) {
  if (n === 1) return true;
  if (n % 2 !== 0 || n < 1) return false;

  return isPowerOfTwo(n / 2);
};

console.log(isPowerOfTwo(10));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(16));

var reverse = function (x) {
  const isNegative = x < 0;
  x = Math.abs(x);
  let reverse = 0;
  while (x > 0) {
    let rem = x % 10;
    reverse = reverse * 10 + rem;
    x = Math.floor(x / 10);
  }

  return isNegative ? -reverse : reverse;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(0));

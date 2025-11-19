const isPalindrome = (num) => {
  if (num < 0) {
    return false;
  }
  if (num === 0) {
    return true;
  }

  let reverse = 0;
  const original = num;

  while (num > 0) {
    let rem = num % 10;
    reverse = reverse * 10 + rem;
    num = Math.floor(num / 10);
  }

  if (reverse === original) return true;

  return false;
};

console.log(isPalindrome(1));
console.log(isPalindrome(10));
console.log(isPalindrome(101));
console.log(isPalindrome(-101));
console.log(isPalindrome(1441));
console.log(isPalindrome(143341));

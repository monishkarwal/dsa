const powOfTwo = (power) => {
  if (power === 1) return 2;

  return 2 * powOfTwo(power - 1);
};

console.log(powOfTwo(4));

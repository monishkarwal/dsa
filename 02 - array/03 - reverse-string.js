// https://leetcode.com/problems/reverse-string/description/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function(s) {
//     let i = 0
//     let j = s.length - 1
//     while(i < j) {
//         let temp = s[i]
//         s[i] = s[j]
//         s[j] = temp
//         i++
//         j--
//     }
// };

var reverseString = function (s) {
  const len = s.length;
  const halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    // swap (i, n-1-i)
    const temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }
};

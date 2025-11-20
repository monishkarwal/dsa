// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
// const removeDuplicates = function(nums) {
//     let j = 1
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i+1] > nums[i]) {
//             nums[j] = nums[i+1]
//             j++
//         }
//     }
//     return j
// };

const removeDuplicates = function (nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));
console.log(nums);

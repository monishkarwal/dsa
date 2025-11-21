// https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  if (nums.length === 1) {
    return nums;
  }

  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = 0;
      nums[j] = temp;
      j++;
    }
  }
};

const nums = [1, 0];

moveZeroes(nums);
console.log(nums);

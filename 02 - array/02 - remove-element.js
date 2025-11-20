// https://leetcode.com/problems/remove-element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

const nums = [3, 2, 2, 3];
console.log(removeElement(nums, 3));
console.log(nums);

// const nums = [0, 1, 2, 2, 3, 0, 4, 2];
// console.log(removeElement(nums, 2));
// console.log(nums);

// https://leetcode.com/problems/binary-search/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

// const search = function (nums, target) {
//     let left = 0
//     let right = nums.length - 1
//     for (let i = left; i <= right; i++) {
//         const mid = Math.floor((left + right) / 2)
//         if (target === nums[mid]) return mid
//         if (target < nums[mid]) {
//             right = mid - 1
//         } else {
//             left = mid + 1
//         }
//     }
//     return -1
// };

// const search = function (nums, target) {
//     const _search = (left, right) => {
//         if (left <= right) {
//             const mid = Math.floor((left + right) / 2)
//             if (target === nums[mid]) return mid
//             if (target < nums[mid]) {
//                 return _search(left, mid - 1)
//             } else {
//                 return _search(mid + 1, right)
//             }
//         }
//         return -1
//     }
//     return _search(0, nums.length - 1)
// };

const nums = [5];
console.log(search(nums, 5));

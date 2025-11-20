// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */

// const maxProfit = function (prices) {
//   let min = prices[0];
//   let max = prices[0];

//   for (let price of prices) {
//     if (price < min) {
//       min = price;
//       max = price;
//     }
//     if (price > max) {
//       max = price;
//     }
//   }
//   return max - min;
// };

const maxProfit = function (prices) {
  let min = prices[0];
  let maxProfit = 0;

  for (let price of prices) {
    if (price < min) {
      min = price;
    }
    let profit = price - min;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};

// const prices = [7, 1, 5, 3, 6, 4];
const prices = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));

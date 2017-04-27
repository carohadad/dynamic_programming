/**
 * @param {number[]} prices
 * @return {number}
 * Solving this exersice: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/#/description
 */
var maxProfit = function(prices) {
  var price = 0;
  var buy = prices[0];
  var sell = prices[0];

  for (var i=0; i<prices.length; i++) {
    var current = prices[i];
    if (price < (-buy+current) ){
      price = (-buy+current);
      sell = current;
    }

    if (current < buy) {
      buy = current;
    }
  }
  return price;
};

console.log(maxProfit([7,1,5,3]) + " should be equal to 4");
console.log(maxProfit([7,2,1,3]) + " should be equal to 2");
console.log(maxProfit([7, 1, 5, 3, 6, 4]) + " should be equal to 5");
console.log(maxProfit([7, 6, 4, 3, 1]) + " should be equal to 0");

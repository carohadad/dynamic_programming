/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var maxSumSoFar = nums[0];
  var maxSumEndingHere = nums[0];

  for (var i=1; i<nums.length; i++) {
    var current = nums[i];

    if ((maxSumEndingHere + current) < current) {
      maxSumEndingHere = current;
    } else {
      maxSumEndingHere = maxSumEndingHere + current
    }

    if (maxSumEndingHere > maxSumSoFar) {
      maxSumSoFar = maxSumEndingHere;
    }
  }
  return maxSumSoFar;
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) + " should be equal to 6");
console.log(maxSubArray([-2,1,-3,4]) + " should be equal to 4");
console.log(maxSubArray([-2,1,-3,4, -100, 2, 3]) + " should be equal to 5");



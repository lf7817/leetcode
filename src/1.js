/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var nums = [3, 2, 4], target = 6;

// 时间复杂度 O(n²)  空间复杂度 O(1)
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i ++) {
    for (let j = i + 1; j < nums.length; j ++) {
      if (target === nums[i] + nums[j]) {
        return [i, j]
      }
    }
  }
}
// 时间复杂度 O(n)  空间复杂度 O(n)
var twoSum1 = function (nums, target) {
  const dict = nums.reduce((obj, item, index) => {
    obj[item] = index
    return obj
  }, {})

  for (let i = 0; i < nums.length; i ++) {
    const tmp = target - nums[i]

    if (dict.hasOwnProperty(tmp) && dict[tmp] !== i) {
      return [i, dict[tmp]]
    }
  }
}

// 时间复杂度 O(n)  空间复杂度 O(n)
var twoSum2 = function(nums, target) {
 const dict = {}

 for(let i = 0; i < nums.length; i ++) {
   const item = target - nums[i]

   if (dict.hasOwnProperty(item)) {
     return [dict[item], i]
   } 

   dict[nums[i]] = i
 }
}

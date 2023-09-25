/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a,b)=>a-b)
  let sum = Number.MAX_SAFE_INTEGER
  nums.forEach((n,i)=>{
    if(i>0&&n==nums[i-1])return
    let j = i + 1
    let k = nums.length-1
    while(j<k){
      s = n + nums[j] + nums[k]
      if(s==target){
        sum = s
        break
      }
      sum = Math.abs(s-target)<Math.abs(sum-target)?s:sum
      if(s>target){
        k --
      }else{
        j++
      }
    }
  })
  return sum
  
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
  let resArr = []
  nums = nums.sort((a,b)=>a-b)
  nums.forEach((n,i)=>{
    if(n>0||n==nums[i-1])return;
    let j = i+1
    let k = nums.length-1
    while(j<k){
        if(nums[j]==nums[j-1]&&j>i+1){
            j++
            continue
        }
      let sum = n+nums[j]+nums[k]
      if(sum>0){
        k--
      }
      else if(sum<0){
        j++
      }else{
        resArr.push([n,nums[j],nums[k]])
        k--
        j++
      }
    }
  })
  return resArr
};
// @lc code=end


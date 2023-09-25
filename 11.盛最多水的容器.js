/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let res = 0
  let i=0
  let j = height.length-1
  while(i<j){
    let w = j-i
    h = height[i]<height[j]?height[i]:height[j]
    res = res>h*w?res:h*w
    if(height[i]<=height[j]){
      i++
    }else{
      j--
    }
  }
  return res
};
// @lc code=end


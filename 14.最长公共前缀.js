/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let pubStr = ''
  while (true) {
    let i = pubStr.length
    let pi = ''
    let flag =strs.some((s,j)=>{
      if(!j&&s[i]){
        pi = s[i]
      }else{
        return pi!==s[i]
      }
    })
    if(!flag){
      pubStr +=pi
    }else{
      break
    }
  }
  return pubStr
};
// @lc code=end


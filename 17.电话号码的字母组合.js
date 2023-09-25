/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let length = digits.length
  let strArr = digits.split('')
  let resArr = []
  let obj = {
    2:'abc',
    3:'def',
    4:'ghi',
    5:'jkl',
    6:'mno',
    7:'pqrs',
    8:'tuv',
    9:'wxyz',
  }
  for (let index = 0; index < length; index++) {
    let key = strArr[index]
    let valArr = obj[key].split('')
    if(index==0){
      resArr = valArr
    }else{
      let arr = []
      valArr.forEach(v => {
        resArr.forEach(r=>{
          arr.push(r+v)
        })
      });
      resArr = arr
    }
  }
  return resArr
};
// @lc code=end


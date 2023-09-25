/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let arr = [
    {n:1000,v:'M',},
    {n:900,v:'CM',},
    {n:500,v:'D',},
    {n:400,v:'CD',},
    {n:100,v:'C',},
    {n:90,v:'XC',},
    {n:50,v:'L',},
    {n:40,v:'XL',},
    {n:10,v:'X',},
    {n:9,v:'IX',},
    {n:5,v:'V',},
    {n:4,v:'IV',},
    {n:1,v:'I',}
  ]
  let str =''
  arr.forEach((a,i)=>{
    let r = num/a.n
    if(r>=1){
      num = num%a.n
      while(r>=1){
        r--
        str+=a.v
      }
    }
  })
  return str
};
// @lc code=end


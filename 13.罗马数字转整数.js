/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
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
  let num = 0
  arr.forEach(a=>{
    while(true){
      let l = a.v.length
      let val = s.slice(0,l)
      if(val == a.v){
        num += a.n
        s = s.slice(l,s.length)
      }else{
        break;
      }
    }
  })
  return num
};
// @lc code=end


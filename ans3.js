let nums = [1,3,2,2,5,2,3,7]
var sequence = function (nums) {
    let map = {},
      res = 0;
  
    for (const n of nums) {
      map[n] = map[n] + 1 || 1;
    }
  
    for (let n in map) {
      if (map[+n + 1]) {
        res = Math.max(res, map[n] + map[+n + 1]);
      }
    }
  
    return res;
  };
  console.log(sequence(nums))
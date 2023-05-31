let nums = [1], k = 0
var minimumscore = function(nums, k) {
    let min = nums[0],
    max = nums[0];
for(let num of nums){
    min = Math.min(min,num);
    max = Math.max(max,num);
}
return Math.max(0, (max-k) - (min+k) )
};
console.log(minimumscore(nums, k))
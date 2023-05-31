let nums = [1,2,3]
var maximum = function(nums) {
    nums.sort((a,b) => a-b);
    return Math.max(nums[0]*nums[1]*nums[nums.length-1], nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3])
};
console.log(maximum(nums))
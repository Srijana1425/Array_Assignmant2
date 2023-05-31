let nums = [-1,0,3,5,9,12], target = 9
var findtarget = function(nums, target) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== target){
            count++
        } else return count
    }
    return -1
};
console.log(findtarget(nums, target))
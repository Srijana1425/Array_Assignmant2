let nums = [1,2,2,3]
var Monotone = function(nums) {
	let inc = false;
	let dec = false;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > nums[i-1]) inc = true;
		else
			if (nums[i] < nums[i-1]) dec = true;
		if (inc && dec) return false;
	}

	return true;
};
console.log(Monotone(nums))

# Array_Assignmant2
**Question 1**
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2),..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.<br>
**Example 1:**<br>
Input: nums = [1,4,3,2]<br>
Output: 4<br>
**Explanation:** All possible pairings (ignoring the ordering of elements) are:<br>
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3<br>
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3<br>
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4<br>
So the maximum possible sum is 4<br><br>
*Answer*<br>
**code** [link](https://github.com/Srijana1425/Array_Assignmant2/blob/main/ans1.js)
*******************************************************************************************************************************************************

**Question 2**
Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. 
The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice. 
Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.<br>
**Example 1:**<br>
Input: candyType = [1,1,2,2,3,3]<br>
Output: 3<br>
**Explanation**: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.<br><br>
*Answer*<br>
**code** [link](https://github.com/Srijana1425/Array_Assignmant2/blob/main/ans2.js)
*******************************************************************************************************************************************************

**Question 3**
We define a harmonious array as an array where the difference between its maximum value
and its minimum value is exactly 1.
Given an integer array nums, return the length of its longest harmonious subsequence
among all its possible subsequences.
A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.<br>
**Example 1:**<br>
Input: nums = [1,3,2,2,5,2,3,7]<br>
Output: 5<br>
**Explanation:** The longest harmonious subsequence is [3,2,2,2,3].<br><br>
*Answer*<br>
**code** [link](https://github.com/Srijana1425/Array_Assignmant2/blob/main/ans3.js)
*******************************************************************************************************************************************************

**Question 4**
You have a long flowerbed in which some of the plots are planted, and some are not.
However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.<br>
**Example 1:**<br>
Input: flowerbed = [1,0,0,0,1], n = 1<br>
Output: true<br><br>
*Answer*<br>
**code** [link](https://github.com/Srijana1425/Array_Assignmant2/blob/main/ans4.js)
*******************************************************************************************************************************************************

**Question 5**
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.<br>
**Example 1:**<br>
Input: nums = [1,2,3]<br>
Output: 6<br><br>
*Answer*<br>
**code** [link](https://github.com/Srijana1425/Array_Assignmant2/blob/main/ans5.js)
*******************************************************************************************************************************************************

**Question 6**
Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index. Otherwise,
return -1.
You must write an algorithm with O(log n) runtime complexity.<br>
Input: nums = [-1,0,3,5,9,12], target = 9<br>
Output: 4<br>
**Explanation:** 9 exists in nums and its index is 4<br<br>
*Answer*<br>
**code** [link](https://github.com/Srijana1425/Array_Assignmant2/blob/main/ans6.js)
*******************************************************************************************************************************************************

**Question 7**
An array is monotonic if it is either monotone increasing or monotone decreasing.
An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
monotone decreasing if for all i <= j, nums[i] >= nums[j].
Given an integer array nums, return true if the given array is monotonic, or false otherwise.<br>
**Example 1:**<br>
Input: nums = [1,2,2,3]<br>
Output: true<br><br>
*Answer*<br>
**code** [link](https://github.com/Srijana1425/Array_Assignmant2/blob/main/ans7.js)
*******************************************************************************************************************************************************

**Question 8**
You are given an integer array nums and an integer k.
In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.
The score of nums is the difference between the maximum and minimum elements in nums.
Return the minimum score of nums after applying the mentioned operation at most once for each index in it.<br>
**Example 1:**<br>
Input: nums = [1], k = 0<br>
Output: 0<br>
**Explanation:** The score is max(nums) - min(nums) = 1 - 1 = 0.<br><br>
*Answer*<br>
**code** [link](https://github.com/Srijana1425/Array_Assignmant2/blob/main/ans8.js)

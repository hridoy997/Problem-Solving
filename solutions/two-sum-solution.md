# Two Sum - LeetCode Solution

**Problem Link:** [Two Sum](https://leetcode.com/problems/two-sum/)  
**Platform:** LeetCode  
**Difficulty:** Easy  
**Status:** ✅ Solved  

## Problem Statement

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Examples

**Example 1:**
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

## Intuition
The problem asks us to find two numbers in an array that add up to a target value. Instead of checking every possible pair (which would be inefficient), we can use a hash map to store numbers we've seen and their indices. For each number, we calculate what its "complement" would need to be to reach the target, and check if we've already seen that complement.

## Approach
1. Create a hash map to store numbers and their indices as we iterate
2. For each number in the array:
   - Calculate the complement (target - current number)
   - Check if the complement exists in our hash map
   - If it exists, return the stored index and current index
   - If not, store the current number and its index in the hash map
3. Continue until we find the solution

## Complexity
- **Time complexity:** $$O(n)$$
  - We traverse the array only once, and hash map operations are $$O(1)$$ on average

- **Space complexity:** $$O(n)$$
  - In the worst case, we store all elements in the hash map

## Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};

    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if(map[diff] !== undefined) {
            return [map[diff], i];
        }
        map[nums[i]] = i;
    }

    return [];
};
```

## Test Cases

```javascript
console.log(twoSum([2, 7, 11, 15], 9));     // [0, 1]
console.log(twoSum([3, 2, 4], 6));          // [1, 2]
console.log(twoSum([3, 3], 6));             // [0, 1]
console.log(twoSum([2, 11, 15, 1, 3, 4, 7, 6, 8, 10], 9)); // [0, 6] (2 + 7 = 9)
```

## Key Insights
- Hash map allows us to achieve $$O(1)$$ lookup time
- We only need one pass through the array
- The order of indices in the result doesn't matter according to the problem
- This approach works for negative numbers and duplicates as well

---
**Date Solved:** November 16, 2025
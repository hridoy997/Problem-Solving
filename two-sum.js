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

console.log(twoSum([2,11, 15, 1, 3, 4, 7, 6, 8, 10], 9));

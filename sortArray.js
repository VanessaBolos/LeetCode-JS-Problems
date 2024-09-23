// LEETCODE PROBLEM 912. SORT AN ARRAY
// Given an array of integers nums, sort the array in ascending order and return it.
// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

// Example 1:
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

// Example 2:
// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.
 
// Constraints:
// 1 <= nums.length <= 5 * 104
// -5 * 104 <= nums[i] <= 5 * 104


// Solved by mergeSort method with time complexity of O(nlog(n)) since we are combining both dividing (O(logn)) and merging (O(n))

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let sortArray = function(nums) {
    const n = nums.length; //Calculate the length of the input array nums and store it in n.

    if (n < 2) { //This checks the base case for recursion. If the array has fewer than 2 elements, it’s already sorted, so no need to divide or merge further.
        return [...nums]; //If the array has fewer than 2 elements, return a copy of the array using the spread operator ([...]). This ensures the original array isn't modified.
    } else {
        //Find the middle index to divide the array into two halves
        const middle = Math.floor(n / 2); 

        const left = sortArray(nums.slice(0, middle));
        //Recursively call sortArray on the left half of the array, which consists of elements from index 0 to middle - 1. slice(0, middle) creates a copy of that part of the array.

        const right = sortArray(nums.slice(middle));
        //Recursively call sortArray on the right half of the array, starting from index middle to the end

        return merge(left, right);
        //After the two halves are sorted recursively, merge them into a single sorted array by calling the merge function.
    }
};

let merge = function(left, right) {
    const result = []; //Create an empty array result to store the merged sorted values.
    //This is the merge function, which takes two sorted arrays (left and right) and merges them into one sorted array.

    //Initialize two pointers i and j to track the current index in the left and right arrays, respectively.
    let i = 0;
    let j = 0;

    //Use a loop to continue comparing elements until one of the arrays (left or right) is fully traversed.
    while (i < left.length && j < right.length) {
        // Compare the current elements of both arrays
        // If the element in the left array is smaller, add it to the result array and move the left pointer (i) forward
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            // Otherwise, add the element from the right array to the result and move the right pointer (j) forward
            result.push(right[j]); //If right[j] is smaller (or equal), push it into the result array.
            j++;
        }
    }

    // If there are any remaining elements in the left array (after one of the arrays is exhausted),
    // append them to the result array
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // If there are any remaining elements in the right array, append them to the result array
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    // Return the merged array, which is now sorted
    return result;    
};
let nums1 = [5, 2, 3, 1]; // First array
let nums2 = [5, 1, 1, 2, 0, 0]; // Second array

console.log("Sorted nums1:", sortArray(nums1)); 
console.log("Sorted nums2:", sortArray(nums2));


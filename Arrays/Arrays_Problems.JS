function createOddNumbersArray(n) {
    let arr = [1];
    let count = 1;
    if(n === 0) {
        return [];
    }
    for (let i = 1; i<n; i++) {
        arr.push(count+=2);
    }
    return arr;
}


function reverseArray(arr) {
    let revArr = [];
    for (let i = arr.length-1; i >= 0; i--){
        revArr.push(arr[i]);
    }
    return revArr;
}

// -> To reverse the array using inbuilt method -> arr.reverse();

function modifyArray(array, index, value) {
    if(index > array.lenght-1) {
        array.push(value);
    } else {
        array.splice(index, 0, value);
    }
    return array;
}


function findMinMax(array) {
    let smallest = array[0];
    let largest = array[0];
    for(let i = 0; i < array.length; i++) {
        if(array[i] > largest) {
            largest = array[i];
        }
        
        if(array[i] < smallest) {
            smallest = array[i];
        }
    }
    
    return {min: smallest, max: largest};
}


function findMinMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return { min, max };
}

function sumArray(array) {
    let sum = 0;
    for(let i =0 ; i< array.length; i ++) {
        sum += array[i];
    }
    
    return sum;
}

function sumArrayUsingReduce(array) {
    return array.reduce(function(accumulator, currentValue){
        return accumulator += currentValue;
    }, 0);
}

function findMissingNumberFrom1to100(array) {
    // Formula used: Sum of arithmetic sequence -> n(n+1)/2; 
    let totalSum = (100 * (100 + 1)) / 2;
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    
    return totalSum - sum;
}

function findMissingNumber(arr) {
    let expectedSum = (100 * (100 + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

function twoSum(array, target) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0 ; j < array.length; j++) {
            if(array[j] + array[i] === target) {
                return [i, j];
            }
        }
    }
    
    return [];
}

function twoSum(nums, target) {
    // Create a hash map to store numbers and their indices
    const numMap = new Map();
 
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement
        const complement = target - nums[i];
 
        // Check if the complement is in the hash map
        if (numMap.has(complement)) {
            // If found, return the indices
            return [numMap.get(complement), i];
        }
 
        // Otherwise, store the current number and its index in the hash map
        numMap.set(nums[i], i);
    }
 
    // If no solution is found, return an empty array
    return [];
}

function rotateArrayMyImpl (nums, k) {
    k = k % nums.length;
    if(k === 0) {
        return nums;
    }
    for(let i = nums.length - 1; i > k; i--) {
        let temp = nums.pop();
        nums.unshift(temp);
    }
    
    return nums;
}

function rotateArraySol (nums, k) {
    k = k % nums.length;
 
    if (k === 0) {
        return;
    }
 
    let lastKElements = nums.splice(nums.length - k, k);
    nums.unshift(...lastKElements);
}
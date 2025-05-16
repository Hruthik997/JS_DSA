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

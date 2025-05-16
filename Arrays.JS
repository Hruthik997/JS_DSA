// Time and space complexities are given to the right side of each operation

// --- Creating Arrays ---
const arr = [];                              // O(1) O(1)
const arr1 = new Array(10);                 // O(1) O(N)
const arr2 = [1, 3, "Hello", "World"];      // O(N) O(N)

// --- Adding elements to Array ---
const addItemsToArr = [1,2,3,4];

// add item to last -> O(1) O(1)
addItemsToArr.push(5); // (5) [1,2,3,4,5]     

// add items to beginning -> O(N) O(1)
addItemsToArr.unshift(5); // (5) [5,1,2,3,4,5]   

// splice(index where we want to insert, how many elements needs to be removed, item to be added) -> O(N) O(1)
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
//  Array ["Jan", "Feb", "March", "April", "June"]


months.splice(4, 1, "May");
//  Array ["Jan", "Feb", "March", "April", "May"]


// --- Traversing the Array and accessing the values ---  O(N) O(1)
const traverseArr = [1, 2, 3, 5];
for(let i = 0; i < traverseArr.length; i++) {
    console.log(traverseArr[i]);
}

traverseArr.forEach(function (element, index, array) {
    console.log(element, index, array);
});

for(const element of traverseArr) {
    console.log(element);
}

// --- Search for an value in a Array --- O(N) O(1)
const searchArr = [1,3,4,5,8,9,100];

function search (arr, target) {
    for (let i=0; i<arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }
    return "No element found";
}

search(searchArr, 9); // 5

// First found elements index of a array
searchArr.indexOf(9); // 5

// Returns the first element in the array satisfying the given condition
let res = searchArr.find(function(element, index, array) {
    if(element > 5) {
        return `Element ${element} is found at index ${index}`;
    }
})

console.log(res);


// --- Deleting elements in Array ---
const deleteArr = [1,3,4,5,8,9,100];

// splice(index after which the element(s) are to be deleted (Not the element in the index itself), how many?) -> O(N) O(1)
deleteArr.splice(0, 2); // [4,5,8,9,100];

// Remove the last element from array -> O(1) O(1)
deleteArr.pop(); // Returns the element that is popped -> 100

// Remove the first element from array -> O(N) O(1)
deleteArr.shift(); // Returns the element that is shifted -> 1

// Delete the element at the particular index -> O(1) O(1) [Does not effect the length of the array]
deleteArr.deleteArr(3); // -> [1, 3, 4, empty, 8 , 9, 100]

// Filter and return the array based on the condition given -> O(N) O(N) [creates new array and doest not disturn existing array]
let newFilteredArr = deleteArr.filter(function(element, index, array) {
    console.log(`Processing index ${index}`);
    return element > 5;
})

console.log(newFilteredArr);

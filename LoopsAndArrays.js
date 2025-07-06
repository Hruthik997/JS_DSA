let arr = [4, 5, 6, 7, 100, 8];

// For Loop
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}

// While Loop
let i = 0;
while(i < 5) {
    console.log("H W");
    i++;
}

// Some common corner cases for arrays
/*
-> Array is empty
-> Array has negative numbers
-> Array has duplicates
*/

// Find second largest in array
function getSecondLargest(arr) {
    if (arr.length < 2) {
        return null;
    }
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] != firstLargest) { // Second condition to handle duplicates
            secondLargest = arr[i];
        }
    }
    console.log(secondLargest);
}

getSecondLargest([1, 2, 3, -10, 4, 5, 10, 100, 100]);
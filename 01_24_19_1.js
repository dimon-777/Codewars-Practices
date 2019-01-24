// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

// function findUniq(arr) {
//     uniqueNumber = [];
//     let sortedArr = arr.sort(function(a, b) {
//      return a-b});
//     for (i = 0; i < sortedArr.length; i++){
//     if(sortedArr[i] !== sortedArr[i +1] && sortedArr[i] !== sortedArr[i -1]) {
//        uniqueNumber.push(sortedArr[i]);
//         }
//     }
//      return uniqueNumber[0];
    
// }
function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }


console.log(findUniq([ 0, 1, 0 ]));
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 3, 10, 3, 3, 3 ]));

 // Best solution of code:

 
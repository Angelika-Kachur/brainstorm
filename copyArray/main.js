// using method slice() for copying array 

let arr = [1, 2, 3, 4, 5];
let copyArray = arr.slice();
arr.unshift(0);

console.log(arr);
console.log(copyArray);
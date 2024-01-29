// A function called "multiplication" that returns the product of the two input numbers.

function multiplication(num1, num2){
  return num1 * num2;
}
const result = multiplication (3, 5);
console.log(result);

// expect[multiplication(3,5)] to be [15]
// expect[multiplication(3,B)] to be [error]
// expect[multiplication(3,-5)] to be [-15]
// expect[multiplication(-3,-5)] to be [15]


// A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.

function concatOdds(arr1, arr2) {
  // Check if both inputs are arrays
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return [];
  }

  // Merge the arrays and filter odd numbers
  const mergedArray = arr1.concat(arr2);
  const oddNumbers = mergedArray.filter((num) => typeof num === 'number' && num % 2 !== 0);
  return uniqueOddNumbers;
}
// Test Cases
console.log(concatOdds([1, 2, 3], [4, 5, 6])); // [1, 3, 5]
console.log(concatOdds([], [7, 8, 9]));         // [7, 9]
console.log(concatOdds([2, 4, 6], [8, 10, 12])); // []


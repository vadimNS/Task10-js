//A function which returns factorial of number using recursion
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return console.log("error");
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(3)); // 6
console.log(factorial(5)); // 120

//A function which takes an array of numbers and maxNumber,
//the function returns new array with numbers not higher than maxNumber
function filterNumbers(arr, maxNumber) {
  return arr.filter((item) => maxNumber >= item);
}
console.log(filterNumbers([1, 4, 8, 1, 20], 5)); // [1, 4, 1]

//A function that returns object with min and max numbers from array of numbers
function minMax(arr) {
  let min = 1000000000;
  let max = -1000000000;
  arr.forEach((element) => {
    if (min > element) {
      min = element;
    }
  });
  arr.forEach((element) => {
    if (max < element) {
      max = element;
    }
  });
  return `max: ${max}; min: ${min}`;
}
console.log(minMax([1, 4, 8, 2, 20])); // { max: 20, min: 1 }
//знаю, що легше його через математичні min max робити а потім [...arr], но призабув
//глянув, реально, там не було що робити, а я парився

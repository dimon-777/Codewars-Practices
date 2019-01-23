// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
// NOTE: In PHP the function is called series_sum().


function SeriesSum(n)
{
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum +=(1/(1+(i*3)));
}
return sum.toFixed(2)
}


console.log(SeriesSum(1), "1.00")
console.log(SeriesSum(2), "1.25")
console.log(SeriesSum(3), "1.39")
console.log(SeriesSum(4), "1.49")

// Best solution in one line of code:

// function SeriesSum(n, s = 0) {
//     return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
// }init
// Task
// Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:

// [sign]a b/c

// where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c. Provide [sign] only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).

// If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.

// Division by zero should raise an error (preferably, the standard zero division error of your language).

// Value ranges
// -10 000 000 < x < 10 000 000
// -10 000 000 < y < 10 000 000
// Examples
// Input: 42/9, expected result: 4 2/3.
// Input: 6/3, expedted result: 2.
// Input: 4/6, expected result: 2/3.
// Input: 0/18891, expected result: 0.
// Input: -10/7, expected result: -1 3/7.
// Inputs 0/0 or 3/0 must raise a zero division error.
// Note
// Make sure not to modify the input of your function in-place, it is a bad practice.

function mixedFraction(s) {
    let test = (a, b) => (b === 0) ? a : test(b, a % b)
    arr = s.split("/")
    dividend = Number(arr[0])
    divisor = Number(arr[1])
    if (divisor === 0) {
        throw "ZeroDivisionError";
    }else {
        if (dividend % divisor === 0) {
            return (dividend / divisor).toString();
        }else {
            whole = (dividend / divisor) | 0;
            numerator = dividend % divisor;
            denominator = Number(divisor);
            common = test(numerator, denominator);
            fnumerator = numerator / common;
            fdenominator = denominator / common;
            if (Math.abs(dividend) < Math.abs(divisor)) {
                if (fdenominator < 0) {fdenominator = fdenominator * -1; fnumerator = fnumerator * -1}
                return fnumerator.toString() + "/" + fdenominator.toString();
            }else {
                return whole + " " + Math.abs(fnumerator).toString() + "/" + Math.abs(fdenominator).toString();
            }
        }
    }
}


console.log(mixedFraction('42/9'), '4 2/3');
console.log(mixedFraction('6/3'), '2');
console.log(mixedFraction('1/1'), '1');
console.log(mixedFraction('11/11'), '1');
console.log(mixedFraction('4/6'), '2/3');
console.log(mixedFraction('0/18891'), '0');
console.log(mixedFraction('-10/7'), '-1 3/7');
console.log(mixedFraction('-22/-7'), '3 1/7');
console.log("Must raise ZeroDivisionError",function(){mixedFraction("0/0")});
console.log("Must raise ZeroDivisionError",function(){mixedFraction("3/0")});

  // Best solution of code:

// gcd=(a,b)=> b==0 ? a : gcd(b,a%b);
// function mixedFraction(s){
//   var [x,y]=s.split("/").map(z=>+z);
//   if (y==0) throw "ZeroDivisionError";
//   if (x%y==0) return ""+x/y;
//   var g=gcd(x,y),add=x/y<0 ? "-" : "";
//   x=Math.abs(x/g),y=Math.abs(y/g);
//   return add+(x<y ? "" : Math.floor(x/y)+" ")+x%y+"/"+y;
// }
// Common denominators

// You will have a list of rationals in the form

//  { {numer_1, denom_1} , ... {numer_n, denom_n} }
// or

//  [ [numer_1, denom_1] , ... [numer_n, denom_n] ]
// or

//  [ (numer_1, denom_1) , ... (numer_n, denom_n) ]
// where all numbers are positive ints.

// You have to produce a result in the form

//  (N_1, D) ... (N_n, D)
// or

//  [ [N_1, D] ... [N_n, D] ]
// or

//  [ (N_1', D) , ... (N_n, D) ]
// or

// {{N_1, D} ... {N_n, D}}
// depending on the language (See Example tests)

// in which D is as small as possible and

//  N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
// Example:

// convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
// Note for Bash
// input is a string, e.g "2,4,2,6,2,8"

// output is then "6 12 4 12 3 12"
function gcd(a, b) {
    let d = 0
    while (a % 2 === 0 && b % 2 === 0) {
        a /= 2
        b /= 2
        d++
    }
    while (a !== b) {
        if (a % 2 === 0) {
            a /= 2
        } else if (b % 2 === 0) {
            b /= 2
        } else if (a > b) {
            a = (a - b) >> 1
        } else {
            b = (b - a) >> 1
        }
    }
    return (--d < 0) ? a : (2 << d) * a;
}
function lcm(a, b) {
    return a * b / gcd(a, b);
}
function convertFrac(lst) {
    
    let denom = lst.reduce((p, c) => {
        return lcm(p, c[1]);
    }, 1);
      return lst.map((v) => {
        return "(" + (v[0] * denom / v[1]) + "," + denom + ")";    
    }).join("");
}


 var lst = [ [1, 2], [1, 3], [1, 4] ]
 console.log(convertFrac(lst), "(6,12)(4,12)(3,12)")

  // Best solution of code:

// const gcd = (a, b) => b ? gcd(b, a % b) : a;
// const lcm = (a, b) => a * b / gcd(a, b);

// function convertFrac(arr) {
//   const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1);
//   return arr.map(([n, d]) => `(${n * cd/d},${cd})`).join('');
// }
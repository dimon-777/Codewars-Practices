// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]

function towerBuilder(nFloor) {
    let array = [];
    for (let i = 0; i < nFloor; i++) {
        array.push(" ".repeat(nFloor -i -1)
                    + "*".repeat(2 * i +1)
                    + " ".repeat(nFloor - i - 1));
    }
    return array;
}

console.log(towerBuilder(5));

 // Best solution of code:
//  function towerBuilder(n) {
//     return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
//   }
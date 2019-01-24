// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// is_square (-1) # => false
// is_square   0 # => true
// is_square   3 # => false
// is_square   4 # => true
// is_square  25 # => true
// is_square  26 # => false
// isSquare(-1) returns  false
// isSquare(0) returns   true
// isSquare(3) returns   false
// isSquare(4) returns   true
// isSquare(25) returns  true  
// isSquare(26) returns  false


var isSquare = function(n) {
    let val = Math.floor(Math.sqrt(n));
    if (val * val == n){
      return true;
    }else {
      return false;
    }
}


console.log(isSquare(-1))
console.log(isSquare( 0))
console.log(isSquare( 3))
console.log(isSquare( 4))
console.log(isSquare(25))
console.log(isSquare(26))

// Best solution of code:

//    function isSquare(n) {
//     return Math.sqrt(n) % 1 === 0;
//   }

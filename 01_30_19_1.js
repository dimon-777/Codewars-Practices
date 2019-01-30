// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples:

// "din" => "((("

// "recede" => "()()()"

// "Success" => ")())())"

// "(( @" => "))(("


// Notes:

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is actually the expected result, not the input! (these languages are locked so that's not possible to correct it).


function duplicateEncode(word) {
    let obj = {};
    word.toLowerCase().split("").forEach((letter) => {
        if (obj.hasOwnProperty(letter)) {
            obj[letter]++;
        } else {
            obj[letter] = 1;
        }
    });
    word = word.toLowerCase().split("").map((letter) => {
        if (obj[letter] > 1) {
            return ")";
        } else {
            return "(";
        }
    }).join("");
    return word;
}

console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())","should ignore case");
console.log(duplicateEncode("(( @"),"))((");

  // Best solution of code:

// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map( function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       })
//       .join('');
//   }
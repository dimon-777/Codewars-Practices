// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.


function expandedForm(num) {
    let numStrArr = String(num).split(""),
    len = numStrArr.length, result = "";
    numStrArr.map((n, index) => {
        if (n > 0) {
         if (result) {result += " + ";};
        result += n.padEnd(len - index, "0");
        }
    });
    return result;
}


console.log(expandedForm(12));
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');

// Best solution of code:
// function expandedForm(num) {
//     return String(num)
//             .split("")
//             .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
//             .filter((num) => Number(num) != 0)
//             .join(" + ")
//   }

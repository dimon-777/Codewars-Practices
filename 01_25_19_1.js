// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Note
// consecutive strings : follow one after another without an interruption


function longestConsec(strarr, k) {
   let longest = 0, arr = [], len = strarr.length;
    for (let i = 0; i < len; i++) {
     let af = strarr.slice(i, i + k).join('');
     arr.push(af);
   }
    if (len === 0 || k > len || k <= 0) {
      return '';
    }else return arr.reduce((a, b) => {
      return a.length >= b.length ? a : b;
   });
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 3))
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
    console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
    console.log(longestConsec([], 3), "")
    console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
    console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
    console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
    console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
    console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
    console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")

// Best solution of code:


  //   function longestConsec(strarr, k) {
  //     var longest = "";
  //     for(var i=0;k>0 && i<=strarr.length-k;i++){
  //       var tempArray = strarr.slice(i,i+k);
  //       var tempStr = tempArray.join("");
  //       if(tempStr.length > longest.length){
  //         longest = tempStr;
  //       }
  //     }
  //     return longest;
  // }
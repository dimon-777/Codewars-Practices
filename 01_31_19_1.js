
// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!

// Examples:

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:

// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.

// This kata is part of the Simple Encryption Series:
// Simple Encryption #1 - Alternating Split
// Simple Encryption #2 - Index-Difference
// Simple Encryption #3 - Turn The Bits Around
// Simple Encryption #4 - Qwerty

// Have fun coding it and please don't forget to vote and rank this kata! :-)

function encrypt(text, n) {
    if (text === null || n === null || n <= 0) {return text;}
    let input = text, output = "";
    for(let x = 0; x < n; x++) {
        output = "";
        let odd_chars = "", even_chars = "";
        array_of_text = input.split("");
        array_of_text.map((value, index) => {
            if(index % 2 != 0) {
                odd_chars += value;
            }else {
                even_chars +=value;
            }
        });
        output = odd_chars + even_chars
        input = output;
    }
    return output;
}

function decrypt(encryptedText, n) {
    if (encryptedText === null || n <= 0) { return encryptedText;}
    let input = encryptedText, output = "";
    for(let x = 0; x < n; x++) {
        output = "";
        // let odd_chars = "", even_chars = "";
        array_of_text = input.split("");
        length = array_of_text.length;
        half_length = Math.floor(length / 2)
        even_chars_array = array_of_text.slice(half_length, length);
        odd_chars_array = array_of_text.slice(0, half_length);
        for(let i = 0, len = half_length; i < len; i++) {
            output += even_chars_array[i] + odd_chars_array[i];
        }
        if (length % 2 != 0) {
            output += even_chars_array[half_length];
        }
        input = output;
    }
    return output;
}

    
      console.log(encrypt("This is a test!", 0), "This is a test!");
      console.log(encrypt("This is a test!", 1), "hsi  etTi sats!");
      console.log(encrypt("This is a test!", 2), "s eT ashi tist!");
      console.log(encrypt("This is a test!", 3), " Tah itse sits!");
      console.log(encrypt("This is a test!", 4), "This is a test!");
      console.log(encrypt("This is a test!", -1), "This is a test!");
      console.log(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
  
  
      console.log(decrypt("This is a test!", 0), "This is a test!");
      console.log(decrypt("hsi  etTi sats!", 1), "This is a test!");
      console.log(decrypt("s eT ashi tist!", 2), "This is a test!");
      console.log(decrypt(" Tah itse sits!", 3), "This is a test!");
      console.log(decrypt("This is a test!", 4), "This is a test!");
      console.log(decrypt("This is a test!", -1), "This is a test!");
      console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
 
   
      console.log(encrypt("", 0), "");
      console.log(decrypt("", 0), "");
      console.log(encrypt(null, 0), null);
      console.log(decrypt(null, 0), null);

        // Best solution of code:
        // function encrypt(text, n) {
        //     for (let i = 0; i < n; i++) {
        //       text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1') 
        //     }
        //     return text
        //   }
          
        //   function decrypt(text, n) {
        //     let l = text && text.length / 2 | 0
        //     for (let i = 0; i < n; i++) {
        //       text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
        //     }
        //     return text
        //   }

// Regex Password Validation

function validate(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/.test(password);
  }

  console.log(validate('djI38D55'));
  console.log(validate('a2.d412'));


  // Best solution of code:

// function validate(password) {
//     return  /^[A-Za-z0-9]{6,}$/.test(password) &&
//             /[A-Z]+/           .test(password) &&
//             /[a-z]+/           .test(password) &&
//             /[0-9]+/           .test(password) ;
//   }
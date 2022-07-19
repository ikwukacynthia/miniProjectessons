//  To display user details use Object to store details and declare it globally
let userDetailsDatabase = {};

// working to make sure user inputs valid userdetails
// copy all the 5 already declared functions and paste into this getUserDetails function, then cutout all the 5 functions
function getUserDetails() {
  //declare userName
  let userName = prompt("Enter your username");
  // To make user able to cancel when he no longer shows interest
  if (userName == null) {
    return;
  }
  // validate the userName
  function validateuserName(userName) {
    if (userName.length < 10 && userName.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  // delete the console.log the use the while loop to make sure the user inputs correct details and do the same for all the other fucntions
  while (validateuserName(userName) == false) {
    userName == prompt("Username must be less than 10 and greater than 0");
  }

  userDetailsDatabase["UserName"] = userName;

  // Ask for email and validate it

  let email = prompt("Enter your email address");

  if (email == null) {
    return;
  }
  //Get the email validation format online and copy and paste it into the function below
  function validateEmail(email) {
    const emailCheck =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    emailCheckResult = emailCheck.test(email);
    if (emailCheckResult == true) {
      return true;
    } else {
      return false;
    }
  }

  while (validateEmail(email) == false) {
    email = prompt("Enter a valid Email");
  }
  userDetailsDatabase["Email"] = email;
  //ask for phone number and validate it
  let phoneNumber = prompt("Enter your phone number");
  if (phoneNumber == null) {
    return;
  }
  function validatePhoneNumber(phoneNumber) {
    if (phoneNumber.length == 11) {
      return true;
    } else {
      return false;
    }
  }
  while (validatePhoneNumber(phoneNumber) == false) {
    phoneNumber = prompt("phone number must be 11 digits, try again");
  }
  userDetailsDatabase["phoneNumber"] = phoneNumber;
  // Ask for password and validate it

  let password = prompt("Enter your password");
  if (password == null) {
    return;
  }
  function validatePassword(password) {
    if (password.length < 6) {
      return false;
    } else {
      return true;
    }
  }
  while (validatePassword(password) == false) {
    password = prompt("password must be at least 6 characters");
  }
  userDetailsDatabase["password"] = password;

  //Ask for confirm password and validate it

  let confirmPassword = prompt("Confirm your password");
  if (confirmPassword == null) {
    return;
  }
  function validateConfirmPassword(confirmPassword) {
    if (confirmPassword != password) {
      return false;
    } else {
      return true;
    }
  }

  while (validateConfirmPassword(confirmPassword) == false) {
    confirmPassword = prompt(
      "Confrim password does not match password, try again"
    );
  }
  

  console.log(userDetailsDatabase);
}

// To make sure user enters correct details:we want the output of the above functions to loop continously.



function displayUserDetails() {
  alert(
    `Your Details \n\nUsername: ${userDetailsDatabase.UserName} \nPhone Number:${userDetailsDatabase.phoneNumber}\nEmail:${userDetailsDatabase.Email}`
  );
}

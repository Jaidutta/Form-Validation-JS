function validateForm() {
  const isNameValid = validateName();
  const isAddressValid = validateAddress();
  const isEmailValid = validateEmailId();
  const isPasswordValid = validatePassword();
  const isCourseValid = validateCourse();
  const isConsentBoxChecked = checkConsent();
  const isCollegeValid = validateAddress();
  return isNameValid && isAddressValid && isEmailValid && isPasswordValid &&isCourseValid  && isConsentBoxChecked && isCollegeValid; // form will only be submitted when all the fields are valid
}


function validateName() {
  const nameField = document.getElementById("name");
  const name = nameField.value;
  const nameErrorSpan = document.getElementById("name-error");
  let isNameValid = true;

  if (name.trim() === '') {
    isNameValid = false;
    nameErrorSpan.innerHTML = invalidErrorSpanMessage("Please Enter your Name");
    nameErrorSpan.style.color = "red";
  } else {
    nameErrorSpan.innerHTML = validErrorSpanMessage("Valid");
    nameErrorSpan.style.color = "green";
  }
  return isNameValid;
}

function validateAddress() {
  const addressField = document.getElementById("address");
  const address = addressField.value;
  const addressErrorSpan = document.getElementById("address-error");
  let isAddressValid = true;

  if (address.trim() === '') {
    isAddressValid = false;
    addressErrorSpan.innerHTML = invalidErrorSpanMessage("Please enter your Address");
    addressErrorSpan.style.color = "red";
  } else {
    addressErrorSpan.innerHTML = validErrorSpanMessage("Valid");
    addressErrorSpan.style.color = "green";
  }
  return isAddressValid;
}


function validateEmailId() {
  const emailIdField = document.getElementById("email");
  const emailId = emailIdField.value;
  const emailIDErrorSpan = document.getElementById
  ("email-error")
  let isEmailIDValid = true;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailId.trim() === "") {
    isEmailIDValid = false;
    emailIDErrorSpan.innerHTML = invalidErrorSpanMessage("Please enter your emailID");
    emailIDErrorSpan.style.color = "red";
  }
  else if(emailRegex.test(emailId) == false) {
    isEmailIDValid = false;
    emailIDErrorSpan.innerHTML = invalidErrorSpanMessage("Enter a valid email address");
    emailIDErrorSpan.style.color = "red";
  }
  else {
    emailIDErrorSpan.innerHTML = validErrorSpanMessage("Valid");
    emailIDErrorSpan.style.color = "green";
  }
  return isEmailIDValid;
}

function validatePassword() {
  const passwordField = document.getElementById("password");
  const password = passwordField.value;
  const passwordErrorSpan = document.getElementById("password-error");
  let isPasswordValid = true;

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  if (password.trim() === "") {
    passwordErrorSpan.innerHTML = invalidErrorSpanMessage("Please enter your password.");
    passwordErrorSpan.style.color = "red";
    isPasswordValid = false;
  } else if (!regex.test(password)) {
    passwordErrorSpan.innerHTML = invalidErrorSpanMessage("Password must be 8-15 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
    passwordErrorSpan.style.color = "red";
    isPasswordValid = false;
  } else {
    passwordErrorSpan.innerHTML = validErrorSpanMessage("&#x2714; Valid");
    passwordErrorSpan.style.color = "green";
  }
  return isPasswordValid;
}

function validateCourse() {
  let isCourseValid = true;
  const subjectField = document.getElementById("subject");
  const subject = subjectField.value;
  const subjectErrorSpan = document.getElementById("subject-error");

  if(subject == "") {
    isCourseValid = false;
    subjectErrorSpan.innerHTML = invalidErrorSpanMessage("Please select a Course.");
    subjectErrorSpan.style.color = "red";
  }
  else {
    isCourseValid = true;
    subjectErrorSpan.innerHTML = validErrorSpanMessage("Valid.");
    subjectErrorSpan.style.color = "green";
  }
  return isCourseValid;
}


function checkConsent() {
  let isAgreementChecked = true;
  const agreementField = document.getElementById("agree");
  
  const agreementErrorSpan = document.getElementById("agree-error");
  
  if(!agreementField.checked) {
    isAgreementChecked = false;
    agreementErrorSpan.innerHTML = invalidErrorSpanMessage("Please select the checkbox to confirm your consent.");
    agreementErrorSpan.style.color = "red";
    agreementErrorSpan.style.display = "block";
  }
  else {
    isCourseValid = true;
    agreementErrorSpan.innerHTML = validErrorSpanMessage("Valid.");
    agreementErrorSpan.style.color = "green";
    agreementErrorSpan.style.display = "block";
  }
  return isAgreementChecked;
}
//-----------------------------------------------------

function resetForm() {
  document.getElementById("name").innerHTML = "";
  document.getElementById("name-error").innerHTML = "";
  document.getElementById("address").innerHTML = "";
  document.getElementById("address-error").innerHTML = "";
  document.getElementById("email").innerHTML = "";
  document.getElementById("email-error").innerHTML = "";
  document.getElementById("password").innerHTML = "";
  document.getElementById("password-error").innerHTML = "";
  document.getElementById("subject").value = "";
  document.getElementById("subject-error").innerHTML = "";
  document.getElementById("agree").checked = false;
  document.getElementById("agree-error").innerHTML = "";

 
}

// utility 
function invalidErrorSpanMessage(message){
  return `&#x2716; ${message}`
}

function validErrorSpanMessage(message){
  return `&#x2714; ${message}`
}
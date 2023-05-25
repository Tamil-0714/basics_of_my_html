// selection DOM elements 
const form = document.querySelector("#form");
const UserName = document.querySelector("#user-name");
const Email = document.querySelector("#e-mail");
const password = document.querySelector("#pass-word");
const Cpassword = document.querySelector("#c-password");

let userValid = false;
let mailValid = false;
let passValid = false;
let cPassValid = false;

// submit event listener 
form.addEventListener("submit", (e) => {
  // validate every input element 
  validate();
  // check all the input elements are valid for prceed to submity
  if (!(userValid && mailValid && passValid && cPassValid)) e.preventDefault();
});

// validate function()
validate = () => {
  if (UserName.value.trim() == "") {
    setError(UserName, "User name must be entered ");
    userValid = false;
  } else {
    setSucces(UserName);
    userValid = true;
  }
  if (Email.value.trim() == "") {
    setError(Email, "Email Must be entered ");
    mailValid = false;
  } else if (!validateEmail(Email.value)) {
    setError(Email, "Enter a valid Email");
    mailValid = false;
  } else {
    setSucces(Email);
    mailValid = true;
  }
  if (password.value.trim() == "") {
    setError(password, "Password must be enterd");
    passValid = false;
  } else if (password.value.trim().length < 8) {
    setError(password, "Password must be greated than 8 charectors");
    passValid = false;
  } else {
    setSucces(password);
    passValid = true;
  }
  if (Cpassword.value.trim() === "") {
    setError(Cpassword, "Confirm Password must be enterd");
    cPassValid = false;
  } else if (Cpassword.value != password.value) {
    setError(Cpassword, "Confirm password doesn't match ");
    cPassValid = false;
  } else if (password.value.trim().length < 8) {
    if (Cpassword.value.trim() !== "") {
      setSucces(Cpassword);
      cPassValid = true;
    }
    setError(password, "Password must be greated than 8 charectors");
    cPassValid = false;
  } else {
    setSucces(Cpassword);
    cPassValid = true;
  }
};

// email validation funtion ()
function validateEmail(email) {
  // Regular expression for email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//error set function ()
setError = (element, errorMsg) => {
  const inputGroup = element.parentNode;
  const errorDiv = inputGroup.querySelector(".error");
  errorDiv.innerHTML = errorMsg;
  inputGroup.classList.add("error-contain");
};

// success set function ()
setSucces = (element) => {
  const inputGroup = element.parentNode;
  const errorDiv = inputGroup.querySelector(".error");
  errorDiv.innerHTML = "";
  inputGroup.classList.remove("error-contain");
};

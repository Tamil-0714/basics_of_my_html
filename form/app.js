const form = document.querySelector("#form");
const UserName = document.querySelector("#user-name");
const Email = document.querySelector("#e-mail");
const password = document.querySelector("#pass-word");
const Cpassword = document.querySelector("#c-password");
// const error =  document.querySelector(".error");
let valid = false;
form.addEventListener("submit", (e) => {
  if (!validate()) e.preventDefault();
});
validate = () => {
  if (UserName.value.trim() == "") {
    setError(UserName, "User name must be entered ");
    valid = false;
  } else {
    setSucces(UserName);
    valid = true;
  }
  if (Email.value.trim() == "") {
    setError(Email, "Email Must be entered ");
    valid = false;
  } else if (!validateEmail(Email.value)) {
    setError(Email, "Enter a valid Email");
    valid = false;
  } else {
    setSucces(Email);
    valid = true;
  }
  if (password.value.trim() == "") {
    setError(password, "Password must be enterd");
    valid = false;
  } else if (password.value.trim().length < 8) {
    setError(password, "Password must be greated than 8 charectors");
    valid = false;
  } else {
    setSucces(password);
    valid = true;
  }
  if (Cpassword.value.trim() == "") {
    setError(Cpassword, "Confirm Password must be enterd");
    valid = false;
  } else if (Cpassword.value != password.value) {
    setError(password, "Password and Confirm password are mis-match");
    setError(Cpassword, "Password and Confirm password are mis-match");
    valid = false;
  } else {
    setSucces(Cpassword);
    valid = true;
  }
  return valid
};
function validateEmail(email) {
  // Regular expression for email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
setError = (element, errorMsg) => {
  const inputGroup = element.parentNode;
  const errorDiv = inputGroup.querySelector(".error");
  errorDiv.innerHTML = errorMsg;
  inputGroup.classList.add("error-contain");
};
setSucces = (element) => {
  const inputGroup = element.parentNode;
  const errorDiv = inputGroup.querySelector(".error");
  errorDiv.innerHTML = "";
  inputGroup.classList.remove("error-contain");
};

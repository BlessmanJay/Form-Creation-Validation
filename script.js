// Setting up an Initial Code Structure
// Wrap the script in DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
  // Form selection
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  //   Form Submission and Event Prevention
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  //   Retrieving User Inputs
  const userName = document.getElementById("username");
  const userEmail = document.getElementById("email");
  const userPassword = document.getElementById("password");

  const trimmedUserName = userName.value.trim();
  const trimmedUserEmail = userEmail.value.trim();
  const trimmedUserPassword = userPassword.value.trim();

  // Validation - Initializiing validation variables
  let isValid = true;

  let messages = [];

  //   Username Validation
  const userNameVal = document.getElementById("username").value.trim();
  if (username.length < 3) {
    isValid = false;
    messages.push("Username must be at least 3 characters long");
  }

  //   Email Validation
  const userEmailval = document.getElementById("email").value.trim();
  if (!userEmailVal.includes("@") || !userEmail.includes(".")) {
    isValid = false;
    messages.push("Email must include both '@' and '.' characters!");
  }

  //   Password Validation
  const userPasswordVal = document.getElementById("password").value.trim();
  if (userPasswordVal.length < 8) {
    isValid = false;
    messages.push("Password must be at least 8 characters!");
  }
  //   Displaying Feedback
  feedbackDiv.style.display = "block";
  if (isValid) {
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745";
  } else {
    feedbackDiv.innerHTML = messages.join("<br>");
    feedbackDiv.style.color = "#dc3545";
  }
});

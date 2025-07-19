document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let messageError = document.getElementById("messageError");
  let successMessage = document.getElementById("successMessage");

  let isValid = true;

  
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  
  if (name.value.trim() === "") {
    nameError.textContent = "Full Name is required";
    isValid = false;
  }

  
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Enter a valid email address";
    isValid = false;
  }

  
  if (message.value.trim() === "") {
    messageError.textContent = "Message is required";
    isValid = false;
  }


  if (isValid) {
    successMessage.textContent = "Thank you for contacting us!";
    name.value = "";
    email.value = "";
    message.value = "";
  }
});

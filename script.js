import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function validateContactForm(event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const company = document.getElementById("company");
  const email = document.getElementById("email");
  const service = document.getElementById("service");
  const message = document.getElementById("message");

  let isValid = true;
  let errorMessage = "";

  if (name.value.trim() === "") {
    isValid = false;
    errorMessage += "Name is required.\n";
  }

  if (company.value.trim() === "") {
    isValid = false;
    errorMessage += "Company name is required.\n";
  }

  if (email.value.trim() === "") {
    isValid = false;
    errorMessage += "Email is required.\n";
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    isValid = false;
    errorMessage += "Please enter a valid email address.\n";
  }

  if (service.value.trim() === "") {
    isValid = false;
    errorMessage += "Service is required.\n";
  }

  if (message.value.trim() === "") {
    isValid = false;
    errorMessage += "Message is required.\n";
  }

  if (!isValid) {
    alert(errorMessage);
  } else {
    alert("Form submitted successfully!");
    document.querySelector(".contact-form").reset();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", validateContactForm);
});
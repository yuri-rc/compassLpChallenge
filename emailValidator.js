document.getElementById("emailForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário

  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    emailInput.style.borderColor = "red";
    emailInput.style.color = "red";
    emailInput.value = "";
    emailInput.placeholder = "Email non valida!";
  } else {
    emailInput.style.borderColor = "green";
    emailInput.style.color = "green";
    emailInput.value = "";
    emailInput.placeholder = "Email valida!";
  }
});
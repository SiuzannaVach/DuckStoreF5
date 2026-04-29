const duckForm = document.getElementById('duckForm');

duckForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('userName');
  const email = document.getElementById('userEmail');
  const message = document.getElementById('userMessage');
  const errors = document.querySelectorAll('.error-msg');
  
  
  errors.forEach(s => s.textContent = "");
  [name, email, message].forEach(i => i.classList.remove('input-error'));

  let isValid = true;

  if (!name.value.trim()) {
    document.getElementById('nameError').textContent = "Name required";
    name.classList.add('input-error');
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    document.getElementById('emailError').textContent = "Invalid email";
    email.classList.add('input-error');
    isValid = false;
  }

  if (!message.value.trim()) {
    document.getElementById('messageError').textContent = "Message required";
    message.classList.add('input-error');
    isValid = false;
  }

  if (isValid) {
    console.log("Form Data:", {
      name: name.value,
      email: email.value,
      message: message.value
    });
    alert("Sent!");
    duckForm.reset();
  }
});
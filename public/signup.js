const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submit-btn');
const emailError = document.getElementById('email-error');

emailInput.addEventListener('input', () => {
  const isValid = isValidEmail(emailInput.value);
  if (!isValid) {
    emailError.textContent = 'Please enter a valid email address';
    emailError.style.display = 'block';
    submitBtn.disabled = true;
  } else {
    emailError.textContent = '';
    emailError.style.display = 'none';
    submitBtn.disabled = false;
  }
});
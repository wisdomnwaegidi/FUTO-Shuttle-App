const form = document.querySelector('#form');
const inputFirstName = document.getElementById('inputFirstName');
const inputLastName = document.getElementById('inputLastName');
const inputEmail = document.getElementById('inputEmail');
const inputNumber = document.getElementById('inputNumber');
const password = document.getElementById('password');
const inputBustop = document.getElementById('inputBustop');
const errorMessageContainer = document.querySelector(
  '.error-message-container'
);
const errorMessageList = [];


const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /^\S+@\S+\.\S+$/;
const phoneRegex = /^\d+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{11,}$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isFirstNameValid = validateName(inputFirstName.value);
  const isLastNameValid = validateName(inputLastName.value);
  const isEmailValid = validateEmail(inputEmail.value);
  const isPhoneNumberValid = validatePhoneNumber(inputNumber.value);
  const isBusStopValid = validateBusStop(inputBustop.value);
  const isPasswordValid = validatePassword(password.value);

  if (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPhoneNumberValid &&
    isBusStopValid &&
    isPasswordValid
  ) {
    form.submit();
  } else {
    errorMessageContainer.innerHTML = '';
    errorMessageList.forEach((message) => {
      const errorNode = document.createElement('p');
      errorNode.classList.add('error-message');
      errorNode.innerHTML = message;
      errorMessageContainer.appendChild(errorNode);
    });
  }
});

function validateName(name) {
  const isValid = nameRegex.test(name);
  if (!isValid) {
    errorMessageList[0].push('First name and last name must contain only letters');
  }
  return isValid;
}

function validateEmail(email) {
  const isValid = emailRegex.test(email);
  if (!isValid) {
    errorMessageList.push('Invalid email address');
  }
  return isValid;
}

function validatePhoneNumber(phoneNumber) {
  const isValid = phoneRegex.test(phoneNumber) && phoneNumber.length <= 11;
  if (!isValid) {
    errorMessageList.push('Invalid phone number');
  }
  return isValid;
}

function validateBusStop(busStop) {
  const isValid = busStop !== '';
  if (!isValid) {
    errorMessageList.push('Please select a bus stop location');
  }
  return isValid;
}

function validatePassword(password) {
  const isValid = passwordRegex.test(password) && password.length >= 11;
  if (!isValid) {
    errorMessageList.push(
      'Password must contain capital letter, small letter, and a number, and must be at least 11 characters long'
    );
  }
  return isValid;
}

/*toogle Pasword  */
const toggle__password = document.querySelector('.toggle__password');
toggle__password.addEventListener('click', () => {
  const passwordToggle = document.getElementById('password');
  if (passwordToggle.type === 'password') {
    passwordToggle.type = 'text';
  } else {
    passwordToggle.type = 'password';
  }
});



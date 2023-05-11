const form = document.querySelector('#form');

// spans for error messages
const errorMessage1 = document.querySelector('.error-message1');
const errorMessage2 = document.querySelector('.error-message2');
const errorMessage3 = document.querySelector('.error-message3');
const errorMessage4 = document.querySelector('.error-message4');
const errorMessage5 = document.querySelector('.error-message5');
const errorMessage6 = document.querySelector('.error-message6');

// input fields
const inputFirstName = document.getElementById('inputFirstName');
const inputLastName = document.getElementById('inputLastName');
const inputEmail = document.getElementById('inputEmail');
const inputNumber = document.getElementById('inputNumber');
const password = document.getElementById('password');
const inputBustop = document.getElementById('inputBustop');

// inputs fields converted to arrays so we can manipulate the colors
const inputs = document.getElementsByClassName('error');
const spreads = [...inputs];

// submit the form
form.addEventListener('submit', validateForm);

//  function to validate forms
function validateForm(e) {
  e.preventDefault();

  // Define regular expressions for validation
  const nameRegex = /^[a-zA-Z]+$/;
  const emailRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/;
  const PasswordRegex = /^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$/;
  // new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");

  // Reset all error messages
  errorMessage1.innerHTML = '';
  errorMessage2.innerHTML = '';
  errorMessage3.innerHTML = '';
  errorMessage4.innerHTML = '';
  errorMessage5.innerHTML = '';
  errorMessage6.innerHTML = '';

  // First name validation
  if (!nameRegex.test(inputFirstName.value)) {
    errorMessage1.classList.add('error-message');
    errorMessage1.innerHTML = 'First name must contain only letters';
    spreads[0].style.borderColor = 'red';

    setTimeout(() => {
      spreads[0].style.borderColor = '#08af48';
      inputFirstName.classList.remove('input-error');
      errorMessage1.innerHTML = '';
      errorMessage1.classList.remove('error-message');
    }, 6000);
  } else {
    inputFirstName.value = '';
    inputLastName.value = '';
    inputEmail.value = '';
    inputNumber.value = '';
    inputBustop.value = '';
    password.value = '';
  }

  // Last name validation
  if (!nameRegex.test(inputLastName.value)) {
    spreads[1].style.borderColor = 'red';
    errorMessage2.classList.add('error-message_1');
    errorMessage2.innerHTML = 'Last name must contain only letters';

    setTimeout(() => {
      spreads[1].style.borderColor = '#08af48';
      errorMessage2.innerHTML = '';
      errorMessage2.classList.remove('error-message_1');
    }, 6000);
  }

  // Email validation
  if (!emailRegex.test(inputEmail.value)) {
    spreads[2].style.borderColor = 'red';
    errorMessage3.classList.add('error-message_2');
    errorMessage3.innerHTML = 'Invalid email address';

    setTimeout(() => {
      spreads[2].style.borderColor = '#08af48';
      errorMessage3.innerHTML = '';
      errorMessage3.classList.remove('error-message_2');
    }, 6000);
  }

  // Phone number validation
  if (!phoneRegex.test(inputNumber.value)) {
    spreads[3].style.borderColor = 'red';
    errorMessage4.classList.add('error-message_3');
    errorMessage4.innerHTML = 'Invalid phone number';

    setTimeout(() => {
      spreads[3].style.borderColor = '#08af48';
      errorMessage4.innerHTML = '';
      errorMessage4.classList.remove('error-message_3');
    }, 6000);
  } else if (inputNumber.value.length > 11) {
    spreads[3].style.borderColor = 'red';
    errorMessage4.classList.add('error-message_3');
    errorMessage4.innerHTML =
      'Phone number must not be more than 11 characters long';

    setTimeout(() => {
      spreads[3].style.borderColor = '#08af48';
      errorMessage4.innerHTML = '';
      errorMessage4.classList.remove('error-message_3');
    }, 6000);
  } else if (inputNumber.value === '') {
    spreads[3].style.borderColor = 'red';
    errorMessage4.classList.add('error-message_3');
    errorMessage4.innerHTML = 'Phone number cannot be empty';

    setTimeout(() => {
      spreads[3].style.borderColor = '#08af48';
      errorMessage4.innerHTML = '';
      errorMessage4.classList.remove('error-message_3');
    }, 6000);
  }

  // Bus stop validation
  if (inputBustop.value === '') {
    spreads[4].style.borderColor = 'red';
    errorMessage5.classList.add('error-message_4');
    errorMessage5.innerHTML = 'Please select a bus stop location';

    setTimeout(() => {
      spreads[4].style.borderColor = '#08af48';
      errorMessage5.innerHTML = '';
      errorMessage5.classList.remove('error-message_4');
    }, 6000);
  }

  // Password validation
  if (!PasswordRegex.test(password.value)) {
    spreads[5].style.borderColor = 'red';
    errorMessage6.classList.add('error-message_5');
    errorMessage6.innerHTML =
      'Password must contain capital letter, small letter and a number';

    setTimeout(() => {
      spreads[5].style.borderColor = '#08af48';
      errorMessage6.innerHTML = '';
      errorMessage6.classList.remove('error-message_5');
    }, 6000);
  }

  if (password.value === '') {
    spreads[5].style.borderColor = 'red';
    errorMessage6.classList.add('error-message_5');
    errorMessage6.innerHTML = 'Password cannot be blank';

    setTimeout(() => {
      spreads[5].style.borderColor = '#08af48';
      errorMessage6.innerHTML = '';
      errorMessage6.classList.remove('error-message_5');
    }, 6000);
  }

  if (password.length < 11 || password.length > 11) {
    spreads[5].style.borderColor = 'red';
    errorMessage6.classList.add('error-message_5');
    errorMessage6.innerHTML = 'Password must be at least 11 characters long';

    setTimeout(() => {
      spreads[5].style.borderColor = '#08af48';
      errorMessage6.innerHTML = '';
      errorMessage6.classList.remove('error-message_5');
    }, 6000);
  }
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

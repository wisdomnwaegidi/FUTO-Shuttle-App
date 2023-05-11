const form = document.querySelector('#form');
const inputs = form.querySelectorAll('input');
const err = document.querySelector('.error11');

/* const emailRegex1 =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; */

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;
  let errorMessage = 'Please fill in all fields correctly';

  inputs.forEach((input) => {
    if (input.value.trim() === '') {
      isValid = false;
    } else if (input.type === 'email') {
      if (!emailRegex.test(input.value)) {
        isValid = false;
      }
    } else if (input.type === 'tel') {
      if (input.value.length !== 11 || !phoneRegex.test(input.value)) {
        isValid = false;
      }
    }
  });

  if (isValid) {
    form.submit();
    inputs.value = '';
    alert('Data Inserted Successfully');
  } else {
    err.classList.add('error-message');
    err.textContent = errorMessage;
    setTimeout(() => {
      err.classList.remove('error-message');
      err.textContent = '';
    }, 3000);
  }
});

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

/* $('#form').submit(function (event) {
  alert('Data Inserted Successfully');
}); */

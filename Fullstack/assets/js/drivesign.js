// to get current year
function getYear() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  document.querySelector('#displayYear').innerHTML = currentYear;
}

getYear();

const display__signup = document.getElementById('display__signup');
const display__one = document.getElementById('display__one');
const sub_page1 = document.querySelector('.sub_page1');
const fatimes = document.getElementById('close');
const hero_area1 = document.querySelector('.hero_area1');
const containall = document.querySelector('.containall');
const sign__password = document.getElementById('sign__password');
const toggler = document.getElementById('toggler');

display__signup.addEventListener('click', () => {
  display__one.style.zIndex = 1000;
  display__one.style.display = 'block';
  containall.style.opacity = 0.2;
  containall.style.pointerEvents = 'none';
  containall.style.userSelect = 'none';
  // document.body.style.overflow = 'hidden';
});

fatimes.addEventListener('click', () => {
  display__one.style.display = 'none';
  containall.style.opacity = 100;
  containall.style.pointerEvents = 'auto';
  containall.style.userSelect = 'auto';
  // document.body.style.overflow = 'scroll';
});

toggler.onclick = function () {
  if (sign__password.type === 'password') {
    sign__password.type = 'text';
  } else {
    sign__password.type = 'password';
  }
};

const driversForm = document.getElementById('driversForm');
const $firstName = document.getElementById('firstName');
const $lastName = document.getElementById('lastName');
const $email = document.getElementById('email');
const $phone = document.getElementById('phone');
const $password = document.getElementById('sign__password');

const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneRegex = /^[0-9]{11}$/;
const passwordRegex = /^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$/;

const _fields = document.getElementById('span1');
const _fields1 = document.getElementById('span2');
const _fields2 = document.getElementById('span3');
const _fields3 = document.getElementById('span4');
const _fields4 = document.getElementById('span5');

function validateForm1(e) {
  e.preventDefault();

  if (!$firstName.value.match(nameRegex) || $firstName === '') {
    _fields.innerHTML = `input all  required fields`;
    $firstName.style.borderColor = 'red';

    setTimeout(() => {
      _fields.innerHTML = ``;
      $firstName.style.borderColor = '#08af48';
    }, 3000);
  } else if ($firstName.value) {
    const errorId1 = document.querySelector('.error-message99');
    setTimeout(() => {
      errorId1.remove();
    }, 3000);
  } else {
    const newDiv1 = document.createElement('span');
    newDiv1.setAttribute('class', 'error-message99');
    newDiv1.innerHTML = 'input all required fields';
    const parent = document.querySelector('#input__sign__1');
    parent.appendChild(newDiv1);
    $firstName.style.borderColor = 'red';
  }

  if (!$lastName.value.match(nameRegex) || $lastName === '') {
    _fields1.innerHTML = `input all  required fields`;
    $lastName.style.borderColor = 'red';

    setTimeout(() => {
      _fields1.innerHTML = ``;
      $lastName.style.borderColor = '#08af48';
    }, 3000);
  } else if ($lastName.value) {
    const errorId = document.querySelector('.error-message98');
    setTimeout(() => {
      errorId.remove();
    }, 3000);
  } else {
    const newDiv = document.createElement('span');
    newDiv.setAttribute('class', 'error-message98');
    newDiv.innerHTML = 'input all required fields';
    const parent = document.querySelector('#input__sign__2');
    parent.appendChild(newDiv);
    $lastName.style.borderColor = 'red';
  }

  if (!$email.value.match(emailRegex) || $email === '') {
    _fields2.innerHTML = `input all  required fields`;
    $email.style.borderColor = 'red';

    setTimeout(() => {
      _fields2.innerHTML = ``;
      $email.style.borderColor = '#08af48';
    }, 3000);
  }
  if (!$phone.value.match(phoneRegex) || $phone === '') {
    _fields3.innerHTML = `input all  required fields`;
    $phone.style.borderColor = 'red';

    setTimeout(() => {
      _fields3.innerHTML = ``;
      $phone.style.borderColor = '#08af48';
    }, 3000);
  }
  if (!$password.value.match(passwordRegex) || $password === '') {
    _fields4.innerHTML = `input all  required fields`;
    $password.style.borderColor = 'red';

    setTimeout(() => {
      _fields4.innerHTML = ``;
      $password.style.borderColor = '#08af48';
    }, 3000);
  }

  return true;
}

driversForm.addEventListener('submit', validateForm1);

/* _fields.innerHTML = `Successful`;
_fields.style.visibility = 'hidden';
_fields.style.marginTop = 10 + 'px';
$firstName.style.borderColor = '#08af48'; */

/* $password.onkeydown = () => {
  _fields4.innerHTML = ``;
  $password.style.borderColor = '';
}; */

/*  $password.onkeyup = () => {
    _fields4.innerHTML = `input all  required fields`;
    $password.style.borderColor = 'red';
  }; */

// iput field with event listners
/* const inputField = document.querySelector('.input-class');
const errorMessage = document.querySelector('.error-class');
const parent = document.querySelector('.parent-class');

parent.addEventListener('input', function (event) {
  if (event.target === inputField && !inputField.value) {
    errorMessage.style.display = 'block';
  } else if (event.target === inputField && inputField.value) {
    errorMessage.style.display = 'none';
  }
}); */

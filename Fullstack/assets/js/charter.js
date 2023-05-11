const charter__form = document.getElementById('charter__form');
const firstName_1 = document.getElementById('input1');
const lastName1 = document.getElementById('input2');
const email1 = document.getElementById('input3');
const phoneNumber1 = document.getElementById('input4');
const arrival0 = document.getElementById('input5');
const arrival1 = document.getElementById('input6');
const datepicker1 = document.getElementById('datepicke1');
const datepicker2 = document.getElementById('datepicker2');
const boarding_1 = document.getElementById('Boarding_1');
const stops_1 = document.getElementById('Stops_1');

const errmessage1 = document.querySelector('.errmessage1');
const errmessage2 = document.querySelector('.errmessage2');
const errmessage3 = document.querySelector('.errmessage3');
const errmessage4 = document.querySelector('.errmessage4');
const errmessage5 = document.querySelector('.errmessage5');
const errmessage6 = document.querySelector('.errmessage6');
const errmessage7 = document.querySelector('.errmessage7');
const errmessage8 = document.querySelector('.errmessage8');
const errmessage9 = document.querySelector('.errmessage9');
const errmessage10 = document.querySelector('.errmessage10');
const emailRegx =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const phoneRegx = /^\d{11,}$/;

charter__form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (firstName_1.value === '') {
    errmessage1.innerText = `Please input a First name!`;
    errmessage1.style.color = '#08af48';
    errmessage1.style.fontSize = 11 + 'px';

    setTimeout(() => {
      errmessage1.innerText = ``;
      errmessage1.style.color = '';
      errmessage1.style.fontSize = '';
    }, 3000);
  }
  if (lastName1.value === '') {
    errmessage2.innerText = `Please input a last name!`;
    errmessage2.style.color = '#08af48';
    errmessage2.style.fontSize = 11 + 'px';

    setTimeout(() => {
      errmessage2.innerText = ``;
      errmessage2.style.color = '';
      errmessage2.style.fontSize = '';
    }, 3000);
  }

  if (!emailRegx.test(email1.value)) {
    errmessage3.innerText = `Please input a valid email!`;
    errmessage3.style.color = '#08af48';
    errmessage3.style.fontSize = 11 + 'px';

    setTimeout(() => {
      errmessage3.innerText = ``;
      errmessage3.style.color = '';
      errmessage3.style.fontSize = '';
    }, 3000);
  }

  if (
    !phoneRegx.test(phoneNumber1.value) ||
    phoneNumber1.value === '' ||
    phoneNumber1.value.length !== 11
  ) {
    errmessage4.innerText = `Please input a valid phone number with 11 digits!`;
    errmessage4.style.color = '#08af48';
    errmessage4.style.fontSize = 11 + 'px';

    setTimeout(() => {
      errmessage4.innerText = ``;
      errmessage4.style.color = '';
      errmessage4.style.fontSize = '';
    }, 3000);
  }

  if (arrival0.value === '') {
    errmessage5.innerText = `Please input a valid location!`;
    errmessage5.style.color = '#08af48';
    errmessage5.style.fontSize = 11 + 'px';

    setTimeout(() => {
      errmessage5.innerText = ``;
      errmessage5.style.color = '';
      errmessage5.style.fontSize = '';
    }, 3000);
  }

  if (arrival1.value === '') {
    errmessage6.innerText = `Please input a valid location!`;
    errmessage6.style.color = '#08af48';
    errmessage6.style.fontSize = 11 + 'px';

    setTimeout(() => {
      errmessage6.innerText = ``;
      errmessage6.style.color = '';
      errmessage6.style.fontSize = '';
    }, 3000);
  }
  if (!datepicker1 || datepicker1.value === '') {
    errmessage7.innerText = `input a valid date and time`;
    errmessage7.style.color = '#08af48';
    errmessage7.style.fontSize = 11 + 'px';

    setTimeout(() => {
      errmessage7.innerText = ``;
      errmessage7.style.color = '';
      errmessage7.style.fontSize = '';
    }, 3000);
  }

  if (!datepicker2 || datepicker2.value === '') {
    errmessage8.innerText = `input a valid date and time`;
    errmessage8.style.color = '#08af48';
    errmessage8.style.fontSize = 11 + 'px';

    setTimeout(() => {
      errmessage8.innerText = ``;
      errmessage8.style.color = '';
      errmessage8.style.fontSize = '';
    }, 3000);
  }

  if (boarding_1.value === '') {
    errmessage9.innerText = `input number of boarding passengers`;
    errmessage9.style.color = '#08af48';
    errmessage9.style.fontSize = 11 + 'px';

    setTimeout(() => {
      errmessage9.innerText = ``;
      errmessage9.style.color = '';
      errmessage9.style.fontSize = '';
    }, 3000);
  }

  if (stops_1.value === '') {
    errmessage10.innerText = ` input number of stops`;
    errmessage10.style.color = '#08af48';
    errmessage10.style.fontSize = 11 + 'px';

    setTimeout(() => {
      errmessage10.innerText = ``;
      errmessage10.style.color = '';
      errmessage10.style.fontSize = '';
    }, 3000);
  }
});

/* else {
  errmessage4.innerText = `Successful`;
  errmessage4.style.color = '#08af48';
  errmessage4.style.fontSize = 11 + 'px';
  phoneNumber1.value = '';
  console.log(phoneNumber1.value);
} */

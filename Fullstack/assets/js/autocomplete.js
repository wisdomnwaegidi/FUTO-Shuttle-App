// input fields typing
const input_1 = document.getElementById('input_1');
const input_2 = document.getElementById('input_2');
const displayForm = document.querySelector('.display__results');
const displayForm1 = document.querySelector('.display__results1');
const body = document.querySelector('body');
const resultDisplay = document.querySelector('.display');
const discover__shuttle = document.querySelector('.discover__shuttle');
const bgdisplay = document.querySelector('.bgdisplay');
const bgdisplay1 = document.querySelector('.bgdisplay1');
const autoSubmit = document.getElementById('myForm');
const regEx1 = /[A-Z]/g;

// Radio Buttons variables
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const mayBeBtn = document.getElementById('maybe');
const dflex = document.querySelector('#d-flex');
const datePicker = document.getElementById('datepicker');
const subbd = document.getElementById('subbd');

// Get all radio buttons
const radioBtns = document.getElementsByName('myRadio');

// Add event listener to each radio button
radioBtns.forEach(function (radioBtn) {
  radioBtn.addEventListener('click', function () {
    // Loop through all radio buttons and uncheck them
    radioBtns.forEach(function (rb) {
      rb.checked = false;
    });
    // Check the clicked radio button
    this.checked = true;
  });
});

// display datePicker
yesBtn.addEventListener('click', () => {
  datePicker.style.display = 'block';
  dflex.style.display = 'none';
  subbd.style.display = 'none';
});

//display dflex
noBtn.addEventListener('click', () => {
  if (noBtn.checked === true) {
    datePicker.style.display = 'none';
    dflex.style.display = 'block';
    subbd.style.display = 'none';
  }
});

// display subbd
mayBeBtn.addEventListener('click', () => {
  dflex.style.display = 'none';
  datePicker.style.display = 'none';
  subbd.style.display = 'block';
  subbd.style.marginTop = 10 + 'px';
});

// locations Array
const locations = [
  'Egbu Road',
  'Amakohia',
  'Ikenegbu',
  'Mbaise Road',
  'Egbu by Christiana',
  'Oguta Street by Aladinma',
  'Wetheral by MCC Uratta Road',
  'Palace of Grace International Ministry Owerri Imo state',
  'Christ Church by Mbaise Park',
  'Orji by Flyover',
  'Orji Bus Stop',
];

// double click to remove location display box 1
body.addEventListener('click', () => {
  displayForm.style.display = 'none';
});

// double click to remove location display box 2
body.addEventListener('click', () => {
  displayForm1.style.display = 'none';
});

// input 1
input_1.addEventListener('input', (event) => {
  let results = [];
  if (!event.target.value.length || event.target.value.length === '') {
    bgdisplay.innerHTML = `No results found!`;
    bgdisplay.style.color = '#ffffff';
    displayForm.style.display = 'block';
  } else {
    // set results
    displayForm.style.display = 'block';
    let input = event.target.value;
    results = locations.filter((location) => {
      return location.toLowerCase().includes(input.toLowerCase());
    });
    renderResults(results);
  }
});

function renderResults(results) {
  if (!results.length || results.value === '') {
    bgdisplay.innerHTML = `No results found!`;
    return;
  }
  let content = results
    .map((item) => {
      return `<li class="selected">${item}</li>`;
    })
    .join('');

  bgdisplay.innerHTML = `<ul class="ul1">${content}</ul>`;
  let ul3 = document.querySelector('.ul1');
  ul3.style.cursor = 'pointer';
  ul3.style.color = 'white';
  let selectedElements = document.querySelectorAll('.selected');
  selectedElements.forEach((element) => {
    element.addEventListener('click', (event) => {
      input_1.value = event.target.textContent;
      displayForm.style.display = 'none';
    });
  });
  input_1.addEventListener('input', () => {
    if (input_1.value === '') {
      displayForm.style.display = 'none';
    }
  });
}

// Render results for second search input 2
input_2.addEventListener('input', (event) => {
  let results2 = [];
  if (!event.target.value.length || event.target.value.length === '') {
    bgdisplay1.innerHTML = `No results found!`;
    bgdisplay1.style.color = '#ffffff';
    displayForm1.style.display = 'block';
  } else {
    // set results
    displayForm1.style.display = 'block';
    let input = event.target.value;
    results2 = locations.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
    renderResults2(results2);
  }
});

// Default function to render results to div that displays result
function renderResults2(results) {
  if (!results.length || results.value === '') {
    bgdisplay1.innerHTML = `No results found!`;
    return;
  }
  let content1 = results
    .map((item) => {
      return `<li class="selected1">${item}</li>`;
    })
    .join('');

  bgdisplay1.innerHTML = `<ul class="ul2">${content1}</ul>`;
  let ul4 = document.querySelector('.ul2');
  ul4.style.cursor = 'pointer';
  ul4.style.color = 'white';
  let selectedElements1 = document.querySelectorAll('.selected1');
  selectedElements1.forEach((element) => {
    element.addEventListener('click', (event) => {
      input_2.value = event.target.textContent;
      displayForm.style.display = 'none';
    });
  });
  input_1.addEventListener('input', () => {
    if (input_2.value === '') {
      displayForm1.style.display = 'none';
    }
  });
}

// submit the locations form
function onSubmitForm(e) {
  e.preventDefault();

  if (input_1.value === '' || input_2.value === '') {
    // show error message if input fields are empty
    showMessage('Please Select Routes!');
  } else if (
    yesBtn.checked === false &&
    noBtn.checked === false &&
    mayBeBtn.checked === false
  ) {
    showMessage('Please check a button!');
  } else if (yesBtn.checked && datePicker.value === '') {
    // show error message if 'yes' is selected but date field is empty
    showMessage('Please Select Date!');
  } else if (noBtn.checked) {
    const allFields = [first, second];
    const fieldsRemain = allFields.filter((field) => field.value === '');
    if (fieldsRemain.length > 0) {
      showMessage('Please fill all fields!');
    } else {
      // if all input fields have values, submit the form
      autoSubmit.submit();

      // reset input fields
      input_1.value = '';
      input_2.value = '';
      first.value = '';
      second.value = '';
    }
  } else if (mayBeBtn.checked) {
    const requiredFields = [booking, depature, daysweeks, daysduration];
    const emptyFields = requiredFields.filter((field) => {
      field.value === '';
    });
    if (emptyFields.length > 0) {
      showMessage(
        'Please fill all the required fields for the Suscribe option!'
      );
    } else {
      // if all input fields have values, submit the form
      autoSubmit.submit();
      // reset input fields
      input_1.value = '';
      input_2.value = '';
      booking.value = '';
      depature.value = '';
      daysweeks.value = '';
      daysduration.value = '';
    }
  } else {
    if (input_1.value) {
      // submit form
      autoSubmit.submit();
      // empty and unchecked button
      input_1.value = '';
      input_2.value = '';
      datepicker.value = '';
    }
  }
}

// create new div
const addNewDiv = document.createElement('div');

// Function to show error message
function showMessage(message) {
  addNewDiv.setAttribute('class', 'errors');
  addNewDiv.innerHTML = message;
  addNewDiv.style.color = 'yellow';
  addNewDiv.style.backgroundColor = 'red';
  addNewDiv.style.padding = 20 + 'px';
  addNewDiv.style.position = 'absolute';
  addNewDiv.style.top = 84 + 'px';
  addNewDiv.style.left = 1390 + 'px';
  body.appendChild(addNewDiv);
  setTimeout(() => {
    addNewDiv.remove();
  }, 3000);
}

autoSubmit.addEventListener('submit', onSubmitForm);

// Frontend JavaScript code
const region = 'example_region'; // Specify the region for which tickets are to be displayed

// Fetch tickets from backend
fetch(`/api/tickets/${region}`)
  .then((response) => response.json())
  .then((tickets) => {
    // Process tickets data and dynamically create HTML elements to display them
    const ticketList = document.getElementById('ticket-list'); // Assuming you have a div with id 'ticket-list' to display the list of tickets

    tickets.forEach((ticket) => {
      const ticketElement = document.createElement('div');
      ticketElement.classList.add('ticket'); // Add CSS class for styling

      // Populate the ticketElement with ticket data
      ticketElement.innerHTML = `
        <h2>${ticket.title}</h2>
        <p>${ticket.description}</p>
        <!-- Add more ticket data to be displayed as needed -->

        <!-- Add event listeners or handlers for user interactions as needed -->
      `;

      ticketList.appendChild(ticketElement); // Append the ticketElement to the ticketList container
    });
  })
  .catch((error) => console.log(error));

/* function onSubmitForm(e) {
  e.preventDefault();

  if (input_1.value === '' || input_2.value === '') {
    // show error message if input fields are empty
    showMessage('Please Select Routes!');
  } else if (
    yesBtn1.checked === false &&
    noBtn1.checked === false &&
    mayBeBtn1.checked === false) {
    showMessage('Please check a button!');
  } else if (yesBtn1.checked && datepicker.value === '') {
    // show error message if 'yes' is selected but date field is empty
    showMessage('Please Select Date!');
  } else if (noBtn1.checked) {
    const allFields = [first, second];
    const fieldsRemain = allFields.filter((field) => field.value === '');
    if (fieldsRemain.length > 0) {
      showMessage('Please fill all fields!');
    } else {
      // if all input fields have values, submit the form
      autoSubmit.submit();

      // reset input fields
      input_1.value = '';
      input_2.value = '';
      datepicker.value = '';
      first.value = '';
      second.value = '';
      booking.value = '';
      depature.value = '';
      daysweeks.value = '';
      daysduration.value = '';
    }
  } else if (mayBeBtn1.checked) {
    const requiredFields = [booking, depature, daysweeks, daysduration];
    const emptyFields = requiredFields.filter((field) => field.value === '');
    if (emptyFields.length > 0) {
      showMessage(
        'Please fill all the required fields for the Suscribe option!'
      );
    } else {
      // if all input fields have values, submit the form
      autoSubmit.submit();
      // reset input fields
      input_1.value = '';
      input_2.value = '';
      datepicker.value = '';
      first.value = '';
      second.value = '';
      booking.value = '';
      depature.value = '';
      daysweeks.value = '';
      daysduration.value = '';
    }
  }
} */

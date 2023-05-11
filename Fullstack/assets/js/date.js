// to get current year
function getYear() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  document.querySelector('#displayYear').innerHTML = currentYear;
}

getYear();

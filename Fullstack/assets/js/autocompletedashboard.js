const unhide = document.getElementById('unhide');
const logout = document.getElementById('logout');
const log = document.querySelector('.log');
let isHidden = true; // initial state is hidden

unhide.addEventListener('click', () => {
  if (isHidden) {
    log.style.display = 'block';
    logout.style.display = 'block'; // unhide
  } else {
    log.style.display = 'none'; // hide
  }
  isHidden = !isHidden; // toggle state
});

//  course section owl carousel
$('.course_owl-carousel').owlCarousel({
  autoplay: true,
  loop: true,
  margin: 5,
  autoHeight: true,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  autoWidth: true,
});

// to get current year
function getYear() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  document.querySelector('#displayYear').innerHTML = currentYear;
}

getYear();

/** google_map js **/
function myMap() {
  let mapProp = {
    center: new google.maps.LatLng(5.47631, 7.025853),
    zoom: 19,
  };
  let map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
}

$(document).ready(function () {
  const checkedAmenities = {};
  const checkboxes = $('input');
  const initial_text = $('DIV.amenities h4').text();
  for (const box of checkboxes) {
    box.addEventListener('change', function () {
      if (box.checked) {
        checkedAmenities[$(box).data('id')] = $(box).data('name');
      } else {
        delete checkedAmenities[$(box).data('id')];
      }
      const checkedList = Object.values(checkedAmenities);
      if (checkedList.length < 1 ) {
        checkedList.push(initial_text);
      }
      $('DIV.amenities h4').text(checkedList.join(', '));
    });
  }
});

$.get('http://0.0.0.0:5001/api/v1/status/', function (data, stat) {
  $('DIV#api_status').toggleClass('available', stat.code === 200);
});



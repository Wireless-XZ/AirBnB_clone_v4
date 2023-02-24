// $(document).ready(function () {
//   const amenities = {};

//   $("input[type=checkbox]").change(function () {
//     if ($(this).is(':checked')) {
//       amenities[$(this).attr('data-id')] = $(this).attr('data-name');
//     } else {
//       delete amenities[$(this).attr('data-id')];
//     }

//     const amenityList = Object.values(amenities).join(', ');
//     $('div.amenities h4').text(amenityList);
//   });
// });


$(document).ready(function () {
  const amenities = {};
  $('input[type="checkbox"]').click(function () {
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    $('H4#sweet').text(Object.values(amenities).join(', '));
  });
});

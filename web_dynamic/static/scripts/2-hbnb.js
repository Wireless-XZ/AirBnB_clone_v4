$(document).ready(function () {
    const amenities = {};

    $('input[type="checkbox"]').change(function () {
        if ($(this).is(':checked')) {
            amenities[$(this).data('id')] = $(this).data('name');
        } else {
            delete amenities[$(this).data('id')];
        }

        const amenityList = Object.values(amenities).join(', ');
        $('.amenities h4').text(amenityList);

        $.get(apiUrl, function (data, textStatus) {
			if (textStatus === 'success' && data.status === 'OK') {
				$('#api_status').addClass('available');
			}
        });
    });
});

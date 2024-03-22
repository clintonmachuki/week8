$(document).ready(function() {
    $.ajax({
        url: 'counties.json', // Assuming your JSON file is named counties.json
        dataType: 'json',
        success: function(data) {
            // Process the JSON data here
            displayCounties(data.counties);
        },
        error: function(xhr, status, error) {
            // Report any errors
            console.error('Error loading JSON:', status, error);
            updateMessage('Error loading JSON: ' + error);
        }
    });

    function displayCounties(counties) {
        // Assuming you have a table with id "countylist" in your HTML
        var table = $('#countylist');

        // Iterate over each county and append a row to the table
        $.each(counties, function(index, county) {
            var row = $('<tr>');
            row.append('<td>' + county.countyID + '</td>');
            row.append('<td>' + county.name + '</td>');
            row.append('<td>' + county.wgs84Lat + '</td>');
            row.append('<td>' + county.wgs84Long + '</td>');
            table.append(row);
        });
    }

    function updateMessage(message) {
        // Assuming you have an element with id "updatemessage" in your HTML
        $('#updatemessage').text(message);
    }
});

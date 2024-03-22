// Define a function to make an Ajax request
function makeAjaxRequest(url, callback) {
    var xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
    
    // Configure the request
    xhr.open('GET', url, true); // Specify the URL and set it to be an asynchronous request
    
    // Define a callback function to handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // If the request is complete and successful, call the provided callback function with the response
            callback(xhr.responseText);
        }
    };
    
    // Send the request
    xhr.send();
}

// Example usage:
var url = 'https://onlinephp.com/'; // Replace with the URL you want to request
makeAjaxRequest(url, function(response) {
    // Handle the response here, for example, you can log it to the console
    console.log(response);
});

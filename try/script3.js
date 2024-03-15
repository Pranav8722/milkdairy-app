
// Function to handle form submission
document.getElementById('milk-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    var formData = new FormData(this); // Create FormData object from form data
    var xhr = new XMLHttpRequest(); // Create new XMLHttpRequest object
    xhr.open('POST', 'submit.php', true); // Open POST request to submit.php
    xhr.onload = function() {
        if (xhr.status == 200) {
            document.getElementById('message').innerText = xhr.responseText; // Display response message
            document.getElementById('message').style.display = 'block'; // Show the message div
            document.getElementById('milk-form').reset(); // Reset the form
            setTimeout(function() {
                document.getElementById('message').style.display = 'none'; // Hide the message after some time
            }, 3000); // Hide after 3 seconds (3000 milliseconds)
        }
    };
    xhr.send(formData); // Send form data
});

// Form validation function
document.getElementById('bootstrapForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var terms = document.getElementById('terms').checked;

    // Validation logic
    if (name && email && password && terms) {
        document.getElementById('responseMessage').style.color = 'green';
        document.getElementById('responseMessage').innerText = 'Form submitted successfully!';
    } else {
        document.getElementById('responseMessage').style.color = 'red';
        document.getElementById('responseMessage').innerText = 'Please fill all the fields and agree to the terms.';
    }
});

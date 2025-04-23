document.addEventListener("DOMContentLoaded", function () {
    const surveyForm = document.querySelector("form");

    surveyForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the default form submission

        // Get form values
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const feedback = document.getElementById("feedback").value;
        const rating = document.getElementById("rating").value;

        // Check if all fields are filled
        if (name && age >= 0 && feedback && rating) {
            // Show confirmation message
            alert("Thank you, " + name + "! Your feedback has been submitted.");
            
            // Clear the form fields
            surveyForm.reset();
        } else {
            alert("Please fill in all the fields correctly.");
        }
    });
});

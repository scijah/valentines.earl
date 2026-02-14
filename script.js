document.getElementById('name-form').addEventListener('submit', function(event) {
    // Prevent the form from refreshing the page
    event.preventDefault();

    // Get the value from the input field
    const passwordInput = document.getElementById('name-input').value;

    // Check if the password is correct
    if (passwordInput === "baby") {
        // Redirect to your target page
        window.location.href = "mail.html"; 
    } else {
        // Optional: Alert the user if it's wrong
        alert("Wrong password! Try again （>﹏<）");
    }
});
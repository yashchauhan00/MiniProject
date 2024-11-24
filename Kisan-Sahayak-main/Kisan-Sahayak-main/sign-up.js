// Selecting the form and input fields
const form = document.querySelector("form");
const fullName = document.querySelector("input[placeholder='Full Name']");
const email = document.querySelector("input[placeholder='Email']");
const password = document.querySelector("input[placeholder='Password']");

// Function to validate email format
function validateEmail(emailValue) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailValue);
}

// Function to validate password strength
function validatePassword(passwordValue) {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(passwordValue);
}

// Form submission event listener
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Trim input values to remove extra spaces
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // Validate inputs
    if (fullNameValue === "") {
        alert("Full Name is required!");
        return;
    }

    if (!validateEmail(emailValue)) {
        alert("Please enter a valid email address!");
        return;
    }

    if (!validatePassword(passwordValue)) {
        alert(
            "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
        );
        return;
    }

    // If all validations pass, show a success message
    alert("Sign-Up Successful! Welcome, " + fullNameValue + " 🎉");
    form.reset(); // Clear the form
});
// Switch to login view
function loginActive() {
    wrapper.classList.remove('active');
}
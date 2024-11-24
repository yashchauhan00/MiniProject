const wrappers = document.querySelector('.wrappers');
function registerActive() {
    wrapper.classList.toggle('active');
}
function loginActive() {
    wrapper.classList.toggle('active');
}
// Select wrapper and form containers
const wrapper = document.querySelector('.wrapper');
const loginForm = document.querySelector('.form-wrapper.login');
const registerForm = document.querySelector('.form-wrapper.register');

// Function to switch to the registration form
function registerActive() {
    wrapper.classList.add('active'); // Add 'active' class to show registration form
    loginForm.style.display = 'none'; // Hide login form
    registerForm.style.display = 'block'; // Show registration form
}

// Function to switch to the login form
function loginActive() {
    wrapper.classList.remove('active'); // Remove 'active' class to show login form
    loginForm.style.display = 'block'; // Show login form
    registerForm.style.display = 'none'; // Hide registration form
}

// Basic form validation for login and registration
document.querySelector('.form-wrapper.login form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = e.target.querySelector("input[type='email']").value.trim();
    const password = e.target.querySelector("input[type='password']").value.trim();

    if (email === '') {
        alert('Please enter your email!');
        return;
    }
    if (password === '') {
        alert('Please enter your password!');
        return;
    }

    // Placeholder for login logic
    alert(`Login successful! Welcome back, ${email}`);
});

document.querySelector('.form-wrapper.register form').addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = e.target.querySelector("input[type='text']").value.trim();
    const email = e.target.querySelector("input[type='email']").value.trim();
    const password = e.target.querySelector("input[type='password']").value.trim();

    if (fullName === '') {
        alert('Please enter your full name!');
        return;
    }
    if (email === '') {
        alert('Please enter your email!');
        return;
    }
    if (password === '') {
        alert('Please enter a password!');
        return;
    }

    // Placeholder for registration logic
    alert(`Registration successful! Welcome, ${fullName}`);
    loginActive(); // Switch to login form after successful registration
});

// Initially display login form
loginActive();

document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    signIn();
});

function signIn() {
    var usernameOrPhone = document.getElementById('usernameOrPhone').value.trim();
    var password = document.getElementById('password').value;

    var errorMessageElement = document.getElementById('errorMessage');
    errorMessageElement.textContent = '';

    if (usernameOrPhone === '') {
        errorMessageElement.textContent = 'Please enter your username or phone number.';
        return;
    }

    if (password.length < 6) {
        errorMessageElement.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    alert('Login successful for ' + usernameOrPhone);
}

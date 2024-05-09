function signUp() {
    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var birthday = document.getElementById('birthday').value;
    var gender = document.getElementById('selectedGender').value;

    var errorMessageElement = document.getElementById('errorMessage');
    errorMessageElement.textContent = '';

    if (name === '') {
        errorMessageElement.textContent = 'Please enter a valid username.';
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        errorMessageElement.textContent = 'Please enter a valid 10-digit phone number.';
        return;
    }

    if (password.length < 6) {
        errorMessageElement.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    if (password !== confirmPassword) {
        errorMessageElement.textContent = 'Passwords do not match.';
        return;
    }

    if (!birthday) {
        errorMessageElement.textContent = 'Please select a valid birthday date.';
        return;
    }

    if (!gender) {
        errorMessageElement.textContent = 'Please select a gender.';
        return;
    }

    alert('Sign up successful for ' + name + ' with phone number ' + phone + ' and birthday ' + birthday + ' as a ' + gender);
}

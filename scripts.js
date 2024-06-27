document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    // First Name validation
    const firstName = document.getElementById('firstName').value;
    if (firstName.trim() === '') {
        document.getElementById('firstNameError').classList.remove('d-none');
        isValid = false;
    } else {
        document.getElementById('firstNameError').classList.add('d-none');
    }

    // Last Name validation
    const lastName = document.getElementById('lastName').value;
    if (lastName.trim() === '') {
        document.getElementById('lastNameError').classList.remove('d-none');
        isValid = false;
    } else {
        document.getElementById('lastNameError').classList.add('d-none');
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').classList.remove('d-none');
        isValid = false;
    } else {
        document.getElementById('emailError').classList.add('d-none');
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').classList.remove('d-none');
        isValid = false;
    } else {
        document.getElementById('passwordError').classList.add('d-none');
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').classList.remove('d-none');
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').classList.add('d-none');
    }

    // Age validation
    const age = document.getElementById('age').value;
    if (age.trim() === '' || isNaN(age) || age < 1 || age > 120) {
        document.getElementById('ageError').classList.remove('d-none');
        isValid = false;
    } else {
        document.getElementById('ageError').classList.add('d-none');
    }

    // Phone Number validation
    const phoneNumber = document.getElementById('phoneNumber').value;
    const phoneNumberRegex = /^[0-9]{10}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
        document.getElementById('phoneNumberError').classList.remove('d-none');
        isValid = false;
    } else {
        document.getElementById('phoneNumberError').classList.add('d-none');
    }

    // Address validation
    const address = document.getElementById('address').value;
    if (address.trim() === '') {
        document.getElementById('addressError').classList.remove('d-none');
        isValid = false;
    } else {
        document.getElementById('addressError').classList.add('d-none');
    }

    // State validation
    const state = document.getElementById('state').value;
    if (state.trim() === '') {
        document.getElementById('stateError').classList.remove('d-none');
        isValid = false;
    } else {
        document.getElementById('stateError').classList.add('d-none');
    }

    // Country validation
    const country = document.getElementById('country').value;
    if (country === '') {
        document.getElementById('countryError').classList.remove('d-none');
        isValid = false;
    } else {
        document.getElementById('countryError').classList.add('d-none');
    }

    if (isValid) {
        // Form is valid, you can submit it
        alert('Form submitted successfully!');
    }
});

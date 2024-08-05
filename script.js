// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('payment-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const cardNumber = document.getElementById('card-number').value;
        const expirationDate = document.getElementById('expiration-date').value;
        const cvv = document.getElementById('cvv').value;

        let isValid = true;

        // Clear previous error messages
        document.getElementById('card-number-error').textContent = '';
        document.getElementById('expiration-date-error').textContent = '';
        document.getElementById('cvv-error').textContent = '';

        //card number
        if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber)) {
            document.getElementById('card-number-error').textContent = 'Invalid card number format.';
            isValid = false;
        }
        // expiration date
        if (!/^(0[1-9]|1[0-2])\/(2[0-9])$/.test(expirationDate)) {
            document.getElementById('expiration-date-error').textContent = 'Invalid expiration date format.';
            isValid = false;
        }

        //CVV
        if (!/^\d{3}$/.test(cvv)) {
            document.getElementById('cvv-error').textContent = 'Invalid CVV format.';
            isValid = false;
        }

        if (isValid) {
            // Form is valid, you can submit the form or handle it as needed
            alert('Payment information is valid. Submitting form...');
            // form.submit(); // Uncomment this line to actually submit the form
        }
    });
});

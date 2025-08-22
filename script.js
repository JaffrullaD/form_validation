$(document).ready(function () {
    $('#myForm').on('submit', function (e) {
        e.preventDefault();

        $('.error').text('');
        $('input').removeClass('error-border');

        let isValid = true;

        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const password = $('#password').val().trim();

        // Name validation
        if (name === '') {
            $('#nameError').text("Please give any name");
            $('#name').addClass('error-border');
            isValid = false;
        }

        // Email validation (simple regex)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            $('#emailError').text("Please enter your email");
            $('#email').addClass('error-border');
            isValid = false;
        } else if (!emailPattern.test(email)) {
            //test(email) is a method in regex
            $('#emailError').text("Please enter a valid email");
            $('#email').addClass('error-border');
            isValid = false;
        }

        // Password validation
        if (password === '') {
            $('#passwordError').text("Please give any password");
            $('#password').addClass('error-border');
            isValid = false;
        } else if (password.length < 6) {
            $('#passwordError').text("Password should be greater than 6 characters");
            $('#password').addClass('error-border');
            isValid = false;
        }

        if (isValid) {
            // Simulate AJAX request (replace url with your backend endpoint)
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/posts', // dummy API for demo
                method: 'POST',
                data: {
                    name: name,
                    email: email,
                    password: password
                },
                beforeSend: function () {
                    $('button[type="submit"]').prop('disabled', true).text('Submitting...');
                },
                success: function (response) {
                    alert('Form submitted successfully!');
                    $('#myForm')[0].reset();
                },
                error: function () {
                    alert('Something went wrong. Please try again.');
                },
                complete: function () {
                    $('button[type="submit"]').prop('disabled', false).text('Submit');
                }
            });
        }
    });
});

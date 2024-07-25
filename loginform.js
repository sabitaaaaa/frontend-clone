



        document.getElementById('register-form').addEventListener('submit', function(event) {
            event.preventDefault();

            let firstName = document.getElementById('first-name').value.trim();
            let lastName = document.getElementById('last-name').value.trim();
            let email = document.getElementById('register-email').value.trim();
            let password = document.getElementById('register-password').value.trim();
            let confirmPassword = document.getElementById('confirm-password').value.trim();
            let securityQuestion = document.getElementById('security-question').value;
            let securityAnswer = document.getElementById('security-answer').value.trim();

            let errorMessages = [];

            if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '' || securityQuestion === '' || securityAnswer === '') {
                errorMessages.push('All fields are required.');
            }

            if (!validateEmail(email)) {
                errorMessages.push('Invalid email format.');
            }         
   if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }



            if (password.length < 8) {
                errorMessages.push('Password must be at least 8 characters long.');
            }

            if(confirmPasswordValue === '') {
                        setError(confirmPasswordValue, 'Please confirm your password');
                    } else if (confirmPasswordValue !== passwordValue) {
                        setError(confirmPasswordValue, "Passwords doesn't match");
                    } else {
                        setSuccess(confirmPasswordValue);
                    }

            if (errorMessages.length > 0) {
                alert(errorMessages.join('\n'));
                return;
            }

            this.submit();
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }


        




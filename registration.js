function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    
    const form = document.getElementById('registerForm');
    const password = form.password.value;
    const confirmPassword = form.confirm_password.value;

    // Strong password regex
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    if (!strongPasswordRegex.test(password)) {
      alert(
        'Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    alert('Registration successful!');
    window.location.href = 'login.html';
    form.reset();
  }

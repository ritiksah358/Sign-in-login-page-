document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('error-message');

  loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const rememberMe = document.getElementById('rememberMe').checked;

      if (username === '' || password === '') {
          showError('Both fields are required.');
          return;
      }

      if (!validateEmail(username)) {
          showError('Invalid email format.');
          return;
      }

      // Replace this with actual authentication logic
      if (username === 'user@example.com' && password === 'password123') {
          // Save login info to local storage if "Remember Me" is checked
          if (rememberMe) {
              localStorage.setItem('username', username);
              localStorage.setItem('password', password);
          } else {
              localStorage.removeItem('username');
              localStorage.removeItem('password');
          }
          window.location.href = 'welcome.html'; // Redirect to a welcome page or dashboard
      } else {
          showError('Invalid username or password.');
      }
  });

  function showError(message) {
      errorMessage.textContent = message;
      errorMessage.style.display = 'block';
      errorMessage.classList.add('blink');
      setTimeout(() => {
          errorMessage.classList.remove('blink');
      }, 3000);
  }

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }

  // Autofill if "Remember Me" was previously checked
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');
  if (savedUsername && savedPassword) {
      document.getElementById('username').value = savedUsername;
      document.getElementById('password').value = savedPassword;
      document.getElementById('rememberMe').checked = true;
  }
});

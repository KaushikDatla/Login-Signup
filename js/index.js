const toggleYourPassword = document.querySelector('#toggleUrPass');
  const YourPassword = document.querySelector('#your_pass');

  toggleYourPassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = YourPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    YourPassword.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
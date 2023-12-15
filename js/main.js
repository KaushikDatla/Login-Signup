var pass = document.getElementById("pass")
  , re_pass = document.getElementById("re_pass");

function validatePassword(){
  if(pass.value != re_pass.value) {
    re_pass.setCustomValidity("Passwords Don't Match");
  } else {
    re_pass.setCustomValidity('');
  }
}

pass.onchange = validatePassword;
re_pass.onkeyup = validatePassword;


const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#pass');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
  const confirmPassword = document.querySelector('#re_pass');

  toggleConfirmPassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPassword.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
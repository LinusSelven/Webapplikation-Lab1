let form = document.getElementById('register-form')
let password = document.getElementById('password')


form.addEventListener('submit', (e) => {
  if(password.value.length < 6) {
      const passError = document.getElementById('passwordError')
      passError.innerHTML = 'Password must contain more than 6 characters'
      e.preventDefault();
  }
});

let form = document.getElementById('register-form')
let password = document.getElementById('password')


form.addEventListener('submit', (e) => {
    console.log(password.value)
    console.log(password.value.length);
  if(password.value.length < 6) {
      const passError = document.getElementById('passwordError')
      passError.innerHTML = 'Password must contain more than 6 characters'
      e.preventDefault();
  }
    e.preventDefault();
});

let form = document.getElementById('register-form')
let password = document.getElementById('password')

form.addEventListener('submit', (e) => {
    console.log("before check");
  if(password.value.length < 6) {
      const passError = document.getElementById('passwordError')
      passError.innerHTML = 'Password must contain more than 6 characters'
      e.preventDefault();
  }
  console.log('after check')
})

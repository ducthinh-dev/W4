const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function showPassword() {
    if (password.type === 'text'){
        password.type = 'password'
    } else if (window.confirm('Show password?')) {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
}

function checkInputs() {
    const usernameValue = username.value.trim()
    const passwordValue = password.value.trim()

    let flag = true
    if (usernameValue === '') {
        setErrorFor(username)
        flag = false
    } else {
        setSuccessFor(username)
    }
    if (passwordValue === '') {
        setErrorFor(password)
    } else {
        setSuccessFor(password)
        flag = false
    }
    if (flag) {
        alert('Login success!')
    }
}

function setErrorFor(element) {
    const formControl = element.parentElement
    formControl.className = 'form-control error'
}

function setSuccessFor(element) {
    const formControl = element.parentElement
    formControl.className = 'form-control'
}
window.addEventListener('load', () => console.log('carregou'))

const userEmailRef = document.querySelector('#userEmail')
const userPasswordRef = document.querySelector('#userPassword')
const loginButtonRef = document.querySelector('#loginButton')

var userData = {
    email: '',
    password: ''
}

function validarSenha(senha) {

    userData.password = senha

}



function validarEmail(email) {

    userData.email = email

}



function login(event) {

    event.preventDefault()

}

userEmailRef.addEventListener('keyup', (event) => validarEmail(event.target.value))

userPasswordRef.addEventListener('keyup', (event) => validarSenha(event.target.value))

loginButtonRef.addEventListener('click', (event) => login(event))
const userEmailRef = document.querySelector('#userEmail') // Obtenção do input de email
const userPasswordRef = document.querySelector('#userPassword') // Obtenção do input de senha
const loginButtonRef = document.querySelector('#loginButton') // Obtenção do botão de submit do formulário

// Criação de um Objeto para armazenar os dados digitados pelo usuário
var userData = {
    email: '',
    password: ''
}

// Função que ira validar a senha
function validarSenha(senha) {

    userData.password = senha

}


// Função que ira validar o e-mail
function validarEmail(email) {

    userData.email = email

}



// Função que irá "fazer o login"
function login(event) {

    event.preventDefault()

    console.log(userData)

}

userEmailRef.addEventListener('keyup', (event) => validarEmail(event.target.value))

userPasswordRef.addEventListener('keyup', (event) => validarSenha(event.target.value))

loginButtonRef.addEventListener('click', (event) => login(event))
// Obtenção de todas as referencias do DOM que iremos precisar
const inputEmailRef = document.querySelector('#userEmail')
const inputPasswordRef = document.querySelector('#userPassword')
const inputPhoneRef = document.querySelector('#userPhone')
const loginButtonRef = document.querySelector('#loginButton')

// Objeto que irá informar qual campo ainda possuí erro. Ele será muito importante para termos uma visão geral se o nosso formulário como um todo possuí algum erro ou não
var formErrors = {
    userEmail: true,
    userPassword: true,
    userPhone: true
}

// Função que irá checar se todos os Inputs que temos no formulário estão válidos
function checkFormValidity() {

    // Conversão dos valores do nosso objeto em Array para utilizarmos a função every(), disponivel apenas para arrays
    const formErrorsArray = Object.values(formErrors)
    // Utilização da função every() para checarmos se todos os valores do nosso Array são falsos, caso todos sejam a função every() irá retornar True, mas se apenas um deles for True a função irá retornar False
    const formValidity = formErrorsArray.every(item => item === false)

    // Parte do código onde habilitamos e desabilitamos o botão do Formulário. Precisamos inverter o valor da variavel "formValidity" justamente por conta dela retornar True caso todos os campos sejam falsos, porém, quando dizemos que o "disabled" do botão é True iremos desabilita-lo. Por isso precisamos inverter esse valor para o botão ser habilitado quando recebermos True na variavel "formValidity", assim ele irá dizer que o botão não está mais desabilitado
    loginButtonRef.disabled = !formValidity

}

// Função genérica criada para validar qualquer Input que possua a sua validação somente pelo HTML
// Por conta dela ser uma função genérica, ou seja, validar vários Inputs de forma automática, precisamos informar quem será validado pelo parametro "inputRef". Nele iremos precisar fornecer qual é a referencia obtida pelo DOM do input que queremos validar
function validateInput(inputRef) {

    // A função checkValidity() irá verificar se o valor digitado no Input está seguindo as regras que declaramos no Front-end
    const inputValid = inputRef.checkValidity()
    // Iremos obter o elemento pai do nosso Input para colocarmos a classe de Erro quando necessário
    const elementFatherRef = inputRef.parentElement

    // Verificação para saber se o Input é valido ou não
    if(inputValid) {

        // Adição de classe de erro no elemento pai do Input para exibirmos a estilização e mensagem de erro
        elementFatherRef.classList.remove('error')

    } else {

        // Remoção de classe de erro no elemento pai do Input para escondermos a estilização e mensagem de erro
        elementFatherRef.classList.add('error')

    }

    // Ponto muito importante do nosso script, onde automatizamos o processo de inserção de dados dentro do nosso objeto de erros do formulário chamado "formErrors". Ele está construído dessa maneira justamente para atender todos os Inputs que nós tivermos dentro da Aplicação.
    // A ideia aqui é que baseado no Id do campo que informamos no parametro "inputRef" o script seja capaz de atualizar a chave do objeto "formErrors" que tenha o mesmo nome que o Id. Para que isso seja possível nos precimos colocar "[]" após o nome do nosso objeto e logo após isso informarmos uma String para que a atualização do valor seja possível, nesse caso o Id do Input.
    // Então no caso do Input de E-mail que possuí o Id igual a "userEmail", o script atualizará dentro do objeto a chave que tiver o mesmo nome que o Id.
    // Levando esse mesmo exemplo do Input de E-mail em consideração, isso -> formErrors[inputRef.id] = !inputValid <- é a mesma coisa que isso -> formErrors.userEmail = !inputValid <- porém de uma forma que se aplique para todos os Inputs que precisarmos
    formErrors[inputRef.id] = !inputValid
    // O valor do "inputValid" é invertido aqui justamente porque o nosso objeto "formErrors" serve como referencia para sabermos qual Input do nosso formulário está Invalido e qual não está. Então nesse caso onde o "inputValid" irá retornar True para quando o Input estiver válido e False para quando estivar inválido, teremos que inverter esse Booleano para que faça sentido com o contexto do nosso objeto "formErrors", que no caso é dizer quem possuí erro como True e quem não possuí como False.
    // Se não fizessemos essa inversão "!inputValid" teriamos um cenário onde um Input dentro do "formErrors" seria inválido porém o valor dele seria True, o que não faria sentido no nosso cenário.

    // Chamada para executar nossa função que valida o formulário como um todo e vê se o botão de Prosseguir pode ser habilitado ou não
    checkFormValidity()

}

// Função de Login que será disparada após o usuário clickar no botão
function login(event) {

    // Utilização do preventDefault() para impedirmos o recarregamento da página
    event.preventDefault()

    //

}

// Adição dos eventListeners às nossas referencias para que toda essa validação em tempo real seja possível
inputEmailRef.addEventListener('keyup', () => validateInput(inputEmailRef)) // Informamos para a função genérica validadeInput() justamente a referencia do elemento que obtivemos no começo do Script
inputPasswordRef.addEventListener('keyup', () => validateInput(inputPasswordRef))
inputPhoneRef.addEventListener('keyup', () => validateInput(inputPhoneRef))
loginButtonRef.addEventListener('click', (event) => login(event))
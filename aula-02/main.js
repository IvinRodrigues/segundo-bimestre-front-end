var numeroVezesUsuarioVenceu = 0
var numeroVezesOponenteVenceu = 0

// Função que recebe dois parametros pois iremos precisar das informações da jogada do usuario e da jogada do oponente para realizar os comparativos e determinar quem é o vencedor
function verificarGanhador(usuario, oponente) {

    // Está função ainda não está completa, você precisa realizar as outras comparações para de fato cobrir todas os casos que podem acontecer
    // Tenha sempre em mente que: 1 representa Pedra, 2 representa Papel e 3 representa Tesoura

    if(usuario === 1 && oponente === 2) {

        // Nessa verificação em específico, só é verificado caso o Usuário escolha Pedra e o Oponente escolha Papel

        console.log('voce perdeu!')

    }

}

function comecarJogo() {

    let jogadaUsuario = Number(prompt('O que voce deseja jogar? 1 = pedra, 2 = papel, 3 = tesoura'))
    let jogadaOponente = Math.floor(Math.random() * 3) + 1

    // Após obter a Jogada do Usuário e Gerar uma Jogada para o Oponente, chamamos a função para verificar quem foi o ganhador
    verificarGanhador(jogadaUsuario, jogadaOponente)

}

function perguntaUsuarioDesejaJogar() {

    let usuarioDesejaJogar = confirm('Você gostaria de jogar?')

    if(usuarioDesejaJogar === true) {

        comecarJogo()

    } else {

        alert('Obrigado por visitar a pagina')

    }

}

// Chamada da função que ira Começar o nosso game
perguntaUsuarioDesejaJogar()
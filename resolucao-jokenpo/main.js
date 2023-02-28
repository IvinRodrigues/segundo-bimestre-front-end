var numeroVezesUsuarioVenceu = 0
var numeroVezesOponenteVenceu = 0
var dificuldadePartida = 1

function verificarPlacar() {

    if(numeroVezesUsuarioVenceu !== 2 && numeroVezesOponenteVenceu !== 2) {

        comecarJogo()

    } else {

        if(numeroVezesUsuarioVenceu === 2) {

            alert('Partida ganha :D')
    
        }
        
        if(numeroVezesOponenteVenceu === 2) {
    
            alert('Partida perdida D:')
    
        }

    }

}



function obterJogadaBaseadaNumero(jogada) {

    let nomeJogada
    
    if(jogada === 1) {

        nomeJogada = 'Pedra'

    } else if(jogada === 2) {

        nomeJogada = 'Papel'

    } else {

        nomeJogada = 'Tesoura'

    }

    return nomeJogada

}



function mostrarJogadas(usuario, oponente) {

    alert('Você jogou ' + obterJogadaBaseadaNumero(usuario) + ' e o Oponente jogou ' + obterJogadaBaseadaNumero(oponente) + '!')

}



function mudarPlacar(resultado, usuario, oponente) {

    mostrarJogadas(usuario, oponente)

    if(resultado === 'vitoria') {

        alert('Você ganhou a rodada!')
        numeroVezesUsuarioVenceu++

    }
    
    if(resultado === 'derrota') {

        alert('Você perdeu a rodada!')
        numeroVezesOponenteVenceu++

    }
    
    if(resultado === 'empate') {

        alert('Empatou!')

    }

    verificarPlacar()

}



function verificarGanhador(usuario, oponente) {

    if(usuario === oponente) {

        mudarPlacar('empate', usuario, oponente)

    }

    if(usuario === 1) {

        if(oponente === 2) {

            mudarPlacar('derrota', usuario, oponente)

        }

        if(oponente === 3) {

            mudarPlacar('vitoria', usuario, oponente)

        }

    }

    if(usuario === 2) {

        if(oponente === 1) {

            mudarPlacar('vitoria', usuario, oponente)

        }

        if(oponente === 3) {

            mudarPlacar('derrota', usuario, oponente)

        }

    }

    if(usuario === 3) {

        if(oponente === 1) {

            mudarPlacar('derrota', usuario, oponente)

        }

        if(oponente === 2) {

            mudarPlacar('vitoria', usuario, oponente)

        }

    }

}



function obterJogadaUsuario() {

    let jogada = Number(prompt('O que voce deseja jogar? 1 = pedra, 2 = papel, 3 = tesoura'))

    if(isNaN(jogada)) {

        alert('Por favor, insira um número')
        obterJogadaUsuario()

    } else {

        return jogada

    }


}



function obterJogadaOponente(jogadaUsuario) {

    let jogada = Math.floor(Math.random() * 3) + 1

    if(dificuldadePartida === 2) {

        let chanceRoubo = Math.floor(Math.random() * 2) + 1

        if(chanceRoubo === 2) {

            if(jogadaUsuario === 1) {

                jogada = 2

            } else if(jogadaUsuario === 2) {

                jogada = 3

            } else {

                jogada = 1

            }

        }

    }

    return jogada

}



function comecarJogo() {

    let jogadaUsuario = obterJogadaUsuario()
    let jogadaOponente = obterJogadaOponente(jogadaUsuario)

    verificarGanhador(jogadaUsuario, jogadaOponente)

}



function escolherDificuldade() {

    let dificuldade = Number(prompt('Qual dificuldade você deseja jogar? 1 = Normal, 2 = Difícil'))

    if(isNaN(dificuldade)) {

        alert('Por favor, informe uma opção válida!')
        escolherDificuldade()

    } else {

        dificuldadePartida = dificuldade
        comecarJogo()

    }

}



function perguntaUsuarioDesejaJogar() {

    let usuarioDesejaJogar = confirm('Você gostaria de jogar?')

    if(usuarioDesejaJogar === true) {

        escolherDificuldade()

    } else {

        alert('Obrigado por visitar a pagina')

    }

}

perguntaUsuarioDesejaJogar()
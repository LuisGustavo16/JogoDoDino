const player = document.getElementById("player")
const obstaculo = document.getElementById("cano")
const placar = document.querySelector("#app div h1")

var score = 0
var play = false

function pulo () {
    if (play) {
        if (player.classList != "pulo") {
            player.classList.add("pulo")
        }

        setTimeout(() => {
            player.classList.remove("pulo")
        }, 1000)
    }
}

function colisao () {
    if (play) {
        const altura = player.offsetTop
        const largura = obstaculo.offsetLeft
        if (largura <= 180 && largura >= 50 && altura >= 330) {
            obstaculo.style.animation = 'none'
            obstaculo.style.left= `${largura}px`
            player.style.animation = 'none'
            player.style.top = `${altura}px`
            play = false
        }
    }
}

function pontuacao () {
    if (play) {
        placar.textContent = "PONTUAÇÃO: " + score
        score += 1
    }
}

function inicia () {
    obstaculo.classList.add("anda")
    play = true
}

document.addEventListener('keypress', function(event) {
    if (event.key == "a" || event.key == "A") {
        if (!play) {
            inicia()
        }
        pulo()
    }
})

setInterval(colisao, 1)
setInterval(pontuacao, 100)
'use strict'

// Resgatando elementos e declarando variáveis
const semaforo = document.getElementById('semaforo')
const btnVermelho = document.getElementById('vermelho')
const btnAmarelo = document.getElementById('amarelo')
const btnVerde = document.getElementById('verde')
const btnAutomatico = document.getElementById('automatico')
let idInterval = null
let farol = 0

// Verificando se a função 'ligarAutomatico' está ativa
const autoLigado = () => idInterval != null 


// Funções para acender farol
const ligarVermelho = () => semaforo.src = './img/vermelho.png'
const ligarAmarelo = () => semaforo.src = './img/amarelo.png' 
const ligarVerde = () => semaforo.src = './img/verde.png' 


// Alternando entre as cores
const alternarCores = () => {

    if(farol == 0){
        ligarVermelho()
        farol++
    }else if(farol == 1) {
        ligarAmarelo()
        farol++
    }else if(farol == 2){
        ligarVerde()
        farol = 0
    }

}

const ligarAutomatico = () => {
    if(idInterval == null) {
        idInterval = setInterval(alternarCores, 800)
    }
   
}

// Adicionando eventos
btnVermelho.addEventListener('click', () => {
    if(autoLigado) {
        clearInterval(idInterval)
        idInterval = null;
    }
    farol = 0
    ligarVermelho()
})
btnAmarelo.addEventListener('click', () => {
    if(autoLigado) {
        clearInterval(idInterval)
        idInterval = null;
    }
    farol = 1
    ligarAmarelo()
})
btnVerde.addEventListener('click', () => {
    if(autoLigado) {
        clearInterval(idInterval)
        idInterval = null;
    }
    farol = 2
    ligarVerde()
})
btnAutomatico.addEventListener('click', ligarAutomatico)



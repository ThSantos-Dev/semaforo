'use strict'

// Resgatando elementos e declarando variáveis
const semaforo = document.getElementById('semaforo')
const btnVermelho = document.getElementById('vermelho')
const btnAmarelo = document.getElementById('amarelo')
const btnVerde = document.getElementById('verde')
const btnAutomatico = document.getElementById('automatico')
let idInterval = null;
let farol = null

// Funções para acender farol
const ligarVermelho = () => semaforo.src = './img/vermelho.png'
const ligarAmarelo = () => semaforo.src = './img/amarelo.png' 
const ligarVerde = () => semaforo.src = './img/verde.png' 

const pararSemaforo = () => {
    clearInterval(idInterval)
}

// Alternando entre as cores
const alternarCores = () => {
    farol = 0

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
btnVermelho.addEventListener('click', ligarVermelho)
btnAmarelo.addEventListener('click', ligarAmarelo)
btnVerde.addEventListener('click', ligarVerde)
btnAutomatico.addEventListener('click', ligarAutomatico)



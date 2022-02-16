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
const desligaAuto = () => {
    if(autoLigado()) {
        clearInterval(idInterval)
        idInterval = null
    }
}


// Funções para acender farol
const ligarVermelho = () => semaforo.src = './img/vermelho.png'
const ligarAmarelo = () => semaforo.src = './img/amarelo.png' 
const ligarVerde = () => semaforo.src = './img/verde.png' 

// Funções para addEventListener
const farolVermelho = () => {
    desligaAuto()
    farol = 0
    ligarVermelho()
}
const farolAmarelo = () => {
    desligaAuto()
    farol = 1
    ligarAmarelo()
}
const farolVerde = () => {
    desligaAuto()
    farol = 2
    ligarVerde()
}


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
        farol++
    }else if(farol == 3) {
        ligarAmarelo()
        farol = 0;
    }
}

const ligarAutomatico = () => {
    if(idInterval == null) {
        idInterval = setInterval(alternarCores, 800)
    }
   
}

// Adicionando eventos
btnVermelho.addEventListener('click', farolVermelho)
btnAmarelo.addEventListener('click', farolAmarelo)
btnVerde.addEventListener('click', farolVerde)
btnAutomatico.addEventListener('click', ligarAutomatico)



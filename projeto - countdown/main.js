'use strict';

const formatarDigito =  (digito) => `0${digito}`.slice(-2); //difinido só 2 digito da esquerda pra direita



const atualizar = (tempo) =>{
    //pegando os elemento 
const segundos = document.getElementById('segundos');
const minutos = document.getElementById('minutos'); 
const horas = document.getElementById('horas'); 
const dias = document.getElementById('dias');

//calculando 
const qtdSegundos = tempo % 60;
const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
const qtdDias = Math.floor(tempo / (60 * 60 * 24));

//mostrando na tela
segundos.textContent = formatarDigito(qtdSegundos);
minutos.textContent = formatarDigito(qtdMinutos);
horas.textContent = formatarDigito(qtdHoras);
dias.textContent = formatarDigito(qtdDias);
}


const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id); //funçao para, parar contagem

    //condição
    if (tempo == 0){
        pararContagem();
    }
    const contar = () => {//função para iniciar contagem
        if (tempo == 0){
            pararContagem();
        }
        atualizar (tempo);
        tempo--;
    }
    const id = setInterval(contar,1000); 
}

const tempoRestante = () =>{
    // 1 de janeiro de 1970 
    const dataEvento = new Date('2021-07-27 21:10:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje)/1000);
}

contagemRegressiva(tempoRestante()); //definindo o tempo de contagem
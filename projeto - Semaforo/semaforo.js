//definindo variaveis globais
const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

//ligando os botões e parando  o automatico
const trafficLight = (event) =>{
    stopAutomatic();
    turnOn[event.target.id]();
   
}
//trocando as imagem caso seja menor que 2 continue para o proximo
const nextIndex = () =>{
    if(colorIndex < 2){
        colorIndex++
    }else{
    colorIndex = 0;
    }
}

//trocando as cores em sequencia
const changecolor = () => {
    const colors = ['red','yellow','green'];
   const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}
//parar o modo automatico, para o interval nao acelerar 
const stopAutomatic = () => {
    clearInterval (intervalId );
}

//atribuindo as imagens em cada 'ID'
const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changecolor, 1000)  //definindo os segundos para trocar as cores
}



// dando funcionamento nos botões
buttons.addEventListener ('click', trafficLight);
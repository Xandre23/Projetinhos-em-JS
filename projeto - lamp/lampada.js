const turnOnOff = document.getElementById ( 'turnOnOff' );//pegando o elemento html para ter uma função
const quebrar = document.getElementById ( 'quebrar' ); //pegando o elemento html para ter uma função

const lamp = document.getElementById ( 'lamp' ); //pegando o elemento html para ter uma função

function isLampBroken () { //função de verificação para ver se a lampada está quebrada
    return lamp.src.indexOf ( 'quebrada' ) > -1 //caso seja maior que 1 a lampada não está quebrada
}

function lampOn () { //função para ligar a lampada
    if ( !isLampBroken () ) { //verificando se a lampada está quebrada, caso esteje ela não tem nenhuma ação
        lamp.src = './img/ligada.jpg'; 
    }
}

function lampOff () { //função para desligar a lampada
    if ( !isLampBroken () ) { //verificando se a lampada está quebrada, caso esteje ela não tem nenhuma ação
        lamp.src = './img/desligada.jpg';
        turnOnOff.textContent = 'Ligar'; //mudando o texto do botão, caso esteja ligada
    }
}

function lampBroken () { //caso dê um double click na lampada, ela quebra
    lamp.src = './img/quebrada.jpg';
}
function queb () { //botão para quebrar a lampada
    
    lamp.src = './img/quebrada.jpg';
}


function lampOnOff () {
    if ( turnOnOff.textContent == 'Ligar' ) { //caso clique no botão ligar, ela se mantem ligada
        lampOn();
        turnOnOff.textContent = 'Desligar';  //caso clique no botão desligar, ela se mantem desligada
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar'; //caso passe o mouse por cima da lampada ela liga, caso tire ela desliga
    }
}


turnOnOff.addEventListener ( 'click', lampOnOff );

lamp.addEventListener ( 'mouseover', lampOn ); //caso passe o mouse por cima, ela liga
quebrar.addEventListener ( 'click', queb ); //caso clique no botão quebrar, ela quebra
lamp.addEventListener ( 'mouseleave', lampOff ); //caso tire o mouse de cima, ela desliga
lamp.addEventListener ( 'dblclick', lampBroken ); //caso clique duas vezes na lampada, ela quebra
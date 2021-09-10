'use stric';
//variaveis globais
const display = document.getElementById('display');
const numero = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero = true;
let operador;
let numeroAnterior;
//caso tenha uma operação pendente 
const operacaoPendente = () => operador !== undefined;

const calcular = () =>{
    if(operacaoPendente()){
        const numeroAtual = parseFloat (display.textContent.replace(',','.'));

        novoNumero = true;
          //*fazendo as contas   
        const resultado = eval (`${numeroAnterior}${operador}${numeroAtual}`);
        atualizardisplay(resultado);
        

       /*outra maneira de fazer
        if(operador == '+'){
            atualizardisplay(numeroAnterior + numeroAtual);
        }else if(operador = '-'){
            atualizardisplay(numeroAnterior - numeroAtual);
        } else if(operador = '*'){
            atualizardisplay(numeroAnterior * numeroAtual);
        } else if(operador = '/'){
            atualizardisplay(numeroAnterior / numeroAtual);
        }*/
    }
}

const atualizardisplay = (texto) =>{
    if(novoNumero){
    display.textContent = texto.toLocaleString('BR'); 
    novoNumero = false;
}else{
    display.textContent +=  texto.toLocaleString('BR');//concatenando os numeros
    }
}

const inserirNumero = (evento) => atualizardisplay(evento.target.textContent);
numero.forEach (numero => numero.addEventListener('click', inserirNumero));

//função para os operadores terem ação
const selecionarOperador = (evento) =>{
    if(!novoNumero) { //validando
    calcular();
    novoNumero = true;
    operador =  evento.target.textContent;
    numeroAnterior = parseFloat (display.textContent.replace(',','.'));
    console.log(operador);
    }

}
operadores.forEach (operador=> operador.addEventListener('click', selecionarOperador));

//ativando o sinal de igual 
const ativarIgual = () =>{
    calcular();
    operador = undefined;
}
document.getElementById('igual').addEventListener('click',ativarIgual);

//limpar apenas o numero da tela
const limparDisplay = () => display.textContent = '';
document.getElementById('limparDisplay').addEventListener('click', limparDisplay);

//limpar todo o calculo
const limparCalculo = () => {
    limparDisplay();
    operador = undefined;
    novoNumero = true;
    numeroAnterior = undefined;
}
document.getElementById('limparCalculo').addEventListener('click', limparCalculo);

//botão apagar, apagando de trás pra frente
const removerUltimoNumero = () => display.textContent = display.textContent.slice(0,-1);
document.getElementById('backspace').addEventListener('click', removerUltimoNumero);

//deixando o numero negativo
const inverterSinal = () => {
    novoNumero = true;
    atualizardisplay (display.textContent * -1);

}
document.getElementById('inverter').addEventListener('click', inverterSinal);

const existeDecimal = () => display.textContent.indexOf(',') == -1; //verificando se existe valor antes de inserir a virgula
const existeValor = () => display.textContent.length > 0;
const inserirDecimal = () =>{
    if (existeDecimal()){
    if(existeValor()){
        atualizardisplay(',');
    }else{
        atualizardisplay('0,');
    }
}
}
document.getElementById('decimal').addEventListener('click', inserirDecimal); 
//definindo para usar o teclado
const mapaTeclado = {
    '0'         : 'tecla0',
    '1'         : 'tecla1',
    '2'         : 'tecla2',
    '3'         : 'tecla3',
    '4'         : 'tecla4',
    '5'         : 'tecla5',
    '6'         : 'tecla6',
    '7'         : 'tecla7',
    '8'         : 'tecla8',
    '9'         : 'tecla9',
    '/'         : 'operadorDividir',
    '*'         : 'operadorMultiplicar',
    '-'         : 'operadorSubtrair',
    '+'         : 'operadorAdicionar',
    '='         : 'igual',
    'Enter'     : 'igual',
    'Backspace' : 'backspace',
    'c'         : 'limparDisplay',
    'Escape'    : 'limparCalculo',
    ','         : 'decimal'
    
}
//função para o uso do teclado também
const mapearTeclado = (evento) => {
    const tecla = evento.key;

    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla)  !== -1;
    if(teclaPermitida()) document.getElementById(mapaTeclado[tecla]).click();
}

document.addEventListener('keydown', mapearTeclado);
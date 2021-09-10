//deixando o calcular como variavel global
const calcular = document.getElementById('calcular'); //variavel global, não precisando entrar na função abaixo!


function imc(){ //declarando a função do sistema,onde tudo vai funcionar
    //acessando dados da variavel
    const nome = document.getElementById('nome').value; //definindo a variavel e pegando o valor atribuido pelo usuario
    const altura = document.getElementById('altura').value; //definindo a variavel e pegando o valor atribuido pelo usuario
    const peso = document.getElementById('peso').value; //definindo a variavel e pegando o valor atribuido pelo usuario
    const resultado = document.getElementById('resultado'); //caixa de texto para exibir o resultando, não precisando pegar nenhum valor, apenas mostrando o resultado
    
    if(nome !== '' && altura !== '' && peso !== ''){  //verificando se o usuario colocou o nome
       
        const valorIMC = (peso / (altura * altura)).toFixed(1);  //calculando o imc do usuario usando peso e a altura //tofixed =define quantas casas apos o ponto

        let classificacao = ""; //classificação para saber se está no peso ideal, abaixo ou na média

        //colocando a classificação
        if(valorIMC < 18.5){
            classificacao = 'Abaixo do peso.';
        }else if(valorIMC < 25){
            classificacao = 'Peso Ideal, Parabéns.';
        }else if(valorIMC < 30){
            classificacao ='Levemente acima do peso.';
        }else if(valorIMC < 35){
            classificacao ='Obesidade grau I.';
        }else if(valorIMC < 40){
            classificacao = 'Obesidade grau II.';
        }else {
            classificacao = 'Obesidade grau III. Cuidado!!';
        }


    resultado.textContent = `${nome} seu IMC É ${valorIMC} e você está ${classificacao}`; //imprimindo o resultado na caixa de texto a baixo!

    }else{
        resultado.textContent = "Preencha todos os campos!!!"; //Mensagem de alerta, caso o usuario não preencha todos os campos
    }


}

calcular.addEventListener('click', imc); //verificando se o usuario clicou no botão calcular, para ter uma resposta!
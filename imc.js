const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1); 

       
        let classificacao = '';

        valorIMC < 18.5 
        ? classificacao = 'abaixo do peso' : valorIMC < 25 
        ? classificacao = 'peso ideal' : valorIMC < 30  
        ? classificacao = 'acima do peso' : valorIMC < 35 
        ? classificacao = "muito acima do peso" : valorIMC < 40 
        ? classificacao = "obesidade grave" : classificacao = "obesidade morbida"

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`
    }else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }
   
}
calcular.addEventListener('click', imc)
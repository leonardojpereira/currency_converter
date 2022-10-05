let input = document.querySelector('#inputValue');
let btnConvert = document.querySelector('#convert');
let result = document.querySelector('.result');
let select = document.querySelector('.option-coin');

function convertValue() {
    let dolarToReal =  `<p>O valor convertido foi de <strong>R$${(input.value * 5.17).toFixed(2)}</strong></p>`;
    let realToDolar = `<p>O valor convertido foi de <strong>$${(input.value / 5.17).toFixed(2)}</strong></p>`;
    if (input.value == '') {
        result.textContent = "Preencha o campo para converter.";
    }  else if (select.value == 1) {
        result.innerHTML = dolarToReal;
    } else if (select.value == 2) {
        result.innerHTML = realToDolar;
    } 
    return;
}

function clean() {
    input.value = '';
    result.textContent = '';
}

const axios = require('axios').default;

async function getCotacao() {
    const {data} = await axios.get('http://economia.awesomeapi.com.br/json/last/USD-BRL');
    console.log(data)
}


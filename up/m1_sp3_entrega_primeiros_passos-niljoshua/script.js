/* 1 */
let numero1 = parseInt(prompt('Informe o primeiro numero:'));
let numero2 = parseInt(prompt('Informe o segundo numero:'));

if (numero1 > numero2) {
    let diferenca = numero1-numero2;
    alert(`O maior numero é ${numero1} e a diferença é ${diferenca}`);
} else if (numero1 < numero2) {
    diferenca = numero2-numero1;
    alert(`O maior numero é ${numero2} e a diferença é ${diferenca}`);
} else {
    alert('Os numeros são iguais')
}

/* 2 */ 
let numero1Q2 = parseFloat(prompt('Informe o primeiro numero:'));
let numero2Q2 = parseFloat(prompt('Informe o segundo numero:'));

if (numero1Q2 > numero2Q2) {
    alert(`O numero ${numero1Q2} é maior que numero ${numero2Q2}`);
} else if (numero1Q2 < numero2Q2) {
    alert(`O numero ${numero2Q2} é maior que numero ${numero1Q2}`);
} else {
    alert('Números iguais');
}

/* 3 */
let salario = parseFloat(prompt('Informe seu salario:'));
let prestacao =  parseFloat(prompt('Informe o valor da prestação do emprestimo'));
let verificacao = ((30/100)*salario);
if (verificacao < prestacao ){
    alert(`Empréstimo não concedido`);
} else {
    alert(`Emprestimo concedido`);
}

/* 4 */
let numero1Q4 = parseInt(prompt('Informe um numero:'));
if (numero1Q4 % 3 == 0 && numero1Q4 % 5 == 0) {
    alert('Valor invalido');
} else if (numero1Q4 % 3 == 0) {
    alert('Valor divisivel por 3');
} else if (numero1Q4 % 5 == 0) {
    alert('Valor divisivel por 5');
} else if (numero1Q4 % 2 == 0) {
    alert('É par')
} else if (numero1Q4 % 2 != 0) {
    alert('É impar')
}

/* 5 */
let numero1Q5 = parseInt(prompt('Informe um numero:'));
if (numero1Q5 == 1) {
    alert('Domingo')
} else if (numero1Q5 == 2) {
    alert('Segunda-Feira');
} else if (numero1Q5 == 3) {
    alert('Terça-Feira');
} else if(numero1Q5 == 4) {
    alert('Quarta-Feira');
} else if(numero1Q5 == 5) {
    alert('Quinta-Feira');
} else if(numero1Q5 == 6) {
    alert('Sexta-Feira');
} else if(numero1Q5 == 7) {
    alert('Sabado');
} else if(numero1Q5 >= 8 || numero1Q5 <= 0) {
    alert('Numero invalido');
}

/* 6 */
let salarioQ6 = parseFloat(prompt('Informe o salario:'));
let reajuste = parseFloat(prompt('Informe o reajuste:'));

if (reajuste <= 5) {
    let novoSalario = salarioQ6 + (salarioQ6 * reajuste / 100)
    alert(`O salário do funcionário corrigido é de: ${novoSalario}`);
} else {
    alert('Não haverá reajuste no salario')
}

/* 7 */
let dolar = parseFloat(prompt('Informe o valor do dolar'));
let cotacao = parseFloat(prompt('Informe a cotação'));
let real = dolar*cotacao;

alert(`$${dolar} é equivalente a R$${real}, tendo ${cotacao} como cotação.`)

/* 8 */

let tipoPulverizacao = parseInt(prompt('Informe o tipo de pulverizacao de 1 a 4:'));
let areaPulverizacao = parseFloat(prompt('Informe a area a ser pulverizada:'));
let desconto;
let valorPorTipoPulverizacao = 0;

    if (tipoPulverizacao = 1) {
        valorPorTipoPulverizacao = 50;
    } else if (tipoPulverizacao = 2) {
        valorPorTipoPulverizacao = 100;
    } else if (tipoPulverizacao = 3) {
        valorPorTipoPulverizacao = 150;
    } else if (tipoPulverizacao = 4) {
        valorPorTipoPulverizacao = 250;
    }
    
    let custo = valorPorTipoPulverizacao * areaPulverizacao;

    if(areaPulverizacao > 1000) {
        desconto = custo*0.05;
        custo=custo-desconto;
    } else if (custo > 750) {
        desconto = (custo-750)*0.10;
        custo=custo-desconto;
    }

alert(`O valor a ser pago é de: R$${custo}`);


/* 9 */
let tempoViagem = parseFloat(prompt('Informe o tempo de viagem'));
let velocidade =  parseFloat(prompt('Informe a velocidade'));
let automovelFazPorLitro = 12;
let distancia = tempoViagem * velocidade;
let litrosGastos = distancia/automovelFazPorLitro;

alert(`Seu veículo percorreu ${distancia.toFixed()}km a ${velocidade.toFixed()}km/h em ${tempoViagem.toFixed()}h de viagem e consumiu ${litrosGastos.toFixed(2)} litros de gasolina`);

/* 10 */
let valor = parseFloat(prompt('Informe o valor'));
let taxa = parseFloat(prompt('Informe a taxa'));
let tempo = parseInt(prompt('Informe o tempo'));
let prestacaoQ10 = valor + (valor*(taxa/100)*tempo);

if ( tempo == 0 || isNaN(tempo)) {
    alert('Valor inválido o tempo de atraso deve ser em dias.');
} else {
    alert (`O valor da prestação é R$${prestacaoQ10}`);
}
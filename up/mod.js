
/* cubo */ 

function cubicSquare() {
    let resultadoCubic=[];

    for (let i = 1; i <= 10; i++) {
        let cubic=(i**3);
        resultadoCubic.push(cubic);
    }
    return resultadoCubic;
}
cubicSquare();

---------------------------------------------

/* divisivel por */

function divisiblesFor(limitador,divisor) {
    let resultadoDivisor=[];
    
    for(let i = 1; i <= limitador; i++) {
            if (i % divisor == 0) {
                resultadoDivisor.push(i);
            }
        }
    return resultadoDivisor;
}
divisiblesFor(100,10);

------------------------------------------------

/* retornar a letra que está na posição passada por parâmetro e em maiúsculo. */

    function stringElement(string,numero){
        let letra="";
        
        for(let i=0; i<string.length; i++) {
            if(i==numero) {
                letra=string[i];
            }
        }
        return `Retorna ${letra.toUpperCase()} pois é a letra da posição ${numero}.`
    }
    
    stringElement("palavra",1);

    ---------------------------------------------------

    /* retornar uma nova string com a seção da palavra do início até a posição final indicada por parâmetro.    */

    function stringSlicer(string, numero){
    let formatacao="";
    
        for(let i=0;i<numero;i++){
            if(i<string.length) {
                formatacao += string[i];
            }
        }
    return `Retorna ${formatacao} pois são os ${numero} primeiros caracteres da string`; 
   }

stringSlicer("ALGORÌTMOS",4);


-----------------------------------------------------

/* Retornar nova string contendo letras que encontram partir da posição inicial indicada. */

function strigRest(string,numero){
    let junto="";

    for(let i = numero; i < string.length; i++) {
        junto += string[i];
    }
    return`Retorna ${junto} pois são os caracteres à partir da posição ${numero}`;
}
strigRest("ALGORÌTMOS",2);

-----------------------------------------------------

/* retornar a quantidade de vogais presentes na palavra recebida por parâmetro. */

function countVowels(string){
    let contador = "";

        for(let i=0; i<string.length; i++) {
            if(string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u") {
                contador += string[i];
            } else if (string[i] == "A" || string[i]  == "E" || string[i]  == "I" || string[i]  == "O" || string[i]  == "U"){
                contador += string[i];
        }
    }
    return `Retorna ${contador.length} pois existem ${contador.length} vogais na palavra ${string}`;
}
countVowels("abacaxi");

-----------------------------------------------------

/* percorrer o texto e retornar quantas vezes a letra passada por parâmetro aparece no texto. */

function countTextOccurrences (stringTexto,stringLetra) {
    let contador = 0;
    
    for (let i = 0; i < stringTexto.length; i++) {
      if (stringTexto[i].toLowerCase() == stringLetra.toLowerCase()) {
        contador++;
      }
    }
    return contador; 
}
countTextOccurrences("Abacaxi", "a");

-----------------------------------------------------

/* percorrer o texto e retornar ele ao contrário. */

function textBackwards(string) {
    let letra = "";
    for (let i = string.length - 1; i >= 0; i--) {
        letra += string[i];
    }
    return letra;
}
textBackwards("abacaxi");

-----------------------------------------------------

/* etornar a frase sem os espaços em branco */

function removeBlank(string) {
    let space="";
    for(let i = 0; i < string.length; i++) {
        if(string[i] != " ") {
            space += string[i];
        }
    }
    return space;
}
removeBlank("Não ficará  espaços em branco");

-----------------------------------------------------

/* deverá retornar a frase criptografada */

function encryptText(string) {
    let trocaletra="";

    for(let i = 0; i < string.length; i++) {
        if(string[i].toUpperCase() == 'A'){
            if(string[i] == "A") {
                trocaletra+="X";
            } else{
                trocaletra+="x";
            }
        } else if(string[i].toUpperCase() == 'E'){
            if(string[i] == "E") {
                trocaletra+="Y";
            } else{
                trocaletra+="y";
            }
        } else if(string[i].toUpperCase() == 'I'){
            if(string[i] == "I") {
                trocaletra+="W";
            } else{
                trocaletra+="w";
            }
        } else if(string[i].toUpperCase() == 'O'){
            if(string[i] == "O") {
                trocaletra+="K";
            } else{
                trocaletra+="k";
            }
        } else if(string[i].toUpperCase() == 'U'){
            if(string[i] == "U") {
                trocaletra+="Z";
            } else{
                trocaletra+="z";
            }
        } else {
            trocaletra+=string[i];
        }
    }
    return trocaletra;  
}
encryptText("Uma frase ultra secreta que precisa ser criptografada");

-----------------------------------------------------

/* SnapCrackle - loop de 1 até maxValue */

function snapCrackle(maxValue) {
    let resultado = "";
    for(let i = 1; i <= maxValue; i++) {

    	/* Se o número for ímpar */
        if(i % 2 != 0 && i % 5 != 0) {
            resultado += "Snap, ";
        } /* múltiplo de 5 */
        else if(i % 5 == 0 && i % 2 == 0) {
            resultado += "Crackle, ";
        }/* Se o número for tanto ímpar quanto múltiplo de 5 */ 
        else if(i % 2 != 0 && i % 5 == 0) {
            resultado += "SnapCrackle, ";
        } /*Se número não for nem ímpar e nem múltiplo de 5 */
        else if(i % 2 == 0 && i % 5 != 0) {
            resultado += i + ", ";
        }        
    }
    return resultado;
}
console.log('Por favor, usar snapCrackle(seu numero aqui) de 1 a 12 para obter o resultado');

-----------------------------------------------------

/* Soma */ 

function add (numero1, numero2){
    let soma= numero1+numero2;
    return soma;
}
add(2,4);

-----------------------------------------------------

/* Multiplicação */ 

function multiply (numero1, numero2){
    let resultado= 0;
    for(let i=0; i<numero1; i++){
        resultado= add(numero2, resultado);
    }
    return resultado;
}
multiply(5,10);

-----------------------------------------------------

/* Potência */

function power (x,n){
    resultado = x;
    for(let i = 1; i <n; i++){
        resultado = multiply(resultado, x);
    }
    return resultado;
}
power(2,8);

-----------------------------------------------------

/* Fatorial */


function fatorial(numero){
    let resultado = 1
    for(let i=numero; i>=1; i--){
        resultado = multiply(i, resultado)
    }
    return resultado;
}
fatorial(4);

-----------------------------------------------------

/* deve exibir no console a movimentação do "x" */

function xRunning(x){
    let array = x;
    console.log(array);
    for(let i=1; i<x.length; i++){
        array[i] = 'x';
        array[i-1] = '-';
        console.log(array);
    }
}
xRunning(["x", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]);

-----------------------------------------------------

/* retornar um novo array substituindo as posições das strings por um número */ 

function vowelsCounter(strings) {
  let cont = [];
  for (i=0; i<strings.length; i++) {
    let vogais = 0;
    for (j=0; j<strings[i].length; j++) {
      let vogal = strings[i][j];
      if (vogal === "a" || vogal ==="A" || vogal === "e" || vogal === "E" || vogal === "i" || vogal == "I" || vogal === "o" || vogal === "O" || vogal === "u" || vogal === "U") {
          vogais +=1;
      }
    }
    cont.push(vogais);
  }
  return cont;
}
vowelsCounter(["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"]);

-----------------------------------------------------

/* array com esta frase fatiada em 3 em 3 */ 

function stringTripleGroup(strings) {
    let resultado = [];
    for(let i= 0; i<strings.length; i+=3){
        let conjunto = i+3;
        if(conjunto > strings.length){
            conjunto = strings.length;
        }
        let letras = strings.substring(i, conjunto)
        while(letras.length<3){
            letras+=" ";
        }
        resultado.push(letras);
    }
    return resultado;
}
stringTripleGroup("Os três mosqueteiros");

-----------------------------------------------------

/* retornar uma string com o tipo de pet */

function dominantPet(strings) {
    let contDog = 0;
    let contCat = 0;
    for(let i=0; i<strings.length; i++){
        if(strings[i] == 'dog'||strings[i] == 'DoG'||strings[i] == 'doG'||strings[i] == 'Dog'||strings[i] == 'dOg'||strings[i] == 'DOG'||strings[i] == 'dOG'||strings[i] == 'DOg'){
            contDog ++
        }
        else if(strings[i] == 'cat'||strings[i] == 'Cat'|| strings[i] == 'cAt'||strings[i] == 'caT'||strings[i] == 'CAt'||strings[i] == 'cAT'||strings[i] == 'CAT'){
            contCat ++
        }
    }
        if(contCat > contDog){
            console.log('CAT!')
        }
        else if( contDog > contCat){
            console.log('DOG!')
        }
        else{
            console.log('DRAW!')
        }
    }
dominantPet();

-----------------------------------------------------

/* retornar um novo array somente com os números divisíveis pelo parâmetro divisor */

function divisibleList(array, n) {
    let numeros=[];
  
    for (let i=0; i<array.length; i++) {
      if (array[i] % n==0) {
        numeros.push(array[i]);
      }
    }
    return numeros;
  }
  divisibleList([14, 25, 32, 50, 35, 30], 5);

-----------------------------------------------------

/* retornar um array com a quantidade de posições passadas por parâmetro e cada uma destas casas preenchido com o valor booleano escolhido pelo parâmetro. */

  function trustMeOrnot(boleano, numeros) {
    let count=[];
    for(let i=0; i<numeros; i++){
        if(boleano === false){
            count.push(false);
        }else{
            count.push(true);
        }
    }
    return count;
}
console.log(trustMeOrnot(true, 8));

-----------------------------------------------------

/* retornar um novo array com os valores booleanos de cada posição invertido. */

function changeLampStatus (lista){
    for (let i=0;i<lista.length; i++){
        if(lista[i] === true){
            lista[i] = false;
        }else{
            lista[i] = true;
        }
    }
    return lista;
}
changeLampStatus([false, false, true, false, true, true, true]);

-----------------------------------------------------

/* retornar uma string dizendo qual a média destas notas. O valor da média deve se limitar a duas casas decimais. */

function gradeAverage(lista){
    let media=0;
    let notas=0;
    for(let i=0; i<lista.length; i++){
        notas+=lista[i];
    }
    media = (notas/lista.length).toFixed(2);
    return (`A média das notas é de: ${media}.`);
}
gradeAverage([6.0, 5.5, 6.7, 8.0, 10, 10, 7.1]);

-----------------------------------------------------

/* retornar uma string dizendo qual a porcentagem sobre o total de entregas */

function canvasDeliveriesPercentage(array){
    let soma=0;
    let porcentagemNotas=0;
    for(let i=0; i<array.length; i++){
        soma += array[i];
    }
    porcentagemNotas=(soma*100/100).toFixed(2);
    return (`A porcentagem total de entregas atingido é: ${porcentagemNotas}%. Pois foram distribuidos ${array.length * 10} pontos e o aluno conseguiu apenas ${soma.toFixed(2)}`);
}
canvasDeliveriesPercentage([3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7]);

-----------------------------------------------------

/* novo array com a conversão destas letras */ 

function shouldIGo (letras){
    let conversor=[];
    for (let i=0; i<letras.length; i++){
        if(letras[i]=='R' || letras[i]=='r'){
            letras[i]="Stop";
            conversor.push(letras[i]);
        }else if (letras[i]=='Y' || letras[i]=='y'){
            letras[i] = "Attention!";
            conversor.push(letras[i]);
        }else if(letras[i]=='G' || letras[i]=='g'){
            letras[i] = "Go!";
            conversor.push(letras[i]);
        }
    }
    return conversor;
}
shouldIGo(["R", "r", "G", "y", "G", "Y", "g"]); 

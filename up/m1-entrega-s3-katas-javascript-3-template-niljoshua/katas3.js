/* 1 */
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

/* 2 */
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

/* 3 */ 
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

/* 4 */
function dominantPet(strings) {
    let contDog = 0;
    let contCat = 0;
    for(let i=0; i<strings.length; i++){
        if(strings[i] == 'dog'||strings[i] == 'DoG'||strings[i] == 'doG'||strings[i] == 'Dog'||strings[i] == 'dOg'||strings[i] == 'DOG'||strings[i] == 'dOG'||strings[i] == 'DOg'){
            contDog ++
        }
        else if(strings[i] == 'cat'||strings[i] == 'Cat'||strings[i] == 'cAt'||strings[i] == 'caT'||strings[i] == 'CAt'||strings[i] == 'cAT'||strings[i] == 'CAT'){
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

/* 5 */
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

  /* 6 */
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

/* 7 */ 
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

/* 8 */
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

/* 9 */
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

/* 10 */
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
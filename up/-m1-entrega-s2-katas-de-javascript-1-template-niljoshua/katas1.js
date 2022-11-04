/* 1 */
function cubicSquare() {
    let resultadoCubic=[];

    for (let i = 1; i <= 10; i++) {
        let cubic=(i**3);
        resultadoCubic.push(cubic);
    }
    return resultadoCubic;
}
cubicSquare();

/* 2 */ 
function divisiblesFor(limitador,divisor) {
    let resultadoDivisor=[];
    
    for(let n2 = 1; n2 <= limitador; n2++) {
            if (n2 % divisor == 0) {
                resultadoDivisor.push(n2);
            }
        }
    return resultadoDivisor;
}
divisiblesFor(100,10);

/* 3 */
    function stringElement(string3,n3){
        let letra3="";
        
        for(let i=0; i<string3.length; i++) {
            if(i==n3) {
                letra3=string3[i];
            }
        }
        return `Retorna ${letra3.toUpperCase()} pois é a letra da posição ${n3}.`
    }
    
    stringElement("mel",1);

/* 4 */
function stringSlicer(string4, n4){
    let formatacao="";
    
        for(let i=0;i<n4;i++){
            if(i<string4.length) {
                formatacao += string4[i];
            }
        }
    return `Retorna ${formatacao} pois são os ${n4} primeiros caracteres da string`; 
   }

stringSlicer("ALGORÌTMOS",4);

/* 5 */
function strigRest(string5,n5){
    let junto="";

    for(let i = n5; i < string5.length; i++) {
        junto += string5[i];
    }
    return`Retorna ${junto} pois são os caracteres à partir da posição ${n5}`;
}
strigRest("ALGORÌTMOS",2);   

/* 6 */
function countVowels(string6){
    let contador6 = "";

        for(let i=0; i<string6.length; i++) {
            if(string6[i] == "a" || string6[i] == "e" || string6[i] == "i" || string6[i] == "o" || string6[i] == "u") {
                contador6 += string6[i];
            } else if (string6[i] == "A" || string6[i]  == "E" || string6[i]  == "I" || string6[i]  == "O" || string6[i]  == "U"){
                contador6 += string6[i];
        }
    }
    return `Retorna ${contador6.length} pois existem ${contador6.length} vogais na palavra ${string6}`;
}
countVowels("abacaxi");

/* 7 */
function countTextOccurrences (string7texto,string7letra) {
    let contador7 = 0;
    
    for (let i = 0; i < string7texto.length; i++) {
      if (string7texto[i].toLowerCase() == string7letra.toLowerCase()) {
        contador7++;
      }
    }
    return contador7; 
}
countTextOccurrences("Abacaxi", "a");

/* 8 */
function textBackwards(string8) {
    let letra8 = "";
    for (let i = string8.length - 1; i >= 0; i--) {
        letra8 += string8[i];
    }
    return letra8;
}
textBackwards("abacaxi");

/* 9 */
function removeBlank(string9) {
    let space="";
    for(let i = 0; i < string9.length; i++) {
        if(string9[i] != " ") {
            space += string9[i];
        }
    }
    return space;
}
removeBlank("Não ficará  espaços em branco");

/* 10 */
function encryptText(string10) {
    let trocaletra="";

    for(let i = 0; i < string10.length; i++) {
        if(string10[i].toUpperCase() == 'A'){
            if(string10[i] == "A") {
                trocaletra+="X";
            } else{
                trocaletra+="x";
            }
        } else if(string10[i].toUpperCase() == 'E'){
            if(string10[i] == "E") {
                trocaletra+="Y";
            } else{
                trocaletra+="y";
            }
        } else if(string10[i].toUpperCase() == 'I'){
            if(string10[i] == "I") {
                trocaletra+="W";
            } else{
                trocaletra+="w";
            }
        } else if(string10[i].toUpperCase() == 'O'){
            if(string10[i] == "O") {
                trocaletra+="K";
            } else{
                trocaletra+="k";
            }
        } else if(string10[i].toUpperCase() == 'U'){
            if(string10[i] == "U") {
                trocaletra+="Z";
            } else{
                trocaletra+="z";
            }
        } else {
            trocaletra+=string10[i];
        }
    }
    return trocaletra;  
}
encryptText("Uma frase ultra secreta que precisa ser criptografada");

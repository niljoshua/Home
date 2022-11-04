/* 1 */
function add (num1Q1, num2Q1){
    let soma= num1Q1+num2Q1;
    return soma;
}
add(2,4);

/* 2 */
function multiply (num1Q2, num2Q2){
    let resultadoQ2= 0;
    for(let i=0; i<num1Q2; i++){
        resultadoQ2= add(num2Q2, resultadoQ2);
    }
    return resultadoQ2;
}
multiply(5,10);

/* 3 */
function power (xQ3,nQ3){
    resultadoQ3 = xQ3;
    for(let i = 1; i <nQ3; i++){
        resultadoQ3 = multiply(resultadoQ3, xQ3);
    }
    return resultadoQ3;
}
power(2,8);

/* 4 */
function fatorial(numQ4){
    let resultadoQ4 = 1
    for(let i=numQ4; i>=1; i--){
        resultadoQ4 = multiply(i, resultadoQ4)
    }
    return resultadoQ4;
}
fatorial(4);
//Desenvolva seu código aqui!
function verificicaLista(lista,numero){
    let contador=0;
    let imparPar="";
    for(i=0;i<lista.length;i++){
        if(lista[i]==numero){
            contador++;
        }
    }            
        if(contador%2!=0){
            imparPar="impar!";
        } else {
            imparPar="par!";
        }
    
    return (`A quantidade de vezes que ${numero} aparece na lista são ${contador} e essa quantidade é ${imparPar}`);
} 
verificicaLista([1,2,3,4,5,6,4,5,6,4,5,6], 4);
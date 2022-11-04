function add(n,n2){
    soma=n+n2;
    return soma;
}
add(6,8);

function multiply(n, n2){
    let multiplica=0;
    for(let i=0;i<n2;i++){
        multiplica=add(multiplica,n);
        return multiplica;
    }
}
multiply(6,8);

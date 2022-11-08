/*function tadeu(lista){
    for(i=0;i<lista.length;i++){
        let precoInteiro = parseInt(lista[i].salario);
        if(precoInteiro<1500){
            console.log(lista[i].salario);
        }
    }
}
tadeu(funcionarios); 

function aumento(lista){
    let novoValorSalario=0;
    let funcionariosComAumento="";
    for(let i=0;lista.length;i++){
        let valorSalario = parseInt(lista[i].salario);
        if(lista[i].tipo=="garçom" && valorSalario<=1500){
            let porcentagem=0.10;
            novoValorSalario=valorSalario+(valorSalario*porcentagem);
            funcionariosComAumento=lista[i].nome;
            lista[i].salario=novoValorSalario;
            console.log(`O funcionario ${funcionariosComAumento} tera um aumento de ${porcentagem*100}% e ficara com salario de ${lista[i].salario}`);
        }
    }
}

function mudanceDeProfissao(lista){
    for(let i=0;i<lista.length;i++){
        if(lista[i].tipo=="camareiro"){
            lista[i].tipo="garçom";
        }
    }
}

mudanceDeProfissao(funcionarios);
aumento(funcionarios);    */


function funcionariosEscolhidos(lista){
    let showNome=[];
    for(i=0;i<lista.length;i++){
        if(lista[i].salario >=1500){
            showNome = lista[i].nome;
            console.log(showNome);
        }
    }
}
funcionariosEscolhidos(funcionarios);
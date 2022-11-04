function snapCrackle(maxValue) {
    let resultado = "";
    for(let i = 1; i <= maxValue; i++) {

        if(i % 2 != 0 && i % 5 != 0) {
            resultado += "Snap, ";
        }
        else if(i % 5 == 0 && i % 2 == 0) {
            resultado += "Crackle, ";
        }
        else if(i % 2 != 0 && i % 5 == 0) {
            resultado += "SnapCrackle, ";
        }
        else if(i % 2 == 0 && i % 5 != 0) {
            resultado += i + ", ";
        }        
    }
    return resultado;
}
console.log('Por favor, usar snapCrackle(seu numero aqui) de 1 a 12 para obter o resultado');
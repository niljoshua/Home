Exercício 1
Desenvolva uma função chamada cubicSquare, que não recebe parâmetro e deve retornar o cubo dos números de 1 a 10.

Exemplo:

cubicSquare();
⁠// Retorna 1, 8, 27, ..., 512, 729, 1000

Exercício 2
Desenvolva uma função chamada divisiblesFor, que receberá dois parâmetros:

1.  Number, que é o limitador.

2.  Number, que é o número divisor.

Sua função deverá percorrer de 1 até limitador e retornar apenas os números divisíveis por divisor com resto zero.

Exemplo:

divisibleFor(100, 10);
⁠// Retorna 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 pois todos estes números tem resto zero.

Exercício 3
Desenvolva uma função chamada stringElement, que receberá dois parâmetros:

1. String, a palavra a ser utilizada

2. Number, a posição a ser procurada

e deverá retornar a letra que está na posição passada por parâmetro e em maiúsculo.

Exemplo:

stringElement("algorítmos", 7);
⁠// Retorna M pois esta é a letra da posição 7.

 Exercício 4
Desenvolva uma função chamada stringSlicer, que receberá dois parâmetros:

1. String, a palavra a ser utilizada

2. Number, a posição final (positivos apenas)

Deverá retornar uma nova string com a seção da palavra do início até a posição final indicada por parâmetro.

Exemplo:

stringSlicer("ALGORÌTMOS", 4);
⁠// Retorna ALGO pois são os 4 primeiros caracteres da string.


Exercício 5
Desenvolva uma função chamada stringRest, que receberá dois parâmetros:

1. String, a palavra a ser utilizada

2. Number, a posição inicial

Deverá retornar uma nova string contendo as letras que se encontram a partir da posição inicial indicada.

Exemplo:

stringRest("ALGORÌTMOS", 2);
⁠// Retorna GORÍTMOS pois são os caracteres à partir da posição 2

Exercício 6
Desenvolva uma função chamada countVowels, que receberá um parâmetro:

1. String, que será uma palavra.

Deverá retornar a quantidade de vogais presentes na palavra recebida por parâmetro.

Exemplo:

countVowels("abacaxi")
⁠// Retorna 4, pois existem 4 vogais na palavra "abacaxi".

 
Exercício 7
Desenvolva uma função chamada countTextOccurrences, que receberá dois parâmetros:

1. String, que será um texto.

2. String, que será uma letra.

Sua função deverá percorrer o texto e retornar quantas vezes a letra passada por parâmetro aparece no texto.

Exemplo:

countTextOccurrences("Abacaxi", "a");
⁠// Retorna 3, pois a letra "A" apareceu 3 vezes.

Exercício 8
Desenvolva uma função chamada textBackwards, que receberá um parâmetro:

1. String, que será um texto.

Sua função deverá percorrer o texto e retornar ele ao contrário.

Exemplo:

textBackwars("abacaxi");
⁠// Retorna "ixacaba", pois é o contrário de abacaxi.

Exercício 9
Desenvolva uma função chamada removeBlank, que receberá um parâmetro:

1. String, que será uma frase.

Deverá retornar a frase sem os espaços em branco

Exemplo:

removeBlank("Não ficará   espaços em branco");
⁠// Retorna "Nãoficaráespaçosembranco".


Exercício 10
Desenvolva uma função chamada encryptText, que receberá um parâmetro:

1. String, que será uma frase.

e deverá retornar a frase criptografada, trocando as seguintes letras _(mantenha o maiúsculo e minúsculo original da frase)_:

- "A" por "X";
- "E" por "Y";
- "I" por "W";
- "O" por "K";
- "U" por "Z";

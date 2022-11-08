# Simulado de entrevista técnica
Desenvolva uma função chamada **verificaLista()** que recebe dois parâmetros:
-   O primeiro deve ser uma lista de números.
-   O segundo um número.

Sua função deve contar quantas vezes o **número passado por parâmetro** aparece dentro da **lista passada por parâmetro**. Caso a quantidade de vezes que o **número** aparece dentro da lista seja **impar**, deve retornar a seguinte string:
```javascript
"A quantidade é impar"
```
Caso não seja, deve retornar:
```javascript
"A quantidade é par"
```

Exemplo:
```javascript
const lista = [1,2,3,4,5,6];
verificaLista(lista, 4);
// A função deve retornar: "A quantidade é impar"
// Pois o número 4 aparece, apenas 1 vez;
```
Similarmente,
```javascript
const lista = [1, 1, 2, 3, 4];
verificaLista(lista, 1);
// A função deve retornar: "A quantidade é par"
// Pois o número 1 aparece 2 vezes.
```










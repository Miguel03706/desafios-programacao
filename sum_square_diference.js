/*
The sum of the squares of the first ten natural numbers is,
1² + 2² + ... + 10² = 385
The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)² = 3025
Hence the difference between the sum of the square of the first ten natural numbers and the square of the sum is:
3025-385 = 2640

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

function sumOfSquares(s1) {
    let soma = 0;
    for (i = 1; i <= s1; i++) {
        soma += i ** 2
    }
    return soma;
}

function squareOfTheSum(s1) {
    let soma = 0;

    for (i = 1; i <= s1; i++) {
        soma += i;
    }
    return (soma ** 2);
}

function Difference(d1, d2) {
    return d2 - d1
}



console.log(Difference(sumOfSquares(100), squareOfTheSum(100)))



// Ou

function DifferenceSQ(s1) {
    let somaS = 0
    let soma = 0;

    for (i = 1; i <= s1; i++) {
        soma += i;
        somaS += i ** 2;
    }

    return ((soma ** 2) - somaS);
}

console.log(DifferenceSQ(100))


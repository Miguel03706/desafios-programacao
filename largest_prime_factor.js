function largestPrimeFactor(number) {
    let bigPrime = -1

    while (number % 2 == 0) {
        bigPrime = 2
        number /= 2
    }

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        while (number % i == 0) {
            bigPrime = i
            number /= i
        }
    }

    if (number > 2) {
        maiorPrimo = number;
    }

    return bigPrime
}

console.log(largestPrimeFactor(600851475143))
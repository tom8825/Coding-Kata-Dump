function primeFactors(number) {
  let factors = [];
  for (let i = 2; i <= number / i; i++) {
    while (number % i === 0) {
      number = number / i;
      factors.push(i);
    }
  }
  if (number > 1) {
    factors.push(number);
  }
  return factors;
}

console.log(primeFactors(1010));

// Primes in numbers

function primeFactors(n) {
  let primeNumber = 2;
  const primeNumbers = [];
  while (n > 1) {
    if (isSimple(primeNumber) && n % primeNumber == 0) {
      primeNumbers.push(primeNumber);
      n = n / primeNumber;
    } else {
      primeNumber++;
    }
  }
  let result = "";
  let index = 0;
  while (index < primeNumbers.length) {
    let count = 0;
    for (let i = 0; i < primeNumbers.length; i++) {
      if (primeNumbers[index] == primeNumbers[i]) {
        count++;
      }
    }
    if (count > 1) {
      result += `(${primeNumbers[index]}**${count})`;
      index += count;
    } else {
      result += `(${primeNumbers[index]})`;
      index++;
    }
  }
  return result;
  function isSimple(num) {
    if (num === 1 || num === 0) {
      return false;
    } else {
      for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  }
}

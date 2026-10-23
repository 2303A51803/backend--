function isPrime(number) {
  if (number < 2 || !Number.isInteger(number)) {
    return false;
  }

  for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
}

module.exports = { isPrime };
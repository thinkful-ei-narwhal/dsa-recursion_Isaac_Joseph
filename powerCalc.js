function powerCalculator(base, exp = 2) {
  if (exp <= 0) return 'exponent should be >= 0'
  if (exp === 1) return base

  return base * powerCalculator(base, exp - 1)
}

console.log(powerCalculator(5, 3))
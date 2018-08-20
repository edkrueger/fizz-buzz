function fizzbuzzIterative(n) {
  let outputString = ""
  for (let i = 1; i < n; i++) {
    if (i === 1) {
      outputString += i
    } else if (i % (3*5) === 0) {
      outputString += ", FizzBuzz"
    } else if (i % 3 === 0) {
      outputString += ", Fizz"
    } else if (i % 5 === 0) {
      outputString += ", Buzz"
    } else {
      outputString += ", " + i
    }
  }
  return outputString
}
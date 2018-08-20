function fizzbuzzFunctional(n)  {
  const fizz = (i) => (i % 3 === 0) ? "Fizz" : ""
  const buzz = (i) => (i % 5 === 0) ? "Buzz" : ""
  const fizzbuzz = (i) => fizz(i) + buzz(i)
  const iOrFizzBuzz = (s, i) => s == "" ? i : s
  
  return [...Array(n - 1).keys()].map((d) => {
    const i = d + 1
    return iOrFizzBuzz(fizzbuzz(i), i)
  }).join(", ")
}
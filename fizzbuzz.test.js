const fizzbuzz = require('./fizzbuzz');

test('returns "Fizz" for numbers divisible by 3', () => {
  expect(fizzbuzz(3)).toBe("Fizz");
});

test('returns "Buzz" for numbers divisible by 5', () => {
  expect(fizzbuzz(5)).toBe("Buzz");
});

test('returns "FizzBuzz" for numbers divisible by both 3 and 5', () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz");
});

test('returns the number if not divisible by 3 or 5', () => {
  expect(fizzbuzz(2)).toBe(2);
});

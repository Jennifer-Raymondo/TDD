// Test-Driven Development (TDD) Guide
// 1. What Is TDD?

// TDD (Test-Driven Development) is a software development approach where you write tests before writing the actual code.

// Benefits of TDD:

// ✅ More reliable code – catches bugs early

// ✅ Cleaner, modular design – encourages better structure

// ✅ Avoids regressions – tests ensure code continues to work

// ✅ Documentation – tests describe system behavior

// 2. The TDD Cycle: Red → Green → Refactor
// Step	Description	Goal
// 1️⃣ Red	Write a test for a feature before writing the code. The test should fail because the feature doesn’t exist yet.	Ensure the test fails (RED = broken).
// 2️⃣ Green	Write just enough code to make the test pass.	Make the test pass (GREEN = success).
// 3️⃣ Refactor	Improve your code’s structure without changing behavior.	Clean, readable, efficient code.

// Repeat this cycle for every new feature or function.

// 3. Why Use TDD?
// Benefit	Explanation
// ✅ Fewer bugs	Problems are found early in development.
// ✅ Safer refactoring	You can restructure code confidently without breaking functionality.
// ✅ Clear design	Forces you to define what the code should do before writing it.
// ✅ Documentation	Tests serve as executable documentation of system behavior.
// 4. How to Write Tests First

// Think about the behavior or feature you want to implement.

// Write a test that defines the expected behavior.

// Run the test to ensure it fails (Red).

// Implement the minimal code to pass the test (Green).

// Refactor and improve the code structure without changing behavior.





// TDD in JavaScript

// We’ll use a simple scenario: writing a function that returns "Fizz", "Buzz", or "FizzBuzz" based on a number.

// We’ll assume we’re using Jest, a common testing library for JavaScript.



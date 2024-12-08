function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // Add two numbers
}

console.log(foo(5, 3)); // Output: 8
console.log(foo(null, 3)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(null, null)); // Output: null
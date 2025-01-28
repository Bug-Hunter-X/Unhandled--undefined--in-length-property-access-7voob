function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  }
  return x.length; // Access 'length' property
}

console.log(foo(null)); // Output: 0
console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(undefined)); // Throws TypeError
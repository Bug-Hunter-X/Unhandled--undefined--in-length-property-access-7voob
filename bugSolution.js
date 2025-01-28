function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null and undefined cases
  }
  return x.length; // Access 'length' property
}

console.log(foo(null)); // Output: 0
console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(undefined)); // Output: 0
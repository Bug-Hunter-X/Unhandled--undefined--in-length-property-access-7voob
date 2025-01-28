# Unhandled 'undefined' in length property access

This repository demonstrates a common JavaScript error: attempting to access the 'length' property of an undefined value.  The bug.js file contains the erroneous code.  The bugSolution.js file provides a corrected version that handles both null and undefined cases gracefully.

## Bug Description

The original code fails when the input is 'undefined'. The program throws a TypeError because it tries to access the length property of undefined, which is not an object and therefore doesn't have the length property.

## Solution

The solution adds an explicit check for 'undefined' using the strict equality operator (===) before accessing the length property. This ensures that the code handles both null and undefined inputs without throwing an error.
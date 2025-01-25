# Type Error in TypeScript
This example demonstrates a common type error in TypeScript where an array of strings is passed to a function expecting a single string.

## Bug
The `greeter` function expects a string as input, but an array of strings is passed to it.

## Solution
The solution involves either modifying the `greeter` function to accept an array of strings or modifying the input to be a single string.  This example shows the latter.
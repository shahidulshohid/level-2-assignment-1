<!-- 3. Explain the difference between any, unknown, and never types in TypeScript.

   Any: In typescript, any is a special type that allows a variable to hold any kind of value without any type checking. it disables the type system for the variable, making it behave like plain javascript.

Key Points:
any turns off type safety.
Useful during quick prototyping or migrating JS code to TS.
Should be used sparingly because it removes TypeScript’s benefits.

Unknown: In typescript, unknown is a type that represent a value whose type is not known at the time of writing the code. It.s similar to any in that it can hold any value, but you must perform type checking before using it.

Key Points:
unknown is safer than any.
Forces you to check the type before using the value.
Useful for handling data from external sources like APIs.

Never: In typescript, never is a special type that represent a value that never occurs. It is used to indicate that a function never returns or a case is logically impossible.

Key Points:
never means no value is ever possible.
Functions that throw errors or never finish
Exhaustive type -->


# 🔎 TypeScript Types: `any`, `unknown`, and `never`

This document explains the key differences between the special types `any`, `unknown`, and `never` in TypeScript.

---

## ✅ `any`

The `any` type allows a variable to hold **any kind of value** without any type checking. It disables the type system for that variable and makes it behave like plain JavaScript.

### 🔸 Key Points:
- Turns off type safety.
- Useful during quick prototyping or while migrating JavaScript code to TypeScript.
- Should be used sparingly as it removes the benefits of TypeScript.

### 🔹 Example:

```ts
let data: any = 42;
data = "Hello";
data = true;

console.log(data.toUpperCase()); // No error, but might fail at runtime


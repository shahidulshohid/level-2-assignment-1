3. Explain the difference between any, unknown, and never types in TypeScript.

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
Exhaustive type

4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Enum: Enums are a feature in TypeScript that allows you to define a set of named constants. They help make code more readable, organized, and type-safe, especially when dealing with a fixed set of related values like roles, directions, or status codes.

Example of Numeric Enum:
enum Direction {
Up, // 0
Down, // 1
Left, // 2
Right // 3
}

let move = Direction.Left;
console.log(move);

Example of String Enum:
enum UserRole {
Admin = "ADMIN",
Editor = "EDITOR",
Viewer = "VIEWER"
}

let role = UserRole.Admin;
console.log(role);

// Problem 1:

function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLocaleLowerCase();
  } else {
    return input.toUpperCase();
  }
}

console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));

//problem 2

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

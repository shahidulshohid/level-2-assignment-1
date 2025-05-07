// Problem 1:
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLocaleLowerCase();
  } else {
    return input.toUpperCase();
  }
}

// console.log(formatString("Hello"));
// console.log(formatString("Hello", true));
// console.log(formatString("Hello", false));

//problem 2
function filterByRating (items: { title: string; rating: number }[]) : { title: string; rating: number }[] {
let result = items.filter((item => item.rating >= 4 ))
return result
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

// console.log(filterByRating(books))

//Problem 3
function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result = arrays.reduce((acc, curr) => [...acc, ...curr])
    return result
}

console.log(concatenateArrays(["a", "b"], ["c"])) ;
console.log(concatenateArrays([1, 2], [3, 4], [5]));








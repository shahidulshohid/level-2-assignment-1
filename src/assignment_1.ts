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
    const result = arrays.reduce((acc, curr) => [...acc, ...curr], [])
    return result
}

// console.log(concatenateArrays(["a", "b"], ["c"])) ;
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

// Problem 4
class Vehicle {
  private  Make: string;
  private  Year: number;

    constructor(Make: string, Year: number) {
        this.Make = Make;
        this.Year = Year;
    }
    getInfo () : string {
        return `"Make: ${this.Make}, Year: ${this.Year}"`;
    }
}

class Car extends Vehicle {
    private Model: string;
    constructor(Make: string, Year: number, Model: string){
        super(Make, Year)
        this.Model = Model;
    }
    getModel () : string {
        return `"Model: ${this.Model}"`
    }
}

const myCar = new Car("Toyota", 2020, "Corolla" )
// console.log(myCar.getInfo())
// console.log(myCar.getModel())

//Problem 5
function processValue(value: string | number): number {
    if(typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}

// console.log(processValue("hello")); 
// console.log(processValue(10));    

// Problem 6
interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if(products.length === 0) {
        return null
    }
    else {
        const heightPrice = products.reduce((max, curr) =>
            curr.price > max.price ? curr : max
        ) 
        return heightPrice
    }
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
  console.log(getMostExpensiveProduct(products));  
  // Output: { name: "Bag", price: 50 }








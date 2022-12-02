# Javascript Refresher

## let & const
- <u>let</u>: "the new var." Use it to create a variable that truly is variable
- <u>const</u>: constant values. Only assign once and never change
___
## Arrow Functions
````
function myFnc() {
    ...
}
````
````
const myFnc = () => {
    ...
}
````

<u>Example</u>:
````
const printMyName = (name) => {
    console.log(name);
}

printMyName('Frank');
// Output: "Frank"
````
If you are only passing one argument, ex. name, you can remove the parenthesis.

<u>Example 2</u>:
````
const multiply = number => number * 2;
````
The curly braces can also be removed if all the function does is have a return line.
____
## Exports & Imports (Modules)
````
// person.js

const person = {
    name: 'Frank'
}

export default person
````
````
// utility.js

export const clean = () => {...}

export const baseData = 10;
````
````
// app.js

// Imports default and ONLY export of the file Name in the receiving file is up to you
import person from './person.js'
import prs from './person.js'

// Use curly braces to explicitly target named exports from the file
import { baseData } from './utility.js'
import { clean } from './utility.js'
````

<b>Take Aways</b>:
 * <u>default export</u>: You choose the name
 * <u>named export</u>: Name is defined by export
    * <u>bundled export</u>: Import everything by using the * character and assigning an alias
    ````
    // renaming named import
    import { smth as Smth } from './utility.js'

    // bundled export
    import * as bundled from './utility.js'
    ````
___
## Classes
````
class Person {
    name = 'Frank'      // Property
    call = () => {...}  // Method
}
````
Usage Example:
````
const myPerson = new Person()
    myPerson.call()

console.log(myPerson.name)
````
Classes also support inheritance
````
class Person extends Master
````

<u>Example</u>:
````
class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = 'Frank';
        this.gender = 'dog';
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName(); // Output: "Frank"
person.printGender(); // Output: "dog"
````
``super()`` Executes the parent constructor, Human, to allow access to gender property. Required when extending a parent class.

___
## Classes, Properties & Methods
<u>Recap</u>:
* Properties are like "variables attached to classes / objects"
* Methods are like "functions attached to classes / objects"

Updates using ES7 (next-gen javascript):
````
class Human {
    this.gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Frank';
    gender = 'dog';

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName(); // Output: "Frank"
person.printGender(); // Output: "dog"
````

___
## Spread & Rest Operators
````
...
````

<u>Spread</u>: Used to split up array elements OR object properties
````
const newArray = [...oldArray, 1, 2]
const newObject = {...oldObject, newProp: 5}
````
<u>Rest</u>: Used to merge a list of function arguments into an array
````
function sortArgs(..args) {
    return args.sort()
}
````

<u>Example</u>:
````
// Spread Operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers); // Output: [1, 2, 3, 4]

const person = {
    name: 'Frank'
};

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson); 
// Output: 
// [object Object] {
//     age: 28,
//     name: "Frank"
// }

// Rest Operator
const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3)); // Output: [1]
````

___
## Destructuring
Easily extract array elements or object properties and store them in variables

<u>Array Destructuring</u>:
````
[a, b] = ['Hello', 'Frank']
console.log(a) // Hello
console.log(b) // Frank
````

<u>Object Destructuring</u>:
````
{name} = {name: 'Frank', age: 22}
console.log(name) // Frank
console.log(age) // undefined
````

Example:
````
const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3)
````

___
## Reference & Primitive Types
* <u>Primitve Types</u>: Are copied in memory
* <u>Reference Types</u>: Are referencing the same object in memory.

````
// Primitive Type
const number = 1;
const num2 = number;

console.log(num2); // 1

// Reference Type
const person = {
    name: 'Frank'
}; 

const secondPerson = person;
person.name = 'Bill'

console.log(secondPerson); // Bill
````

___
## Array Functions
````
const numbers = [1, 2, 3];

// Executed on each element in array
const doubleNumArray = numbers.map((num) => {
    return num * 2;
});

console.log(numbers);           // [1, 2, 3]
console.log(doubleNumArray);    // [2, 4, 6]
````
import multiply, { add, multiplyAndLogUpper, subtract, } from "./mathModule.js";
import { toUpperCase , toLowerCase } from "./stringModule.js";
import { findMax, reverseArray } from "./arrayModule.js";
import { addAndLogUpper } from "./mathModule.js";

console.log('add 8 + 7 = ' , add(8, 7));

console.log('minus 9 - 5 = ', subtract(9, 5));



console.log(toLowerCase("HELLO THIS IS SUPPOSED TO BE CAPS"));
console.log(toUpperCase("Hello this is all in small letters"));

console.log('multiply 4 * 5 = ', multiply(4,5) );
 

let array1= [100, 4, 6, 500, 760, 88, 0];
console.log('find max between 100, 4, 6, 500, 760, 88, 0' , findMax(array1));


let array2 = [5, 4, 3, 2, 1];
console.log('reverse of 5 4 3 2 1', reverseArray(array2));

addAndLogUpper(5, 10);


let array3= [1, 2, 3, 4, 5]

multiplyAndLogUpper(array3);
import { toUpperCase } from "./stringModule.js";
import { findMax } from "./arrayModule.js";

export function add(a, b) {
    let sum = a+b;
    return sum;
    ;
}

export function subtract(a, b) {
    let minus = a - b;
    return minus;
    ;
}

export default function multiply(a, b) {
    let times = a * b;
    return times;
    
}

export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));  // Convert result to string and log the uppercase version
}

export function multiplyAndLogUpper(arr){
    let x= findMax(arr) * 3;
    console.log(toUpperCase(x.toString()));
    
}
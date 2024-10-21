import { isEven } from './condicionales';
import { add } from './buclesFor';

let array1 = ["Casa", "Coche", "Ciudad", "Cesta"];
let array2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let array3 = ["Venezuela", "Veneno", "Voltaje"];

let sum1 = add(array1);
console.log(isEven(sum1));

let sum2 = add(array2);
console.log(isEven(sum2));

let sum3 = add(array3);
console.log(isEven(sum3));


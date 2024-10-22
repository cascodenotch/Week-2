import { Triangle } from "./triangle";
import { Point } from "./points";

let punto1 = new Point (2,2);
let punto2 = new Point (4,6);
let punto3 = new Point (8,10);
let myTriangle = new Triangle (punto1,punto2,punto3);

console.log(myTriangle.calculateLengthSides());
const myLib = require ('./person');

let persona1 = new myLib.Person ("Paula",32,"Programador", 50,1.65, 1992,["Leer", "Viajar", "Cocinar"]);
console.log(persona1.metodoIMC());
console.log (persona1.metodoEdad());
console.log(persona1.metodoPrintAll());
console.log (persona1.metodoPrintHobbies());
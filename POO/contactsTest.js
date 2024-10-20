const myLib = require ('./contacts');

let contactos = new myLib.Contacts ();
console.log (contactos.addPersons(persona1));
console.log (contactos.printPersons());
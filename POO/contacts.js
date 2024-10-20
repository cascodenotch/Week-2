const myLib = require ('./person');

class Contacts {
constructor () {
this.array = [];
}

addPersons(a) {

this.array.push(a); 

}

printPersons(){
    console.log (this.array);  
}
}

let contactos = new Contacts ();
let persona1 = new myLib.Person ("Eugenio",32,"Programador", 50,1.65, 1992,["Leer", "Viajar", "Cocinar"]);
console.log (contactos.addPersons(persona1));
console.log (contactos.printPersons());

module.exports = {Contacts}; 
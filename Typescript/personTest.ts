import { Person } from './person';

const persona = new Person("Jose", 32, "Calle Calatrava 10");
persona.printName();
console.log(persona.yearOfBirth(2024)); 
persona.setAddress("Calle del Mediodia"); 
console.log(persona.getAddress()); 
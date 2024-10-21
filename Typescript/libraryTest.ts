import { Library } from './library';
import { Book } from './book';

let libro1 = new Book ("Romeo y Julieta", 200, "H7762", "Shakespeare", "Penguin");
let libro2 = new Book ("El rey Lear", 200, "H7762", "Shakespeare", "Penguin");  
let libreria = new Library ([libro1,libro2],"Tirso de Molina","Juan");

console.log(libreria.toString());
console.log(libreria.getNumberOfBooks());
console.log (libreria.findByAuthor("Shakespeare"));
import { Book } from './book';

let book = new Book ("Hamlet", 200, "H7762", "Shakespeare", "Penguin");
   
book.setTitle ("Nuevo titulo");
console.log(book.getTitle());

book.setPages (100);
console.log(book.getPages());

book.setISBN ("Nuevo ISBN");
console.log(book.getISBN());

book.setAuthor ("Nuevo autor");
console.log(book.getAuthor());

book.setEditorial ("Nueva editorial");
console.log(book.getEditorial());

console.log(book.toString());
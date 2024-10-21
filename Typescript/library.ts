import { Book } from './book';

export class Library {

 private books:Book[];
 private address: string;
 private manager: string;

 constructor (books:Book[],address: string, manager: string){
 this.books = books; 
 this.address = address; 
 this.manager = manager; 

 }

setBooks (books:Book[]):void {
this.books = books; 
}

getBooks ():Book[]{
return this.books;
}

setAddress (address:string):void{
this.address = address;
}

getAddress ():string{
return this.address;
}

setManager (manager:string):void{
this.manager = manager; 
}

getManager ():string{
return this.manager;
}

toString():string{
let resultado = "";
for (let i=0; i<this.books.length; i++){
resultado += "Book" +(i+1) + ": " + "\n" + this.books[i].toString
}
return resultado;
}

getNumberOfBooks ():number{
return this.books.length;
}

findByAuthor (author:string):Book[]{
    let coinciden = [];
    for (let i=0; i<this.books.length; i++){
        if (author == this.books[i].getAuthor()){
            coinciden.push (this.books[i]);
        } 
    }
    return coinciden;
}

}



 

class Book {

    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;
    
    constructor (title: string, nPages: number, isbn: string, author: string, editorial: string) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author; 
        this.editorial = editorial; 
    
    }
    
    public setTitle (title: string) :void {
    this.title = title; 
    }
    
    public getTitle () :string {
       return this.title;
        }

    public setPages (nPages: number) :void {
        this.nPages = nPages; 
        }
    
    public getPages () :number {
        return this.nPages; 
         }

    public setISBN (isbn: string) :void {
        this.isbn = isbn; 
         }
            
    public getISBN () :string {
        return this.isbn;
            }

    public setAuthor (author:string):void{
        this.author = author; 
    }

    public getAuthor ():string{
        return this.author;
    }

    public setEditorial (editorial:string):void{
        this.editorial= editorial; 
    }

    public getEditorial ():string{
        return this.editorial;
    }

    public toString ():string{
         
        return "Title: " + this.title + 
           "\nPages: " + this.nPages + 
           "\nISBN: " + this.isbn +
           "\nAuthor: " + this.author +
           "\nEditorial: " + this.editorial;
    }

    }
    
    export {Book};
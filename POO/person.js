class Person {

    constructor (nombre, edad, ocupación,peso,altura,yearOfBirth,hobbies){
        this.nombre= nombre; 
        this.edad = edad;
        this.ocupación = ocupación; 
        this.peso = peso;
        this.altura = altura; 
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies; 
    }

    metodoIMC (){
    let IMC = this.peso/ (this.altura**2);
    return IMC; 
    }

    metodoEdad (){
    let edad = 2024 - this.yearOfBirth;
    return edad;
    }

    metodoPrintAll (){
    console.log("Nombre - " + this.nombre);
    console.log("Edad - " + this.edad);
    console.log("Ocupación - " + this.ocupación);
    console.log("Peso - " + this.peso);
    console.log("Altura - " + this.altura);
    console.log ("Año nacimiento - " + this.yearOfBirth);
    }

    metodoPrintHobbies (){
    console.log (this.hobbies);
    }
}

let persona1 = new Person ("Catalina",32,"Programador", 50,1.65, 1992,["Leer", "Viajar", "Cocinar"]);
console.log(persona1.metodoIMC());
console.log (persona1.metodoEdad());
console.log(persona1.metodoPrintAll());
console.log (persona1.metodoPrintHobbies());

module.exports = {Person}; 
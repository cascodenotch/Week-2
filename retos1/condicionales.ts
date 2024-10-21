//RETOS 1 Y 2

function zodiac(day:number, month:number):string{
    let signoZodiacal = "";

if ((month==12 && day>=22) ||(month==1 && day<=19)){
   signoZodiacal = "Capricornio";
    }
if ((month==1 && day>=20) || (month==2 && day<=18)){
signoZodiacal = "Acuario";
    }
if ((month==2 && day>=19) || (month==3 && day<=20)){
    signoZodiacal = "Piscis";
    }
if ((month==3 && day>=21) || (month==4 && day<=19)){
        signoZodiacal = "Aries";
    }
if ((month==4 && day>=20 || month==5 && day<=20)){
        signoZodiacal = "Tauro";
    }
if ((month==5 && day>=21 || month==6 && day<=20)){
        signoZodiacal = "Géminis";
    }
if ((month==6 && day>=21 || month==7 && day<=22)){
        signoZodiacal = "Cáncer";
    }
if ((month==7 && day>=23 || month==8 && day<=22)){
        signoZodiacal = "Leo";
    }
if ((month==8 && day>=23 || month==9 && day<=22)){
        signoZodiacal = "Virgo";
    }
if ((month==9 && day>=23 || month==10 && day<=22)){
        signoZodiacal = "Libra";
    }
if ((month==10 && day>=23) || (month==11 && day<=21)){
        signoZodiacal = "Escorpio";
    }
if ((month==11 && day>=22) || (month==12 && day<=21)){
        signoZodiacal = "Sagitario";
    }
return signoZodiacal;
} 

console.log(zodiac(20,8));

// RETO 4

function isEven(num:number){

if ((num%2) == 0){
    console.log ("El numero es par");
}
else console.log ("El numero es impar");

}

isEven (5);
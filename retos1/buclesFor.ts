// RETO 3

function myRevert(myArr:string[]):string[]{
let arrayRevertido = [];
for (let i = myArr.length-1; i >= 0; i--){
arrayRevertido.push(myArr[i]);
}
return arrayRevertido;
}

//RETO 5

export function add(myWords:string[]):number{
let sumaCaracteres = 0; 
for (let i=0; i<myWords.length;i++){
sumaCaracteres = sumaCaracteres + myWords[i].length;
}
return sumaCaracteres;
}

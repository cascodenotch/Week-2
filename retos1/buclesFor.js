// RETO 3
function myRevert(myArr) {
    var arrayRevertido = [];
    for (var i = myArr.length - 1; i > 0; i--) {
        arrayRevertido.push(myArr[i]);
    }
    return arrayRevertido;
}
//RETO 5
function add(myWords) {
    var sumaCaracteres = 0;
    for (var i = 0; i < myWords.length; i++) {
        sumaCaracteres = sumaCaracteres + myWords[i].length;
    }
    return sumaCaracteres;
}
var array1 = ["a", "b", "c"];
console.log(add(array1));
console.log(myRevert(array1));

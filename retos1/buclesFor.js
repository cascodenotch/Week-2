"use strict";
// RETO 3
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
function myRevert(myArr) {
    var arrayRevertido = [];
    for (var i = myArr.length - 1; i >= 0; i--) {
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

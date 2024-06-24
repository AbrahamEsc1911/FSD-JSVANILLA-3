////VANILLA III
//// Reto 1
var multiplos = function (num1, num2) {
    return num1 % num2 === 0 ? true : false;
};
//// Reto 2
var greatest = function (num1, num2) {
    if (num1 > num2) {
        return "".concat(num1, " es mayor");
    }
    else if (num1 === num2) {
        return "Son iguales";
    }
    return "".concat(num2, " es mayor");
};
//// Reto 3
var ifNum = function (num) {
    if (num > 0) {
        return "Es Positivo";
    }
    else if (num === 0) {
        return "Es cero";
    }
    return "Es negativo";
};
//// Reto 4
var strLength = function (str) {
    return str.length === 5 ? "tiene 5 caracteres" : "tiene ".concat(str.length, " caracteres");
};
//// Reto 5
var promNum = function (num1, num2, num3) {
    return (num1 + num2 + num3) / 3 > 5 ? "El promedio es mayor a 5" : "El promedio es ".concat(((num1 + num2 + num3) / 3).toFixed(2));
};
//// Reto 6
var strLowerCase = function (str) {
    var strToLower = str.toString().toLowerCase();
    return str === strToLower ? true : false;
};
var strToLower = function (str) {
    var strCheck = [];
    var arrStr = Array.from(str);
    if (str === str.toString().toLowerCase()) {
        return "En el string ".concat(str, " todas son minusculas");
    }
    for (var i = 0; i < arrStr.length; i++) {
        if (arrStr[i] !== arrStr[i].toLowerCase()) {
            strCheck.push(arrStr[i]);
        }
    }
    return "El string ".concat(str, " contiene algunas mayusculas: ").concat(strCheck.join(","));
};
//// Reto 7
var numRamdon = function () {
    var numRam = Math.round(Math.random() * (20 - 1) + 1);
    return numRam % 2 === 0 ? "El ".concat(numRam, " es par") : "El ".concat(numRam, " no es par");
};
//// Reto 8
var grades = function (num1, num2, num3) {
    return (num1 + num2 + num3) / 3 > 5 ? "Ha Aprovado con una calificacion promedio de".concat(((num1 + num2 + num3) / 3).toFixed(2)) : "No ha Aprovado, la calificaci\u00F3n promedio es ".concat(((num1 + num2 + num3) / 3).toFixed(2));
};
module.exports = {
    multiplos: multiplos,
    greatest: greatest,
    ifNum: ifNum,
    strLength: strLength,
    promNum: promNum,
    strLowerCase: strLowerCase,
    strToLower: strToLower,
    numRamdon: numRamdon,
    grades: grades,
};

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
module.exports = {
    multiplos: multiplos,
    greatest: greatest,
    ifNum: ifNum,
    strLength: strLength,
    promNum: promNum,
};

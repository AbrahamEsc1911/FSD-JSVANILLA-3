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
module.exports = {
    multiplos: multiplos,
    greatest: greatest,
};

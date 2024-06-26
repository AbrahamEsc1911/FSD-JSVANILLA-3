"use strict";
////VANILLA III - CONDICIONALES
Object.defineProperty(exports, "__esModule", { value: true });
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
    return (num1 + num2 + num3) / 3 > 5 ? "Ha Aprovado con una calificacion promedio de ".concat(((num1 + num2 + num3) / 3).toFixed(2)) : "No ha Aprovado, la calificaci\u00F3n promedio es ".concat(((num1 + num2 + num3) / 3).toFixed(2));
};
//// Reto 9
var autosDes = function (str) {
    var strToLower = str.toString().toLowerCase();
    var promo;
    switch (strToLower) {
        case "ford fiesta":
            promo = "El descuento es del 5%";
            break;
        case "ford focus":
            promo = "El descuento es del 10%";
            break;
        default:
            promo = "Este vehiculo no tiene descuento";
            break;
    }
    return promo;
};
//// Reto 10
var dayMonts = function (num) {
    var nameMont;
    switch (num) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            nameMont = "Este mes tiene 31 días";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            nameMont = "Este mes tiene 30 días";
            break;
        case 2:
            nameMont = "Este mes tiene 28 dias, si no es bisiesto.";
            break;
        default:
            nameMont = "Indica un valor valido entre 1 y 12";
            break;
    }
    return nameMont;
};
//// Reto 11
var ruedaSize = function (diametro) {
    if (diametro > 1.4) {
        return "La rueda es para un vehiculo grande";
    }
    else if (diametro <= 1.4 && diametro > 0.8) {
        return "La rueda es para un vehiculo mediano";
    }
    return "La rueda es para un vechiculo peque\u00F1o";
};
var ruedaDiam = function (diametro, grosor) {
    if ((diametro > 1.4 && grosor < 0.4) || diametro <= 1.4 && diametro > 0.8 && grosor < 0.25) {
        return "El grosor para esta rueda es inferior al recomendado";
    }
    return "El grosor para esta rueda est\u00E1 correcto";
};
//// Reto 12
var priceAuto = function (vehiculo, km) {
    var vehiculoTLC = vehiculo.toString().toLowerCase();
    var prCoche = 0.10;
    var prMoto = 0.20;
    var prAutobus = 0.05;
    var aPagar;
    if (km < 0) {
        return aPagar = "La cantidad en kms no puede ser menor a 0";
    }
    switch (vehiculoTLC) {
        case "coche":
            aPagar = "Vehiculo: ".concat(vehiculo, ", El total a pagar es ").concat(km * prCoche);
            break;
        case "moto":
            aPagar = "Vehiculo: ".concat(vehiculo, ", El total a pagar es ").concat(km * prMoto);
            break;
        case "autobus":
            aPagar = "Vehiculo: ".concat(vehiculo, ", El total a pagar es ").concat(km * prAutobus);
            break;
        default:
            aPagar = "pro favor ingresa un vehiculo valido, o un km valido";
            break;
    }
    return aPagar;
};
////VANILLA III - BUCLES
//// Reto 1
var bucleNums = function (num) {
    var arrNum = [];
    if (!Number.isInteger(num) || num < 1) {
        return "numero no v\u00E1lido";
    }
    for (var i = 0; i <= num; i++) {
        arrNum.push(i);
    }
    return "".concat(arrNum.join(","));
};
//// Reto 2
var countNum = function (numN, numM) {
    var arrNum = [];
    for (var i = 0; i < numM; i += numN) {
        arrNum.push(i);
    }
    return arrNum;
};
//// Reto 3
var numPar = function (num) {
    var arrNums = [];
    if (num <= 0) {
        return "Numero negativo";
    }
    for (var i = 0; i < num; i++) {
        i % 2 === 0 ? arrNums.push(i) : null;
    }
    return "".concat(arrNums);
};
//// Reto 4
var tabMultiplicar = function (num) {
    var arrNumMult = [];
    for (var i = 1; i <= 12; i++) {
        arrNumMult.push("".concat(num, " x ").concat(i, " = ").concat(i * num));
    }
    return arrNumMult;
};
//// Reto 5
var treeSimbol = function (simbol) {
    var simbols = "";
    for (var i = 0; i < 10; i++) {
        console.log(simbols += simbol);
    }
    return "||";
};
//// Reto 6
var sumIntPos = function (num) {
    var sumAll = 0;
    var numU = Math.round(num);
    if (num <= 0) {
        return "El numero no puede ser 0 o menor.";
    }
    for (var i = 0; i < numU; i++) {
        sumAll += i;
    }
    return "".concat(sumAll);
};
///// Reto 7
var esPrime = function (num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
var primeNums = function (num) {
    var numArr = [];
    for (var i = 0; i <= num; i++) {
        if (esPrime(i)) {
            numArr.push(i);
        }
    }
    return numArr;
};
//// Reto 8
var countdown = function (num1, num2) {
    var arrNums = [];
    if (num1 > num2) {
        for (var i = num1; i >= num2; i--) {
            arrNums.push(i);
        }
    }
    for (var x = num2; x >= num1; x--) {
        arrNums.push(x);
    }
    return arrNums;
};
//// Reto 9
var multi3 = function (num1, num2, num3, num4, num5) {
    var arraNums = [num1, num2, num3, num4, num5];
    var newArrNums = arraNums.map(function (element) { return element * 3; });
    return newArrNums;
};
////VANILLA III - FUNCIONES
//// Reto 1
var celsToFahrenheit = function (n) {
    return "".concat(n, " grados C son ").concat((n * 1.8) + 32, " grados F");
};
//// Reto 2
var checkDNI = function (dni) {
    var num = dni.slice(0, 8);
    var letter = dni.slice(8);
    var lettersDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
    var numI = parseInt(num, 10) % 23;
    var letterIndx = lettersDNI.charAt(numI);
    if (dni.length != 9) {
        return "su DNI no es valido";
    }
    return letter === letterIndx ? "Su DNI es correcto" : "Su DNI no es correcto";
};
//// Reto 3
var vocalOConsonante = function (str) {
    // let msj: string = "";
    var strLC = str.toString().toLowerCase();
    if (str.length != 1) {
        return "por favor ingrese solo 1 letra";
    }
    ;
    // switch (strLC) {
    //     case "a":
    //     case "e":
    //     case "i":
    //     case "o":
    //     case "u":
    //         msj = `${str} es una vocal`
    //         break;
    //     default:
    //         msj = `${str} es una consonante`
    //         break;
    // } return msj;
    if (strLC === "a" || strLC === "e" || strLC === "i" || strLC === "o" || strLC === "u") {
        return "".concat(str, " es una vocal");
    }
    return "".concat(str, " es una consonante");
};
//// Reto 4
var converStr = function (str) {
    var strTL = str.toString().toLowerCase();
    var strArr = Array.from(strTL);
    var newArrStr = [];
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] === "a") {
            newArrStr.push("4");
        }
        else if (strArr[i] === "e") {
            newArrStr.push("3");
        }
        else if (strArr[i] === "i") {
            newArrStr.push("1");
        }
        else if (strArr[i] === "o") {
            newArrStr.push("0");
        }
        else {
            newArrStr.push(str.charAt(i));
        }
    }
    return newArrStr.join("");
};
//// Reto 5
var countChar = function (str1, letter) {
    var count = 0;
    var strLC = str1.toString().toLowerCase();
    var letterLC = letter.toString().toLowerCase();
    for (var i = 0; i < str1.length; i++) {
        if (strLC.charAt(i) === letterLC) {
            count += 1;
        }
    }
    return "en la palabra ".concat(str1, " la letra ").concat(letter, ", est\u00E1 ").concat(count, " veces.");
};
//// Reto 6
var arrNums = function (nums) {
    var numGra = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] >= numGra) {
            numGra = nums[i];
        }
    }
    return numGra;
};
//// Reto 7
var arrNumSum = function (numsArr) {
    var containter = 0;
    for (var i = 0; i < numsArr.length; i++) {
        containter += numsArr[i];
    }
    return containter;
};
module.exports = {
    ///// Codicionales
    multiplos: multiplos,
    greatest: greatest,
    ifNum: ifNum,
    strLength: strLength,
    promNum: promNum,
    strLowerCase: strLowerCase,
    strToLower: strToLower,
    numRamdon: numRamdon,
    grades: grades,
    autosDes: autosDes,
    dayMonts: dayMonts,
    ruedaSize: ruedaSize,
    ruedaDiam: ruedaDiam,
    priceAuto: priceAuto,
    //////// bucles
    bucleNums: bucleNums,
    countNum: countNum,
    numPar: numPar,
    tabMultiplicar: tabMultiplicar,
    treeSimbol: treeSimbol,
    sumIntPos: sumIntPos,
    esPrime: esPrime,
    primeNums: primeNums,
    countdown: countdown,
    multi3: multi3,
    //////// Funtions
    celsToFahrenheit: celsToFahrenheit,
    checkDNI: checkDNI,
    vocalOConsonante: vocalOConsonante,
    converStr: converStr,
    countChar: countChar,
    arrNums: arrNums,
    arrNumSum: arrNumSum
};

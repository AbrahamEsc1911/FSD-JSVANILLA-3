////VANILLA III - CONDICIONALES

import { NumericLiteral, resolveTypeReferenceDirective, visitEachChild } from "typescript";

//// Reto 1

const multiplos = (num1: number, num2: number): boolean => {
    return num1 % num2 === 0 ? true : false;
}


//// Reto 2

const greatest = (num1: number, num2: number): string => {
    if (num1 > num2) {
        return `${num1} es mayor`
    } else if (num1 === num2) {
        return `Son iguales`
    } return `${num2} es mayor`
}

//// Reto 3

const ifNum = (num: number): string => {
    if (num > 0) {
        return `Es Positivo`
    } else if (num === 0) {
        return `Es cero`
    } return `Es negativo`
}

//// Reto 4

const strLength = (str: string): string => {
    return str.length === 5 ? `tiene 5 caracteres` : `tiene ${str.length} caracteres`
}

//// Reto 5

const promNum = (num1: number, num2: number, num3: number): string => {
    return (num1 + num2 + num3) / 3 > 5 ? `El promedio es mayor a 5` : `El promedio es ${((num1 + num2 + num3) / 3).toFixed(2)}`
}

//// Reto 6

const strLowerCase = (str: string): boolean => {
    const strToLower: string = str.toString().toLowerCase()
    return str === strToLower ? true : false
}

const strToLower = (str: string): string => {
    const strCheck: string[] = []
    const arrStr: string[] = Array.from(str)
    if (str === str.toString().toLowerCase()) {
        return `En el string ${str} todas son minusculas`
    }
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i] !== arrStr[i].toLowerCase()) {
            strCheck.push(arrStr[i])
        }
    } return `El string ${str} contiene algunas mayusculas: ${strCheck.join(",")}`;
}


//// Reto 7

const numRamdon = (): string => {
    const numRam: number = Math.round(Math.random() * (20 - 1) + 1)
    return numRam % 2 === 0 ? `El ${numRam} es par` : `El ${numRam} no es par`;
}

//// Reto 8

const grades = (num1: number, num2: number, num3: number): string => {
    return (num1 + num2 + num3) / 3 > 5 ? `Ha Aprovado con una calificacion promedio de ${((num1 + num2 + num3) / 3).toFixed(2)}` : `No ha Aprovado, la calificación promedio es ${((num1 + num2 + num3) / 3).toFixed(2)}`
}

//// Reto 9

const autosDes = (str: string): string => {
    const strToLower: string = str.toString().toLowerCase();
    let promo: string;

    switch (strToLower) {
        case "ford fiesta":
            promo = "El descuento es del 5%"
            break;
        case "ford focus":
            promo = "El descuento es del 10%"
            break;
        default:
            promo = "Este vehiculo no tiene descuento"
            break;
    } return promo;
}

//// Reto 10

const dayMonts = (num: number): string => {
    let nameMont: string;

    switch (num) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            nameMont = "Este mes tiene 31 días"
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            nameMont = "Este mes tiene 30 días"
            break;
        case 2:
            nameMont = "Este mes tiene 28 dias, si no es bisiesto."
            break;
        default:
            nameMont = "Indica un valor valido entre 1 y 12"
            break;
    } return nameMont;
}

//// Reto 11

const ruedaSize = (diametro: number): string => {
    if (diametro > 1.4) {
        return `La rueda es para un vehiculo grande`
    } else if (diametro <= 1.4 && diametro > 0.8) {
        return `La rueda es para un vehiculo mediano`
    } return `La rueda es para un vechiculo pequeño`
}

const ruedaDiam = (diametro: number, grosor: number): string => {
    if ((diametro > 1.4 && grosor < 0.4) || diametro <= 1.4 && diametro > 0.8 && grosor < 0.25) {
        return `El grosor para esta rueda es inferior al recomendado`
    } return `El grosor para esta rueda está correcto`
}

//// Reto 12

const priceAuto = (vehiculo: string, km: number): string => {
    const vehiculoTLC: string = vehiculo.toString().toLowerCase()
    const prCoche: number = 0.10;
    const prMoto: number = 0.20;
    const prAutobus: number = 0.05;
    let aPagar: string;
    if (km < 0) {
        return aPagar = "La cantidad en kms no puede ser menor a 0"
    }

    switch (vehiculoTLC) {
        case "coche":
            aPagar = `Vehiculo: ${vehiculo}, El total a pagar es ${km * prCoche}`;
            break;
        case "moto":
            aPagar = `Vehiculo: ${vehiculo}, El total a pagar es ${km * prMoto}`;
            break;
        case "autobus":
            aPagar = `Vehiculo: ${vehiculo}, El total a pagar es ${km * prAutobus}`;
            break;
        default:
            aPagar = `pro favor ingresa un vehiculo valido, o un km valido`;
            break;
    } return aPagar;
}

////VANILLA III - BUCLES

//// Reto 1

const bucleNums = (num: number): string => {
    let arrNum: number[] = []
    if (!Number.isInteger(num) || num < 1) {
        return `numero no válido`
    }
    for (let i = 0; i <= num; i++) {
        arrNum.push(i)
    } return `${arrNum.join(",")}`
}

//// Reto 2
const countNum = (numN: number, numM: number): number[] => {
    let arrNum: number[] = []
    for (let i = 0; i < numM; i += numN) {
        arrNum.push(i)
    } return arrNum;
}

//// Reto 3
const numPar = (num: number): string => {
    let arrNums: number[] = [];
    if (num <= 0) {
        return `Numero negativo`
    }
    for (let i = 0; i < num; i++) {
        i % 2 === 0 ? arrNums.push(i) : null;
    } return `${arrNums}`;
}

//// Reto 4

const tabMultiplicar = (num: number): string[] => {
    let arrNumMult: string[] = []
    for (let i = 1; i <= 12; i++) {
        arrNumMult.push(`${num} x ${i} = ${i * num}`)
    } return arrNumMult;
}


//// Reto 5

const treeSimbol = (simbol: string): string => {
    let simbols: string = "";
    for (let i = 0; i < 10; i++) {
        console.log(simbols += simbol)
    } return "||";
}

//// Reto 6

const sumIntPos = (num: number): string => {
    let sumAll: number = 0;
    let numU: number = Math.round(num)
    if (num <= 0) {
        return `El numero no puede ser 0 o menor.`
    }
    for (let i = 0; i < numU; i++) {
        sumAll += i
    } return `${sumAll}`;
}

///// Reto 7

const esPrime = (num : number) : boolean => {
    if(num <= 1) {
        return false;
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    } return true;
}


const primeNums = (num: number): number[] => {
    let numArr : number[] = []
    for(let i = 0; i <= num; i++){
        if(esPrime(i)){
            numArr.push(i)
        }
    } return numArr;
}



    module.exports = {
        ///// Codicionales
        multiplos,
        greatest,
        ifNum,
        strLength,
        promNum,
        strLowerCase,
        strToLower,
        numRamdon,
        grades,
        autosDes,
        dayMonts,
        ruedaSize,
        ruedaDiam,
        priceAuto,
        //////// bucles
        bucleNums,
        countNum,
        numPar,
        tabMultiplicar,
        treeSimbol,
        sumIntPos,
        esPrime,
        primeNums,
    }

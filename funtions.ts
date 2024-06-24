////VANILLA III

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

const ifNum = (num : number) : string => {
    if(num > 0){
        return `Es Positivo`
    } else if(num === 0){
        return `Es cero`
    } return `Es negativo`
}

//// Reto 4

const strLength = (str : string): string => {
    return str.length === 5 ? `tiene 5 caracteres` : `tiene ${str.length} caracteres`
}

//// Reto 5

const promNum = (num1: number, num2 : number, num3 : number) : string => {
    return (num1 + num2 + num3) / 3 > 5 ? `El promedio es mayor a 5` : `El promedio es ${((num1 + num2 + num3) / 3).toFixed(2)}`
}

//// Reto 6

const strLowerCase = (str : string) : boolean => {
    const strToLower : string = str.toString().toLowerCase()
    return str === strToLower ? true : false
}

const strToLower = (str : string) : string => {
    const strCheck : string[] = []
    const arrStr : string[] = Array.from(str)
    if(str === str.toString().toLowerCase()){
        return `En el string ${str} todas son minusculas`
    }
    for(let i = 0; i < arrStr.length; i++){
       if(arrStr[i] !== arrStr[i].toLowerCase()) {
        strCheck.push(arrStr[i])
       } 
    } return `El string ${str} contiene algunas mayusculas: ${strCheck.join(",")}`;
}


//// Reto 7

const numRamdon = () : string => {
    const numRam : number = Math.round(Math.random() * (20 - 1) + 1)
    return numRam % 2 === 0 ? `El ${numRam} es par` : `El ${numRam} no es par`;
}

//// Reto 8

const grades = (num1 : number, num2 : number, num3 : number) : string => {
    return (num1 + num2 + num3) / 3 > 5 ? `Ha Aprovado con una calificacion promedio de ${((num1 + num2 + num3) / 3).toFixed(2)}` : `No ha Aprovado, la calificación promedio es ${((num1 + num2 + num3) / 3).toFixed(2)}`
}

//// Reto 9

const autosDes = (str: string) : string => {
    const strToLower : string = str.toString().toLowerCase();
    let promo : string;

    switch(strToLower){
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

const dayMonts = (num : number) : string => {
    let nameMont : string;

    switch(num){
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

const ruedaSize = (diametro : number) : string => {
    if(diametro > 1.4){
        return `La rueda es para un vehiculo grande`
    } else if(diametro <= 1.4 && diametro > 0.8){
        return `La rueda es para un vehiculo mediano`
    } return `La rueda es para un vechiculo pequeño`
}

const ruedaDiam = (diametro : number, grosor : number) : string => {
    if((diametro > 1.4 && grosor < 0.4) || diametro <= 1.4 && diametro > 0.8 && grosor < 0.25){
        return `El grosor para esta rueda es inferior al recomendado`
    } return `El grosor para esta rueda está correcto`
}


module.exports = {
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
}



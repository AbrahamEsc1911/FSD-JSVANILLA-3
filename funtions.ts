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

module.exports = {
    multiplos,
    greatest,
    ifNum,
    strLength,
    promNum,
}



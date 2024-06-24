////VANILLA III

//// Reto 1

const multiplos = (num1: number, num2: number): boolean => {
    return num1 % num2 === 0 ? true : false;
}


//// Reto 2

const greatest = (num1 : number, num2 : number) : string => {
    if(num1 > num2){
        return `${num1} es mayor`
    } else if(num1 === num2){
        return `Son iguales`
    } return `${num2} es mayor`
}


module.exports = {
    multiplos,
    greatest,
}



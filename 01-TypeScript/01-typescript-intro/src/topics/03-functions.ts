// declaracion de funciones en typescript
function multiplyNumbers(a: number,b: number): number{
    return a * b;
}
const result1 = multiplyNumbers(5,3);

// declaracion de funciones flecha en typescript
const addNumbersArrow =(a: number, b:number): number =>{
    return a + b;
}

const result2 = addNumbersArrow(5,20);


// Enviando parametros opcionales y con valores por defecto
function multiply(firstNumber: number, secondNumber?: number, base : number = 2){
    return firstNumber * base;
}

const multiplyResult: number = multiply(5);

console.log({result1, result2, multiplyResult});


export{};
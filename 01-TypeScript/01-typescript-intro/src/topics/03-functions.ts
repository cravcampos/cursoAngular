// declaracion de funciones en typescript
function multiplyNumbers(a: number, b: number): number {
    return a * b;
}
multiplyNumbers(5, 2)
// declaracion de funciones flecha en typescript
const addNumbersArrow = (a: number, b: number): number => {
    return a + b;
}
addNumbersArrow(5, 2);

// Enviando parametros opcionales y con valores por defecto
function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

multiply(5);

// Ejemplo de funciones con objetos
interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}
healCharacter(strider, 20);

strider.showHp();
export { };
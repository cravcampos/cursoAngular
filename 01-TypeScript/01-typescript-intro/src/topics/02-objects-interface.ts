// Creacion de arreglos de un solo tipo en TypeScript
const skills: string[] = ['Bash', 'Counter', 'Healing'];
console.log({skills});

// Crear interfaces en TypeScript
interface Character{
    name: string,
    hp: number;
    skills: string[],
    // indicamos que un parametro es opcional con el simbolo ?
    hometown?: string;
}

// Usar interface en un objeto
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash','Counter']
}

console.table(strider);


export{};
//Desestructuracion de arreglos
const [,,trunks]: string[] = ['Goku','Vegeta','Trunks'];

console.log('Personaje 3: ', trunks);

// Desestructuracion de arreglos cunado el valor no existe
const [ , ,trunk = 'Not Found']: string[] = ['Goku','Vegeta'];
console.error('Personaje 3: ', trunk);


export{};
export class Person{
    public name: string;
    public address: string;

    constructor(){
        this.name = 'Victor Campos';
        this.address = 'Patio Bonito';
    }
}

const ironman = new Person();
console.log(ironman);
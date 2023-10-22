export class Person{

    constructor(
        public name: string,
        private address: string = 'No address'

    ){}
}

const ironman = new Person('Iron Man');
console.log(ironman);
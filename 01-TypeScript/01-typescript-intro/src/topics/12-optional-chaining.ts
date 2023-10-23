
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger: Passenger = {
    name: 'Victor',
}

const passenger2: Passenger = {
    name: 'Yohana Trujillo',
    children: ['Juan', 'German', 'Victor']
}

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
}

printChildren(passenger);
printChildren(passenger2);
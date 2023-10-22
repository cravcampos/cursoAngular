import { Product, taxCalculation } from "./07-function-destructuring";

const shoppingCar: Product[] = [
    {
        description: 'Nokia 1100',
        price: 1500
    },
    {
        description: 'Iphone 11',
        price: 2500
    }
];

const [total, tax] = taxCalculation({
    products: shoppingCar,
    tax: 0.15
})

console.log('Total: ', total );
console.log('Tax: ', tax);
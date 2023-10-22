// Desestructuracion de funciones 
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product = {
    description: "Ipad Air",
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

//function taxCalculation({tax, products}: TaxCalculationOptions): [number, number]{
export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const { tax, products } = options;

    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    });
    return [total, total * tax];
}



const shoppingCar = [phone, tablet];
const tax = 0.15;


const [total, taxTotal] = taxCalculation({
    products: shoppingCar,
    tax: tax
});

console.log('Total', total);
console.log('Total', taxTotal);

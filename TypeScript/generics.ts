/// Ex 1
const score: Array<number> = [];
const names: Array<string> = [];

/// Ex 2
function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any { //BAD!!!!
    return val;
}

/// Ex 3
function identityThree<Type>(val: Type): Type {
    return val;
}

function identityFour<T>(val: T): T {
    return val;
}

/// Ex 4
class Bootle {
    constructor(
        public brand: string,
        public type: number
    ) { }
}
const fgh = new Bootle("Brand", 1);
let x = identityFour<Bootle>(fgh);

/// Ex 5
function getSearchProducts<T>(products: T[]): T {
    // do some db operations
    const myIndex = 3;
    return products[myIndex];
}

const getSearchProductsArrow = <T>(products: T[]) => {
    // do some db operations
    const myIndex = 2;
    return products[myIndex];
}

/// Ex 6
function anotherFunc<T, U extends number>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    };
}
anotherFunc("3", 4);

/// Ex 7
interface Database {
    connection: string,
    serverName: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    };
}
anotherFunction("3", { connection: "constring", serverName: "testowy", password: "admin123" });

/// Ex 8 - Generic class
interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = [];

    addtoCart(product: T): void{
        this.cart.push(product);
    }
}
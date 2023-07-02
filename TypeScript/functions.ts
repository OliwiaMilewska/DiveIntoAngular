/// Ex 1
let hero: string;
function getHero(): string {
    return "Capitan America";
}
hero = getHero();

/// Ex 2
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}
addNumbers(2, 3);

/// Ex 3
function getUpper(str: string, def: string = "default value"): string {
    return `${str.toUpperCase()} - ${def}`;
}
getUpper("kjhgfd");

/// Ex 4 => Arrow functions
let loginUser = (name: string, email: string, isAdult: boolean): void => {
    name.toUpperCase();
    console.log(`User ${name} was loged with email: ${email}, Adult: ${isAdult}`);
};
let loginUser2 = (name: string, email: string, isAdult: boolean): void => {
    console.log(`User ${name.toUpperCase()} was loged with email: ${email}, Adult: ${isAdult}`);
};
let loginUser3 = (name: string, email: string, isAdult: boolean): void => console.log(`User ${name.toUpperCase()} was loged with email: ${email}, Adult: ${isAdult}`);

/// Ex 5
function handleErrow(errorMsg: string): never{
    throw new Error(errorMsg);
}
/* The never type represents values which are never observed.
In a return type, this means that the function throws an exception or terminates execution of the program.
Never also appears when TypeScript determines there's nothing left in union.*/


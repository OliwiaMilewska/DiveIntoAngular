/// Ex 1
interface Person {
    readonly dbId: number,
    name: string,
    userId: number,
    googleId?: number
}
const person: Person = {
    dbId: 1,
    name: "Olek",
    userId: 123
}

/// Ex 2
interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (num: number) => string; // arrow function
    getManagerName(number: number): string;
}

const empl: IEmployee = {
    empCode: 1234,
    empName: "James",
    getSalary: (num: number): string => {
        return `${num} zl`;
    },
    getManagerName: (number: number): string => {
        return "Aron";
    }
}

/// Ex 3
interface Admin extends Person{
    role: "PM" | "PO" | "TL"
}
let admin: Admin ={
    dbId: 2,
    name: "Json",
    userId: 1,
    role: "PM"
}
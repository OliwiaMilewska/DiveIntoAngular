/// Ex 1
class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    getSalary(): number {
        return 10000;
    }
}
let employee = new Employee(123, "Nick");
employee.empCode = 111;

/// Ex 2 - Inheritance
class Person {
    city: string;

    constructor(city: string) {
        this.city = city;
    }
}

class Employee2 extends Person {
    empCode: number;
    empName: string;

    constructor(code: number, name: string, city: string) {
        super(city);
        this.empName = name;
        this.empCode = code;
    }
    displayName(): void {
        console.log("Name = " + this.empName + ", Employee Code = " + this.empCode + ", City = " + this.city);
    }
}

/// Ex 3 - Implements Interfaces
interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
}

interface Story {
    createStory(): void;
}

class Instagram implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) { }

    createStory(): void {
        console.log("Story was created.");
    }
}
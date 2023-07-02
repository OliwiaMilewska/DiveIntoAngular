/// Ex 1
let score: number | string;
score = 33;
score = "12";

// Ex 2
type User4 = {
    name: string,
    id: number
}
type Admin = {
    username: string,
    id: number
}
let who: User4 | Admin = { name: "jhon", id: 547 };
who = { username: "jhon", id: 547 };

// Ex 3 
function getId(id: number | string): void {
    if (typeof id === "string") {
        id.toLowerCase();
        console.log(`This is string ID : ${id}`);
    }
    if (typeof id === "number") {
        console.log(`This is number ID : ${id}`);
    }
}

// Ex 4
const data: (string | number | boolean)[] = [1, "2", 3, "4", true]; //terrible idea 

// Ex 5
let seat: "aisle" | "middle" | "window";
seat = "window";
//seat = "sth"; not possible
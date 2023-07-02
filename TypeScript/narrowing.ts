/// Ex 1
function doSomething(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}

/// Ex 2
function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}

/// Ex 3 - the *in* operator
interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function checkIfAdmin(account: User | Admin) {
    if ("isAdmin" in account) { //check if this property exists in account
        return account.isAdmin;
    }
    return false;
}

/// Ex 4 - instanceof
function logValue(x: Date | string) {
    if (x instanceof Date)
        console.log(x.toUTCString());
    else
        console.log(x.toUpperCase());
}

/// Ex 5
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish { //Wow
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "fish food";
    }
    else {
        pet
        return "bird food";
    }
}

/// Ex 6 - Discrimination Union + Exhaustive checking 
interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
    if (shape.kind === "circle") {
        return "circle";
    }
    //return "square";
}

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const defaultShape: never = shape; // It never supposed to be running
            return defaultShape;
    }
}

